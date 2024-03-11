import { Collection } from "../../helper/Collection.js";
import { UBO } from "../buffer/ubo.js";
import { gl } from "../gl.js";

export interface Uniform {
  info: WebGLActiveInfo;
  location: WebGLUniformLocation | null;
  offset: number | undefined;
  ubo: UBO | undefined;
  func: Function;
}

export function getUniforms(id: WebGLProgram): Collection<Uniform> {
  const uniforms: Collection<Uniform> = {};

  for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_UNIFORMS); i++) {
    const info = gl.getActiveUniform(id, i);
    if (info) {
      const name = info.name;
      const location = gl.getUniformLocation(id, name);

      uniforms[name] = {
        info,
        location,
        ubo: UBO.byUniformName(name),
        func: lookupSetter(info.type),
      } as Uniform;
    }
  }
  return uniforms;
}

export function getUniformBlocks(program: WebGLProgram) {
  const ubos = {} as Collection<UBO>;
  const indices = new Array(gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS))
    .fill(-1)
    .map((_, i) => i);
  if (indices.length > 0) {
    const blockIndices: number[] = gl.getActiveUniforms(
      program,
      indices,
      gl.UNIFORM_BLOCK_INDEX,
    );
    blockIndices
      .filter((i) => i >= 0)
      .forEach((blockIndex) => {
        const blockName = gl.getActiveUniformBlockName(program, blockIndex);
        if (blockName) {
          ubos[blockName] = UBO.byName(program, blockName);
        } else {
        }
      });
  }
  return ubos;
}

export function getBlockUniforms(program: WebGLProgram, ubo: UBO) {
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
  const uniforms: Collection<Uniform> = {};
  indices.forEach((index, i) => {
    const info = gl.getActiveUniform(program, index);
    if (info) {
      uniforms[info.name] = {
        info,
        location: null,
        offset: offsets[i],
        ubo,
      } as Uniform;
    }
  });
  return uniforms;
}

function lookupSetter(type: number): Function {
  switch (type) {
    case gl.SAMPLER_2D:
      return gl.uniform1i;
    case gl.UNSIGNED_INT:
      return gl.uniform1ui;
    case gl.UNSIGNED_INT_VEC2:
      return gl.uniform2uiv;
    case gl.UNSIGNED_INT_VEC3:
      return gl.uniform3uiv;
    case gl.UNSIGNED_INT_VEC3:
      return gl.uniform4uiv;
    case gl.INT:
      return gl.uniform1i;
    case gl.INT_VEC2:
      return gl.uniform2iv;
    case gl.INT_VEC3:
      return gl.uniform3iv;
    case gl.INT_VEC3:
      return gl.uniform4iv;
    case gl.FLOAT:
      return gl.uniform1f;
    case gl.FLOAT_VEC2:
      return gl.uniform2fv;
    case gl.FLOAT_VEC3:
      return gl.uniform3fv;
    case gl.FLOAT_VEC4:
      return gl.uniform4fv;
    default:
      throw "Could not lookup uniform sett for type " + type;
  }
}
