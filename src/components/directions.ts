import { Vec2 } from "./vectors.js";

export const DIR = {
    array: [
        new Vec2([0,-1]),
        new Vec2([1,0]),
        new Vec2([0,1]),
        new Vec2([-1,0])
    ],
    get up() {
        return this.array[0];
    },
    get right() {
        return this.array[1];
    },
    get down() {
        return this.array[2];
    },
    get left() {
        return this.array[3];
    }

}