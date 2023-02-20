import { lookupTypedArrayByType } from "../lookups.js";

export class Vertex {
    _definition: AttributeCollection
    _data : DataView
    
    constructor(definition: AttributeCollection, data: DataView, attributes? : { [key : string] : number | number[]}) {
        this._data = data;
        this._definition = definition;
        this.initAttributes(data);
        if (attributes) this.setValues(attributes);
    }

    initAttributes(data: DataView) {
        this._data = data;
        for (const [key, item] of Object.entries(this._definition)) {
            const functions = lookupGetterSetter(data, item);
            Object.defineProperty(this, key, {
                get: functions.getter,

                set: functions.setter
            });
        }
    }

    setValues(attributes : { [key : string] : number | number[]}) {
        const self = this;
        Object.entries(attributes).forEach(([key, value]) => {
            const desc = Object.getOwnPropertyDescriptor(self, key);
            if (desc && desc.set) {
                desc?.set(value);
            } else {
                throw `Property ${key} not available in Vertex ${self}`
            }
        })
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