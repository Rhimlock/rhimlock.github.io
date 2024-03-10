import { gl } from "../gl/gl.js";

export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

export function createTypedArrayByGlType(type: number, size: number) {
  switch (type) {
    case gl.UNSIGNED_BYTE:
      return new Uint8Array(size);
    case gl.BYTE:
      return new Int8Array(size);
    case gl.UNSIGNED_SHORT:
      return new Uint16Array(size);
    case gl.SHORT:
      return new Int16Array(size);
    case gl.UNSIGNED_INT:
      return new Uint32Array(size);
    case gl.INT:
      return new Int32Array(size);
    case gl.FLOAT:
      return new Float32Array(size);
    case gl.FLOAT_VEC2:
      return new Float32Array(size * 2);
    case gl.FLOAT_VEC3:
      return new Float32Array(size * 3);
    case gl.FLOAT_VEC4:
      return new Float32Array(size * 4);
    default:
      throw "Unknown type for VBO: " + type;
  }
}
