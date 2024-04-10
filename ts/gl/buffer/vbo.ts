import { TypedArray } from "../../helper/typedArray.js";
import { gl } from "../gl.js";
import { createTypedArrayByGlType, getBaseType } from "../mapper.js";
import { Buffer } from "./buffer.js";

export class VBO extends Buffer {
  type: number;
  normalized: boolean;
  numComponents: number;
  data: TypedArray;

  constructor(
    type: number,
    numComponents: number,
    numVertices: number,
    normalized = false,
  ) {
    super(gl.ARRAY_BUFFER, gl.STATIC_DRAW);
    this.type = getBaseType(type);
    this.normalized = normalized;
    this.numComponents = numComponents;
    this.data = createTypedArrayByGlType(
      this.type,
      numComponents * numVertices,
    );
    this.resize(this.data.byteLength);
  }

  update(_length: number) {
    super.subData(this.data.subarray(0, _length*this.numComponents));
  }

  getVector(i: number): TypedArray {
    const begin = i * this.numComponents;
    const end = begin + this.numComponents;
    return this.data.subarray(begin, end);
  }

  setVector(i: number, v: TypedArray) {
    this.data.set(v, i * this.numComponents);
  }

  setVertexAttribPointer(i: number) {
    gl.vertexAttribPointer(
      i,
      this.numComponents,
      this.type,
      this.normalized,
      0,
      0,
    );
  }

  clone(): VBO {
    return new VBO(
      this.type,
      this.numComponents,
      this.data.length / this.numComponents,
      this.normalized,
    );
  }
}
