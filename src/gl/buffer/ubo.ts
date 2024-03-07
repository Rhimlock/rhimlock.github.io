import { TypedArray } from "../../helper/typedArray.js";
import { gl } from "../gl.js";
import { Buffer } from "./buffer.js";

interface UniformInfo {
    index:WebGLUniformLocation,
    offset:number
}
interface Uniforms {
    [key: string]: UniformInfo;
}

export interface UboContainer {
    [key: string]: UBO;
}
const UBOS: UboContainer = {};

let baseIndex = 0;
export class UBO extends Buffer {

    blockIndex: number
    blockSize: number
    uniforms: Uniforms = {}
    baseIndex: number

    private constructor(program: WebGLProgram, blockName: string) {
        super(gl.UNIFORM_BUFFER, gl.DYNAMIC_DRAW);
        this.blockIndex = gl.getUniformBlockIndex(program, blockName);
        this.blockSize = gl.getActiveUniformBlockParameter(program, this.blockIndex, gl.UNIFORM_BLOCK_DATA_SIZE);
        this.baseIndex = baseIndex++;
        this.resize(this.blockSize);
        gl.bindBufferBase(this.target, this.baseIndex, this.id);
        this.initUniforms(program);
    }

    static byName(program: WebGLProgram, blockName: string) {
        const ubo = UBOS[blockName] ?? new UBO(program, blockName);
        ubo.bindBlock(program);
        return ubo;
    }

    private initUniforms(program: WebGLProgram) {
        const indices = gl.getActiveUniformBlockParameter(program,this.blockIndex,gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES) as number[];
        const offsets = gl.getActiveUniforms(
            program,
            indices,
            gl.UNIFORM_OFFSET
        ) as number[];
        
        indices.forEach((index,i) => {
            const uniformName = gl.getActiveUniform(program,index)?.name as string;
            this.uniforms[uniformName] = {
                index: index,
                offset: offsets[i] as number
            }
        })
    }

    private bindBlock(program: WebGLProgram) {
        gl.uniformBlockBinding(program,this.blockIndex,this.baseIndex);
    }

    updateUniform(name:string, values:TypedArray) {
        const uniform = this.uniforms[name] as UniformInfo;
        this.update(values,uniform.offset);
    }
}