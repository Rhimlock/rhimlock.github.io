import { gl } from "../gl.js";

export interface Attribute {
    id: number,
    size: number,
    info: WebGLActiveInfo
}


export function fetchAttributes(id: WebGLProgram) {
    const attributes = [] as Attribute[];
    for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_ATTRIBUTES); i++) {
        const info = gl.getActiveAttrib(id, i);
        if (info) {
            const location = gl.getAttribLocation(id, info.name);
            if (location >= 0) {
                attributes.push({
                    id: location,
                    size: lookupSize(info.type),
                    info: info
                });
            }
           
        }
    }
    return attributes;
}


function lookupSize(type: number): number {
    let size = -1;
    switch (type) {
        case gl.FLOAT:
        case gl.UNSIGNED_INT:
        case gl.INT:
        case gl.SAMPLER_2D:
            size = 1;
            break;
        case gl.FLOAT_VEC2:
            size = 2;
            break;
        case gl.FLOAT_VEC3:
            size = 3;
            break;
        case gl.FLOAT_VEC4:
            size = 4;
            break;
    }
    if (size < 0) {
        throw {
            name: "ShaderError",
            message: "unable to lookup length of type: " + type
        };
    }
    return size;
}