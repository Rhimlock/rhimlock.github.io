import { gl } from "./gl.js";

export function lookupSize(type: number): number {
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

export function createTypedArrayByGlType(type: number, length: number) {
  switch (type) {
    case gl.UNSIGNED_BYTE:
      return new Uint8Array(length);
    case gl.BYTE:
      return new Int8Array(length);
    case gl.UNSIGNED_SHORT:
      return new Uint16Array(length);
    case gl.SHORT:
      return new Int16Array(length);
    case gl.UNSIGNED_INT:
      return new Uint32Array(length);
    case gl.INT:
      return new Int32Array(length);
    case gl.FLOAT:
      return new Float32Array(length);
    case gl.FLOAT_VEC2:
      return new Float32Array(length * 2);
    case gl.FLOAT_VEC3:
      return new Float32Array(length * 3);
    case gl.FLOAT_VEC4:
      return new Float32Array(length * 4);
    default:
      throw "Unknown type for VBO: " + type;
  }
}
