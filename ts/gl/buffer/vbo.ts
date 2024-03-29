import { TypedArray } from "../../helper/typedArray.js";
import { gl } from "../gl.js";
import { createTypedArrayByGlType } from "../mapper.js";
import { Buffer } from "./buffer.js";

export class VBO extends Buffer {
  type: number;
  normalized: boolean;
  //instanced: boolean;
  attribSize: number;
  data: TypedArray;
  constructor(
    type: number,
    attribSize: number,
    count: number,
    normalized = false,
    //instanced = false,
    //transformFeedback: number | undefined = undefined
  ) {
    super(gl.ARRAY_BUFFER, gl.STATIC_DRAW);
    this.type = (
      [gl.FLOAT_VEC2, gl.FLOAT_VEC3, gl.FLOAT_VEC4] as number[]
    ).includes(type)
      ? gl.FLOAT
      : type;

    this.normalized = normalized;
    //this.instanced = instanced;
    this.attribSize = attribSize;
    this.data = createTypedArrayByGlType(this.type, attribSize * count);
    this.resize(this.data.byteLength);
    // if (transformFeedback != undefined) {
    //   gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER,transformFeedback, this.id);
    // }
  }

  update() {
    super.update(this.data);
  }

  getVector(i: number): TypedArray {
    const begin = i * this.attribSize;
    const end = begin + this.attribSize;
    return this.data.subarray(begin, end);
  }

  setVector(i: number, v: TypedArray) {
    this.data.set(v, i * this.attribSize);
  }
}
