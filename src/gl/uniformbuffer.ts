import { gl } from "./gl.js";
import { Uniform, UniformBlock } from "./helper/interfaces.js";

export class UniformBuffer {
    buffer : WebGLBuffer
    data : DataView
    block : UniformBlock
    uniforms: Uniform[]
    constructor(program : WebGLProgram, blockName : string) {
        

        this.block = lookupUniformBlock(program, blockName) as UniformBlock;
        this.uniforms = this.block.uniforms;
        this.data = new DataView(new ArrayBuffer(this.block.dataSize));

        this.buffer = gl.createBuffer() as WebGLBuffer;
        gl.bindBuffer(gl.UNIFORM_BUFFER, this.buffer);
        gl.bufferData(gl.UNIFORM_BUFFER, this.data, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null);
        gl.bindBufferBase(gl.UNIFORM_BUFFER, this.block.bindingPoint, this.buffer);
    }

    sync() {
        gl.bindBuffer(gl.UNIFORM_BUFFER, this.buffer);
        gl.bufferSubData(gl.UNIFORM_BUFFER, 0, this.data, 0);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null);
        gl.bindBufferBase(gl.UNIFORM_BUFFER, this.block.bindingPoint, this.buffer);
    }
};


function lookupUniformBlock(program: WebGLProgram, blockName: string) {
    const index = gl.getUniformBlockIndex(program, blockName);
    const bindingPoint = gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_BINDING);
    const dataSize = gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_DATA_SIZE);
    const indices = gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS);
    return {
        index,
        bindingPoint,
        dataSize,
        uniforms : indices
    }
}