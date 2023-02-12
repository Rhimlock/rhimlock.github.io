import { gl } from "../gl.js";
import { BufferItem } from "../helper/interfaces.js";

export class BufferView {
    _definition: { [key: string]: BufferItem }

    constructor(definition: { [key: string]: BufferItem }, data: ArrayBuffer) {
        this._definition = definition;
        this.initProperties(data);
    }

    initProperties(data: ArrayBuffer) {
        for (const [key, item] of Object.entries(this._definition)) {
            const functions = lookupGetterSetter(data, item);
            Object.defineProperty(this, key, {
                get: functions.getter,

                set: functions.setter
            });
        }
    }
}

function lookupGetterSetter(buffer: ArrayBuffer, item: BufferItem) {
    const TYPED_ARRAY = mapTypeToTypedArray(item.type);
    const a = new TYPED_ARRAY(buffer, item.offset, item.size);
    switch (item.type) {
        case gl.UNSIGNED_BYTE:
        case gl.BYTE:
        case gl.UNSIGNED_SHORT:
        case gl.SHORT:
        case gl.UNSIGNED_INT:
        case gl.INT:
        case gl.FLOAT:
            return {
                getter: () => a[0],
                setter: (value: number) => a[0] = value
            }
        default:
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