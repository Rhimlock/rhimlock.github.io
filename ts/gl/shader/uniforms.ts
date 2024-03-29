import { Collection } from "../../helper/Collection.js";
import { UBO } from "../buffer/ubo.js";
import { gl } from "../gl.js";

export function getUniformBlocks(program: WebGLProgram) {
  const ubos = {} as Collection<UBO>;
  Array(gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS))
    .fill(undefined)
    .map((_, i) => gl.getActiveUniformBlockName(program, i) as string)
    .map((blockName) => (ubos[blockName] = UBO.byName(program, blockName)));
  return ubos;
}

export function getBlockOffsets(program: WebGLProgram, ubo: UBO) {
  const blockIndex = gl.getUniformBlockIndex(program, ubo.blockName);
  const indices = gl.getActiveUniformBlockParameter(
    program,
    blockIndex,
    gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES,
  ) as number[];
  const offsets = gl.getActiveUniforms(
    program,
    indices,
    gl.UNIFORM_OFFSET,
  ) as number[];

  const collection = {} as Collection<number>;
  indices.forEach((index, i) => {
    const info = gl.getActiveUniform(program, index) as WebGLActiveInfo;
    collection[info.name] = offsets[i] as number;
  });
  return collection;
}

export function lookupUniformSetter(
  type: number,
  location: WebGLUniformLocation,
): Function {
  switch (type) {
    case gl.SAMPLER_2D:
    case gl.INT:
      return (value: number) => gl.uniform1i(location, value);
    case gl.INT_VEC2:
      return (value: Iterable<number>) => gl.uniform2iv(location, value);
    case gl.INT_VEC3:
      return (value: Iterable<number>) => gl.uniform3iv(location, value);
    case gl.INT_VEC3:
      return (value: Iterable<number>) => gl.uniform4iv(location, value);
    case gl.UNSIGNED_INT:
      return (value: number) => gl.uniform1ui(location, value);
    case gl.UNSIGNED_INT_VEC2:
      return (value: Iterable<number>) => gl.uniform2uiv(location, value);
    case gl.UNSIGNED_INT_VEC3:
      return (value: Iterable<number>) => gl.uniform3uiv(location, value);
    case gl.UNSIGNED_INT_VEC3:
      return (value: Iterable<number>) => gl.uniform4uiv(location, value);
    case gl.FLOAT:
      return (value: number) => gl.uniform1f(location, value);
    case gl.FLOAT_VEC2:
      return (value: Iterable<number>) => gl.uniform2fv(location, value);
    case gl.FLOAT_VEC3:
      return (value: Iterable<number>) => gl.uniform3fv(location, value);
    case gl.FLOAT_VEC4:
      return (value: Iterable<number>) => gl.uniform4fv(location, value);
    default:
      throw "Could not lookup uniform sett for type " + type;
  }
}
