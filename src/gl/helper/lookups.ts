import { gl } from "../gl.js";
import { VertexAttribute } from "./interfaces.js";

export function lookupVertexAttributes(program: WebGLProgram, attribs: { [key : string] : VertexAttribute}) {
    let offset = 0;
    for (const [key, attrib] of Object.entries(attribs)){
        attrib.location = gl.getAttribLocation(program, key);
        const info = gl.getActiveAttrib(program,attrib.location) as WebGLActiveInfo;
        attrib.size = attrib.size??lookupSizeByType(info.type);
        attrib.type = attrib.type??gl.FLOAT;
        attrib.normalize = !!attrib.normalize;
        attrib.offset = offset;
        offset += lookupByteSize(attrib.type) * attrib.size;
    }   
    const stride = offset;
    Object.values(attribs).forEach(a => a.stride = stride);
    return attribs;
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
        default:
            throw `could not getTypeSize() for Type ${type}`
    }
}

export function lookupSizeByType(type: number) {
    switch (type) {
        case gl.FLOAT:
            return 1;
        case gl.FLOAT_VEC2:
            return 2;
        case gl.FLOAT_VEC3:
            return 3;
        case gl.FLOAT_VEC4:
            return 4;
        default:
            throw 'unknown type in lookupSizeByteType';
    }
}