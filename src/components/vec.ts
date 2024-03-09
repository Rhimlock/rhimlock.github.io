import { TypedArray } from "../helper/typedArray.js";

export class Vec {
  data: TypedArray;
  constructor(typedArray: TypedArray) {
    this.data = typedArray;
  }
  static newI = (...elements: number[]) => new Vec(new Int32Array(elements));
  static newU = (...elements: number[]) => new Vec(new Uint32Array(elements));
  static newF = (...elements: number[]) => new Vec(new Float32Array(elements));

  static sum(v1: Vec, v2: Vec) {
    return new Vec(v1.data.map((e, i) => e + (v2.data[i] ?? 0)));
  }

  static diff(v1: Vec, v2: Vec) {
    return new Vec(v1.data.map((e, i) => e - (v2.data[i] ?? 0)));
  }

  add(v: Vec) {
    this.data.forEach((e, i) => this.data[i] = e + (v.data[i] ?? 0));
  }

  equals(v: Vec) {
    return this.data.find((e,i) =>  e !== v.data[i]) === undefined;
  }

  assign(values:TypedArray | number[]) {
    this.data.forEach((_, i) => this.data[i] = (values[i] ?? 0));
  }

  toString() {
    return this.data.join(" / ");
  }

  get length() {
    return Math.sqrt(
      (this.data as any as number[]).reduce(
        (a, v) => a + v * v,
        0,
      ),
    );
  }

  get x() {
    return this.data[0] as number;
  }
  get y() {
    return this.data[1] as number;
  }
  get z() {
    return this.data[2] as number;
  }
  get w() {
    return this.data[3] as number;
  }
  set x(value: number) {
    this.data[0] = value;
  }
  set y(value: number) {
    this.data[1] = value;
  }
  set z(value: number) {
    this.data[2] = value;
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

  // get rotatedLeft() {
  //   return new Vec([this.y, -this.x]);
  // }
  // get rotatedRight() {
  //   return new Vec([-this.y, this.x]);
  // }
  // get inverted() {
  //   return new Vec(this.data.map((v: number) => -v));
  // }
  // get normalized(): Vec {
  //   const l = this.length;
  //   return l === 0 ? this : this.resized(1 / l);
  // }
  // resized(factor: number) {
  //   return new Vec(this.data.map((v: number) => v * factor));
  // }


