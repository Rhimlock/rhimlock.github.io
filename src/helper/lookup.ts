import { gl } from "../gl/gl.js";

export function lookupActiveInfoTypeSize(type: number): number {
    let size = -1;
    switch (type) {
        case gl.FLOAT:
        case gl.UNSIGNED_INT:
        case gl.INT:
        case gl.SAMPLER_2D:
            size = 1;
            break;
        case gl.FLOAT_VEC2:
        case gl.INT_VEC2:
        case gl.UNSIGNED_INT_VEC2:
            size = 2;
            break;
        case gl.FLOAT_VEC3:
        case gl.INT_VEC3:
        case gl.UNSIGNED_INT_VEC3:
            size = 3;
            break;
        case gl.FLOAT_VEC4:
        case gl.INT_VEC4:
        case gl.UNSIGNED_INT_VEC4:
        case gl.FLOAT_MAT4:
            size = 4;
            break;
    }
    if (size < 0) {
       throw {
            name: "ActiveInfoError",
            message: "unable to lookup length of type: " + type
        };
    }
    return size;
}