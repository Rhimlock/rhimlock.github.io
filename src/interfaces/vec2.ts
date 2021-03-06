import { TypedArray } from "../helper/typedArray.js";

export class Vec2 {
    array: TypedArray | Array<number>;
    constructor(array: TypedArray | Array<number>) {
        this.array = array;
    }
    get x() { return this.array[0] || 0 };
    set x(value) { this.array[0] = value };
    get y() { return this.array[1] || 0 };
    set y(value) { this.array[1] = value };
    
    assignNewArray(array: TypedArray | Array<number>) {
        array[0] = this.x;
        array[1] = this.y;
        this.array = array;
    }

    get length() { return (Math.sqrt(this.x * this.x + this.y * this.y)); }
    get normalized() { return this.length === 0 ? this : this.resized(1 / this.length); }
    get inverted() { return new Vec2([-this.x, -this.y]); }
    get rotatedLeft() { return new Vec2([this.y, - this.x]); }
    get rotatedRight() { return new Vec2([- this.y, this.x]); }
    resized(factor: number) { return new Vec2([this.x * factor, this.y * factor]) };
    added(vector: Vec2) { return new Vec2([this.x + vector.x, this.y + vector.y]) };

    move(direction : Vec2) {
        this.x += direction.x;
        this.y += direction.y;
    }
}