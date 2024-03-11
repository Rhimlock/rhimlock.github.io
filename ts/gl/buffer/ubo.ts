import { Collection } from "../../helper/Collection.js";
import { TypedArray } from "../../helper/typedArray.js";
import { gl, UBOS } from "../gl.js";
import { Uniform, getBlockUniforms } from "../shader/uniforms.js";
import { Buffer } from "./buffer.js";

let baseIndex = 0;
export class UBO extends Buffer {
  blockName: string;
  blockSize: number;
  uniforms: Collection<Uniform> = {};
  baseIndex: number;

  private constructor(program: WebGLProgram, blockName: string) {
    super(gl.UNIFORM_BUFFER, gl.DYNAMIC_DRAW);
    this.blockName = blockName;
    const blockIndex = gl.getUniformBlockIndex(program, blockName);
    this.blockSize = gl.getActiveUniformBlockParameter(
      program,
      blockIndex,
      gl.UNIFORM_BLOCK_DATA_SIZE,
    );
    this.baseIndex = baseIndex++;
    this.resize(this.blockSize);
    gl.bindBufferBase(this.target, this.baseIndex, this.id);
    this.uniforms = getBlockUniforms(program, this);
    UBOS[blockName] = this;
  }

  private bindBlock(program: WebGLProgram) {
    const blockIndex = gl.getUniformBlockIndex(program, this.blockName);
    gl.uniformBlockBinding(program, blockIndex, this.baseIndex);
  }

  updateUniform(name: string, values: TypedArray) {
    const uniform = this.uniforms[name] as Uniform;
    this.update(values, uniform?.offset);
  }

  static byName(program: WebGLProgram, blockName: string) {
    const ubo = UBOS[blockName] ?? new UBO(program, blockName);
    ubo.bindBlock(program);
    return ubo;
  }

  static byUniformName(uniformName: string) {
    const ubo = Object.values(UBOS).find((ubo) => ubo.uniforms[uniformName]);
    return ubo;
  }
}
