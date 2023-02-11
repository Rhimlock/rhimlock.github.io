import { gl } from "../gl.js";
import { VertexAttribute } from "./interfaces.js";

export function lookupVertexAttributes(program: WebGLProgram, attribs: { [key: string]: VertexAttribute }) {
    let offset = 0;
    for (const [key, attrib] of Object.entries(attribs)) {
        attrib.location = gl.getAttribLocation(program, key);
        const info = gl.getActiveAttrib(program, attrib.location) as WebGLActiveInfo;
        attrib.size = attrib.size ?? lookupSizeByType(info.type);
        attrib.type = attrib.type ?? gl.FLOAT;
        attrib.normalize = !!attrib.normalize;
        attrib.offset = offset;
        offset += lookupByteSize(attrib.type) * attrib.size;
    }
    const stride = offset;
    Object.values(attribs).forEach(a => a.stride = stride);
    return attribs;
}

export function lookupUniforms(program: WebGLProgram, blockIndex = -1) {
    const uniforms = {} as { [key: string]: any };
    let indices = [...Array(gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)).keys()] as number[];
    let blockIndices = gl.getActiveUniforms(program, indices, gl.UNIFORM_BLOCK_INDEX) as number[];
    indices.forEach(index => {
        if (blockIndices[index] == blockIndex) {
            const info = gl.getActiveUniform(program, index);
            const location = gl.getUniformLocation(program, info?.name as string);
            const uniform_function = lookupUniformSetter(info?.type as number);
            uniforms[info?.name as string] = {
                value: undefined,
                func: (value: number) => uniform_function.call(gl, location, value)
            }
        }
    })

    return uniforms;
}

function lookupUniformSetter(type: number) {
    switch (type) {
        case gl.SAMPLER_2D:
            return gl.uniform1i;
        case gl.FLOAT:
            return gl.uniform1f;
        default:
        case gl.FLOAT_VEC2:
            gl.uniform2fv;
            throw `lookupUniformSetter() failed for type {%type}`
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