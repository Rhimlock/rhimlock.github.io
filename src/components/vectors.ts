import { VBO } from "../gl/buffer/vbo.js";
import { TypedArray } from "../helper/typedArray.js";

export class Vector {
  protected data: TypedArray | number[];
  protected buffer: VBO | undefined;
  constructor(data: TypedArray | number[]) {
    this.data = data;
  }

  setValues(values: TypedArray | number[]) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = values[i] ?? (this.data[i] as number);
    }
  }
  getValues() {
    return this.data;
  }

  get length() {
    return Math.sqrt(
      (this.data as number[]).reduce(
        (a: number, v: number) => a + v * v,
        0,
      ),
    );
  }
  get normalized(): Vector {
    const l = this.length;
    return l === 0 ? this : this.resized(1 / l);
  }
  get inverted() {
    return new Vector(this.data.map((v: number) => -v));
  }
  resized(factor: number) {
    return new Vector(this.data.map((v: number) => v * factor));
  }

  add(v: Vector) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] += v.data[i] ?? 0;
    }
  }

  equals(v:Vector) {
    for (let i = 0; i<this.data.length; i++) {
      if (this.data[i] !== v.data[i]) {
        return false;
      }
    }
    return true;
  }
}

export class Vec2 extends Vector {
  get x() {
    return this.data[0] as number;
  }
  get y() {
    return this.data[1] as number;
  }
  set x(value: number) {
    this.data[0] = value;
  }
  set y(value: number) {
    this.data[1] = value;
  }

  get rotatedLeft() {
    return new Vec2([this.y, -this.x]);
  }
  get rotatedRight() {
    return new Vec2([-this.y, this.x]);
  }
  static sum(v1:Vec2, v2:Vec2) {
    return new Vec2([v1.x+v2.x,v1.y+v2.y]);
  }
}

export class Vec3 extends Vec2 {
  get z() {
    return this.data[2] as number;
  }
  set z(value: number) {
    this.data[2] = value;
  }
}

export class Vec4 extends Vec3 {
  get w() {
    return this.data[3] as number;
  }
  set w(value: number) {
    this.data[3] = value;
  }

  get r() {
    return this.data[0] as number;
  }
  get g() {
    return this.data[1] as number;
  }
  get b() {
    return this.data[2] as number;
  }
  get a() {
    return this.data[3] as number;
  }
  set r(value: number) {
    this.data[0] = value;
  }
  set g(value: number) {
    this.data[1] = value;
  }
  set b(value: number) {
    this.data[2] = value;
  }
  set a(value: number) {
    this.data[3] = value;
  }
}
