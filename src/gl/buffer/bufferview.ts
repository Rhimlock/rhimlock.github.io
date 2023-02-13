import { gl } from "../gl.js";
import { BufferItem, BufferItemDefinition } from "../helper/interfaces.js";

export class BufferView {
    _definition: BufferItemDefinition
    _data : DataView
    
    constructor(definition: BufferItemDefinition, data: DataView) {
        this._data = data;
        this._definition = definition;
        this.initProperties(data);
    }

    initProperties(data: DataView) {
        this._data = data;
        for (const [key, item] of Object.entries(this._definition)) {
            const functions = lookupGetterSetter(data, item);
            Object.defineProperty(this, key, {
                get: functions.getter,

                set: functions.setter
            });
        }
    }
}

function lookupGetterSetter(data: DataView, item: BufferItem) {
    const TYPED_ARRAY = mapTypeToTypedArray(item.type);
    const a = new TYPED_ARRAY(data.buffer, data.byteOffset + (item.offset as number), item.size);
    if (item.size == 1) {
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

function mapTypeToTypedArray(type: number) {
    switch (type) {
        case gl.UNSIGNED_BYTE:
            return Uint8Array;
        case gl.BYTE:
            return Int8Array;
        case gl.UNSIGNED_SHORT:
            return Uint16Array;
        case gl.SHORT:
            return Int16Array;
        case gl.UNSIGNED_INT:
            return Uint32Array;
        case gl.INT:
            return Int32Array;
        default:
            return Float32Array;
    }
}