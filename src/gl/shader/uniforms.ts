import { UBO, UboContainer } from "../buffer/ubo.js";
import { gl } from "../gl.js";

export interface Uniforms {
  uResInv: WebGLUniformLocation | null;
  uTexInv: WebGLUniformLocation | null;
  uTex: WebGLUniformLocation | null;
  uTileSize: WebGLUniformLocation | null;
  uView: WebGLUniformLocation | null;
  uLayer: WebGLUniformLocation | null;
  uProgress: WebGLUniformLocation | null;
  uMapSize: WebGLUniformLocation | null;
}

export interface LooseUniforms {
  [key: string]: any;
}

export function fetchUniforms(id: WebGLProgram): Uniforms {
  const uniforms: LooseUniforms = {};
  for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_UNIFORMS); i++) {
    const info = gl.getActiveUniform(id, i);
    if (info) {
      const location = gl.getUniformLocation(id, info.name);
      uniforms[info.name] = location;
    }
  }
  return uniforms as Uniforms;
}

export function fetchUniformBlocks(id: WebGLProgram) : UboContainer {
  const ubos: UboContainer = {};
  let n = gl.getProgramParameter(id,gl.ACTIVE_UNIFORM_BLOCKS);
  for (let i = 0; i< n; i++) {
    const blockName = gl.getActiveUniformBlockName(id,i) as string;
    ubos[blockName] = UBO.byName(id, blockName);
  }
  return ubos;
}

export function fetchBlockUniformNames(id: WebGLProgram) : string[] {
  let uniformNames: string[] = [];
  for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_UNIFORMS); i++) {
    const info = gl.getActiveUniform(id, i);
    if (info && !gl.getUniformLocation(id, info.name)) {
      uniformNames.push(info.name);
    }
  }
  return uniformNames;
}