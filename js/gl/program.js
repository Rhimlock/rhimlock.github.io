import { lookupActiveInfoTypeSize } from "../helper/lookup.js";
import { gl } from "./gl.js";
export class Program {
    constructor(srcVertexShader, srcFragmentShader) {
        this.attributes = [];
        this.uniforms = [];
        this.uniformBlocks = [];
        this.id = gl.createProgram();
        this.vert = this.compileShader(gl.VERTEX_SHADER, srcVertexShader);
        this.frag = this.compileShader(gl.FRAGMENT_SHADER, srcFragmentShader);
        gl.linkProgram(this.id);
        gl.useProgram(this.id);
        const err = gl.getProgramInfoLog(this.id);
        if (err)
            throw `linkingError: ${err}`;
        this.initAttributes();
        this.initUniforms();
        this.initUniformBlocks();
    }
    compileShader(type, src) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        const err = gl.getShaderInfoLog(shader);
        if (err)
            throw `compileError: ${type} - ${err}`;
        gl.attachShader(this.id, shader);
        return shader;
    }
    initAttributes() {
        const n = gl.getProgramParameter(this.id, gl.ACTIVE_ATTRIBUTES);
        for (let i = 0; i < n; ++i) {
            const info = gl.getActiveAttrib(this.id, i);
            info.location = gl.getAttribLocation(this.id, info.name);
            info.typeSize = lookupActiveInfoTypeSize(info.type);
            this.attributes.push(info);
        }
    }
    initUniforms() {
        const n = gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < n; ++i) {
            const info = gl.getActiveUniform(this.id, i);
            info.typeSize = lookupActiveInfoTypeSize(info.type);
            info.location = gl.getUniformLocation(this.id, info.name);
            if (!info.location) {
                info.block = gl.getActiveUniforms(this.id, [i], gl.UNIFORM_BLOCK_INDEX)[0];
            }
            this.uniforms.push(info);
        }
    }
    initUniformBlocks() {
        const n = gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORM_BLOCKS);
        for (let i = 0; i < n; ++i) {
            const block = {
                name: gl.getActiveUniformBlockName(this.id, i),
                size: gl.getActiveUniformBlockParameter(this.id, i, gl.UNIFORM_BLOCK_DATA_SIZE),
                vars: this.uniforms.filter(u => {
                    return (u.block === i);
                })
            };
            this.uniformBlocks.push(block);
        }
    }
}
//# sourceMappingURL=program.js.map