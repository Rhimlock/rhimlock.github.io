import { BufferView } from "./bufferview.js";
import { gl } from "../gl.js";
import { lookupLengthByType } from "../helper/lookups.js";
import { Buffer } from "./buffer.js";

export class UniformBuffer extends Buffer {
    bindingPoint: number
    uniforms: BufferView
    constructor(program: WebGLProgram, blockName: string) {

        const index = gl.getUniformBlockIndex(program, blockName);
        const uniformIndices = gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);

        super(
            gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_DATA_SIZE),
            lookupBlockUniforms(program, uniformIndices),
            gl.UNIFORM_BUFFER,
            gl.DYNAMIC_READ
        );
        this.uniforms = super.createView();
        this.bindingPoint = gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_BINDING);
    }

    sync() {
        super.sync();
        gl.bindBufferBase(this.target, this.bindingPoint, this.id);
    }

};

function lookupBlockUniforms(program: WebGLProgram, indices: number[]) {
    const uniforms = {} as { [key: string]: any };
    const offsets = gl.getActiveUniforms(program, indices, gl.UNIFORM_OFFSET);
    return offsets.forEach((offset: number, n: number) => {
        const info = gl.getActiveUniform(program, indices[n] as number) as WebGLActiveInfo;
        uniforms[info.name] = {
            type: info.type,
            offset,
            length: lookupLengthByType(info.type)
        }
    })
}



