import { Vec2, Vec3, Vec4, Vector } from "../../components/vectors.js";
import { TypedArray } from "../../helper/typedArray.js";
import { gl } from "../gl.js";

export class VBO {
  public id: WebGLBuffer | null;
  public type: number;
  public normalized: boolean;
  private attribSize: number;
  private data: TypedArray;
  constructor(
    type: number,
    attribSize: number,
    count: number,
    normalized = false,
  ) {
    this.id = gl.createBuffer();
    this.type = (
      [gl.FLOAT_VEC2, gl.FLOAT_VEC3, gl.FLOAT_VEC4] as number[]
    ).includes(type)
      ? gl.FLOAT
      : type;

    this.normalized = normalized;
    this.attribSize = attribSize;
    this.data = getArray(this.type, attribSize * count);
    this.update();
  }

  public update() {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
    gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }

  public updateSub(n: number) {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
    gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.data,0,n);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }

  getVector(i: number): Vector {
    const begin = i * this.attribSize;
    const end = begin + this.attribSize;
    const a = (this.data as TypedArray).subarray(begin, end);
    switch (this.attribSize) {
      case 1:
        return new Vector(a);
      case 2:
        return new Vec2(a);
      case 3:
        return new Vec3(a);
      case 4:
        return new Vec4(a);
      default:
        throw "Unknown number of vertices per element";
    }
  }

  setVector(i: number, values: Vector) {
    const vec = this.getVector(i);
    vec.setValues(values.data as number[]);
    values.data.forEach((value, n) => {
      this.data[(i + n) * values.length] = value;
    });
  }

  overwrite(old: number, element: number) {
    for (let i = 0; i < this.attribSize; i++) {
      this.data[i + element] = this.data[i + old] as number;
    }
  }
}

function getArray(type: number, size: number) {
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
    default:
      throw "Unknown type for VBO: " + type;
  }
}
