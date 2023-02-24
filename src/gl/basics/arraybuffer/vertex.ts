import { lookupTypedArrayByType } from "../lookups.js";

export class Vertex {
    
    constructor(definition: AttributeCollection, data: DataView, values? : { [key : string] : number | number[]}) {
        this.addAttributes(definition, data);
        if(values) this.setValues(values);
    }

    addAttributes(definition: AttributeCollection, data: DataView) {
        for (const [key, item] of Object.entries(definition)) {
            const functions = lookupGetterSetter(data, item);
            Object.defineProperty(this, key, {
                get: functions.getter,

                set: functions.setter
            });
        }
    }

    setValues(attributes : { [key : string] : number | number[]}) {
        const self = this;
        for (const [key, value] of Object.entries(attributes)) {
            const desc = Object.getOwnPropertyDescriptor(self, key);
            if (desc && desc.set) {
                desc?.set(value);
            } else {
                throw `Property ${key} not available in Vertex ${self}`
            }
        }
    }
}

function lookupGetterSetter(data: DataView, attrib: Attribute) {
    const TYPED_ARRAY = lookupTypedArrayByType(attrib.type);
    const a = new TYPED_ARRAY(data.buffer, data.byteOffset + (attrib.offset as number), attrib.size);
    if (attrib.size == 1) {
        return {
            getter: () => a[0],
            setter: (value: number) => a[0] = value
        }
    } else {
        return {
            getter: () => a,
            setter: (values: number[]) => a.set(values)
        };
    }
    
}

export interface AttributeCollection {
    [key:string] : Attribute
}

export interface Attribute {
    location?: number,
    size: number,
    type: number,
    normalized?: boolean,
    stride?: number
    offset?: number,
    useIPointer?: boolean
}