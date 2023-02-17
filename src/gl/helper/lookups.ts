import { gl } from "../gl.js";

export function lookupUniformSetter(type: number) {
    switch (type) {
        case gl.SAMPLER_2D:
        case gl.INT:
            return gl.uniform1iv;
        case gl.INT_VEC2:
            return gl.uniform2iv;
        case gl.INT_VEC3:
            return gl.uniform3iv;
        case gl.INT_VEC4:
            return gl.uniform3iv;
        case gl.UNSIGNED_INT:
            return gl.uniform1iv;
        case gl.UNSIGNED_INT_VEC2:
            return gl.uniform2iv;
        case gl.UNSIGNED_INT_VEC3:
            return gl.uniform3iv;
        case gl.UNSIGNED_INT_VEC4:
            return gl.uniform3iv;
        case gl.FLOAT:
            return gl.uniform1fv;
        case gl.FLOAT_VEC2:
            return gl.uniform2fv;
        case gl.FLOAT_VEC3:
            return gl.uniform3fv;
        case gl.FLOAT_VEC4:
            return gl.uniform4fv;
        default:
            throw `lookupUniformSetter() failed for type ${type}`
    }
}

export function lookupByteSize(type: number) {
    switch (type) {
        case gl.BYTE:
        case gl.UNSIGNED_BYTE:
            return 1;
        case gl.SHORT:
        case gl.UNSIGNED_SHORT:
            return 2;
        case gl.INT:
        case gl.UNSIGNED_INT:
        case gl.FLOAT:
            return 4;
        case gl.INT_VEC2:
        case gl.UNSIGNED_INT_VEC2:
        case gl.FLOAT_VEC2:
            return 8;
        case gl.INT_VEC3:
        case gl.UNSIGNED_INT_VEC3:
        case gl.FLOAT_VEC3:
            return 12;
        case gl.INT_VEC4:
        case gl.UNSIGNED_INT_VEC4:
        case gl.FLOAT_VEC4:
            return 16;
        default:
            throw `could not lookupByteSize() for Type ${type}`
    }
}

export function lookupLengthByType(type: number) {
    switch (type) {
        case gl.INT:
        case gl.UNSIGNED_INT:
        case gl.FLOAT:
            return 1;
        case gl.INT_VEC2:
        case gl.UNSIGNED_INT_VEC2:
        case gl.FLOAT_VEC2:
            return 2;
        case gl.INT_VEC3:
        case gl.UNSIGNED_INT_VEC3:
        case gl.FLOAT_VEC3:
            return 3;
        case gl.INT_VEC4:
        case gl.UNSIGNED_INT_VEC4:
        case gl.FLOAT_VEC4:
            return 4;
        default:
            throw `unknown type in lookupLengthByType ${type}`;
    }
}

export function lookupPointerType(type: number) {
    switch (type) {
        case gl.INT:
        case gl.INT_VEC2:
        case gl.INT_VEC3:
        case gl.INT_VEC4:
            return gl.INT;
        case gl.UNSIGNED_INT:
        case gl.UNSIGNED_INT_VEC2:
        case gl.UNSIGNED_INT_VEC3:
        case gl.UNSIGNED_INT_VEC4:
            return gl.UNSIGNED_INT;
        case gl.FLOAT:
        case gl.FLOAT_VEC2:
        case gl.FLOAT_VEC3:
        case gl.FLOAT_VEC4:
            return gl.FLOAT;
        default:
            throw `unknown type in lookupPointerType ${type}`;
    }
}


export function lookupTypedArrayByType(type: number) {
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

export const nextPowerOf2 = (value: number) => Math.pow(2, Math.ceil(Math.log(value) / Math.log(2)));