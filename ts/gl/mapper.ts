import { gl } from "./gl.js";

export function getNumComponents(type: number): number {
  switch (type) {
    case gl.UNSIGNED_BYTE:
    case gl.UNSIGNED_SHORT:
    case gl.UNSIGNED_INT:
    case gl.BYTE:
    case gl.SHORT:
    case gl.INT:
    case gl.FLOAT:
    case gl.SAMPLER_2D:
      return 1;
    case gl.UNSIGNED_INT_VEC2:
    case gl.INT_VEC2:
    case gl.FLOAT_VEC2:
      return 2;
    case gl.UNSIGNED_INT_VEC3:
    case gl.INT_VEC3:
    case gl.FLOAT_VEC3:
      return 3;
    case gl.UNSIGNED_INT_VEC4:
    case gl.INT_VEC4:
    case gl.FLOAT_VEC4:
      return 4;
    default:
      throw {
        name: "ShaderError",
        message: "unable to lookup length of type: " + type,
      };
  }
}

export function getBaseType(type: number): number {
  switch (type) {
    case gl.UNSIGNED_INT_VEC2:
    case gl.UNSIGNED_INT_VEC3:
    case gl.UNSIGNED_INT_VEC4:
      return gl.UNSIGNED_INT;
    case gl.INT_VEC2:
    case gl.INT_VEC3:
    case gl.INT_VEC4:
      return gl.INT;
    case gl.FLOAT_VEC2:
    case gl.FLOAT_VEC3:
    case gl.FLOAT_VEC4:
      return gl.FLOAT;
    default:
      return type;
  }
}

export function createTypedArrayByGlType(type: number, length: number) {
  length = length * getNumComponents(type);
  switch (getBaseType(type)) {
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
    default:
      throw "Unknown type for createTypedArrayByGlType: " + type;
  }
}
