import { TypedArray } from "../../helper/typedArray.js";

export class Vec2 {
    data: TypedArray
    constructor(data: TypedArray) {
        this.data = data;
    }
    get x() { return this.data[0] as number; }
    get y() { return this.data[1] as number; }
    set x(value: number) { this.data[0] = value; }
    set y(value: number) { this.data[1] = value; }
    
    get r() { return this.data[0] as number; }
    get g() { return this.data[1] as number; }
    set r(value: number) { this.data[0] = value; }
    set g(value: number) { this.data[1] = value; }
}

export class Vec3 extends Vec2 {
    get z() { return this.data[2] as number; }
    set z(value: number) { this.data[2] = value; }

    get b() { return this.data[2] as number; }
    set b(value: number) { this.data[2] = value; }
}

export class Vec4 extends Vec3 {
    get w() { return this.data[3] as number; }
    set w(value: number) { this.data[3] = value; }

    get a() { return this.data[3] as number; }
    set a(value: number) { this.data[3] = value; }
}