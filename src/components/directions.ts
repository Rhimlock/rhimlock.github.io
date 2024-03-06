import { Vec2 } from "./vectors.js";
export const enum DIR {
    up = 0,
    right = 1,
    down = 2,
    left = 3
}
export const VDIR = {
    get up() {
        return new Vec2([0,-1])
    },
    get right() {
        return new Vec2([1,0]);
    },
    get down() {
        return new Vec2([0,1]);
    },
    get left() {
        return new Vec2([-1,0]);
    },

    get all() {
        return [this.up, this.right, this.down, this.left];
    }

}