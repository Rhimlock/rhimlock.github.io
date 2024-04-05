import { TypedArray } from "../helper/typedArray.js";
import { Vec } from "./vec.js";

export class Rect extends Vec {
  constructor(x: number, y: number, w: number, h: number) {
    super(new Float32Array([x, y, w, h]));
  }
  get w() {
    return this.data[2] as number;
  }
  get h() {
    return this.data[3] as number;
  }

  set w(v: number) {
    this.data[2] = v;
  }

  set h(v: number) {
    this.data[3] = v;
  }

  collide(r: Rect): boolean {
    return (
      this.x < r.x + r.w &&
      this.x + this.w > r.x &&
      this.y < r.y + r.h &&
      this.y + this.h > r.y
    );
  }

  asCoords(): TypedArray {
    const values = [
      this.x,
      this.y,
      this.x,
      this.y + this.h,
      this.x + this.w,
      this.y + this.h,
      this.x + this.w,
      this.y,
    ];
    return Reflect.construct(this.data.constructor, [values]);
  }
}
