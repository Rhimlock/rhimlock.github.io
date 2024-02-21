import { gl } from "../gl.js";

export interface Attribute {
  id: number;
  size: number;
  info: WebGLActiveInfo;
}

export function fetchAttributes(id: WebGLProgram) {
  const attributes = [] as Attribute[];
  for (let i = 0; i < gl.getProgramParameter(id, gl.ACTIVE_ATTRIBUTES); i++) {
    const info = gl.getActiveAttrib(id, i);
    if (info) {
      const location = gl.getAttribLocation(id, info.name);
      if (location >= 0) {
        attributes.push({
          id: location,
          size: lookupSize(info.type),
          info: info,
        });
      }
    }
  }
  return attributes;
}

function lookupSize(type: number): number {
  switch (type) {
    case gl.FLOAT:
    case gl.UNSIGNED_INT:
    case gl.INT:
    case gl.SAMPLER_2D:
      return 1;
    case gl.FLOAT_VEC2:
      return 2;
    case gl.FLOAT_VEC3:
      return 3;
      break;
    case gl.FLOAT_VEC4:
      return 4;
    default:
      throw {
        name: "ShaderError",
        message: "unable to lookup length of type: " + type,
      };
  }
}
