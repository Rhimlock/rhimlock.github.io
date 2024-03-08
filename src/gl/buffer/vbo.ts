import { Vec } from "../../components/vec.js";
import { TypedArray, createTypedArrayByGlType } from "../../helper/typedArray.js";
import { gl } from "../gl.js";
import { Buffer } from "./buffer.js";

export class VBO extends Buffer{
  public type: number;
  public normalized: boolean;
  public attribSize: number;
  private data: TypedArray;
  constructor(
    type: number,
    attribSize: number,
    count: number,
    normalized = false,
  ) {
    super(gl.ARRAY_BUFFER, gl.STATIC_DRAW);
    this.type = (
      [gl.FLOAT_VEC2, gl.FLOAT_VEC3, gl.FLOAT_VEC4] as number[]
    ).includes(type)
      ? gl.FLOAT
      : type;

    this.normalized = normalized;
    this.attribSize = attribSize;
    this.data = createTypedArrayByGlType(this.type, attribSize * count);
    this.resize(this.data.byteLength);
  }

  update() {
    super.update(this.data);
  }

  getVector(i: number): Vec {
    const begin = i * this.attribSize;
    const end = begin + this.attribSize;
    const a = (this.data as TypedArray).subarray(begin, end);
    return(new Vec(a));
  }

  // setVector(i: number, v: Vec) {
  //   const vec = this.getVector(i);
  //   vec.assign(v);
  //   ve.getValues().forEach((value, n) => {
  //     this.data[(i + n) * ve.length] = value;
  //   });
  // }

  overwrite(old: number, element: number) {
    for (let i = 0; i < this.attribSize; i++) {
      this.data[i + element] = this.data[i + old] as number;
    }
  }
}
