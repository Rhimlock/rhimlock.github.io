import { gl } from "./gl.js";
export class Program {
    constructor(srcVert, srcFrag) {
        this.attributes = [];
        this.uniforms = {};
        this.id = gl.createProgram();
        this.vert = compileShader(srcVert, gl.VERTEX_SHADER);
        this.frag = compileShader(srcFrag, gl.FRAGMENT_SHADER);
        if (this.id && this.vert && this.frag) {
            gl.attachShader(this.id, this.vert);
            gl.attachShader(this.id, this.frag);
            gl.linkProgram(this.id);
            gl.useProgram(this.id);
            var err = gl.getProgramInfoLog(this.id);
            if (err)
                throw `linkingError: ${err}`;
            this.attributes = fetchAttributes(this.id);
            this.uniforms = fetchUniforms(this.id);
        }
    }
}
function compileShader(src, type) {
    const id = gl.createShader(type);
    if (id !== null) {
        gl.shaderSource(id, src);
        gl.compileShader(id);
        const err = gl.getShaderInfoLog(id);
        if (err)
            throw `compileError: ${type} - ${err}`;
    }
    return id;
}
function fetchAttributes(id) {
    const attributes = [];
    for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_ATTRIBUTES); i++) {
        const info = gl.getActiveAttrib(id, i);
        if (info) {
            attributes.push({
                id: gl.getAttribLocation(id, info.name),
                size: lookupSize(info.type),
                info: info
            });
        }
    }
    return attributes;
}
function fetchUniforms(id) {
    const uniforms = {};
    for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_UNIFORMS); i++) {
        const info = gl.getActiveUniform(id, i);
        if (info) {
            const location = gl.getUniformLocation(id, info.name);
            uniforms[info.name] = location;
        }
    }
    return uniforms;
}
function lookupSize(type) {
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
//# sourceMappingURL=program.js.map