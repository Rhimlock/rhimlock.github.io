import { Vec } from "./vec.js";
export const enum DIR {
    up = 0,
    right = 1,
    down = 2,
    left = 3
}
export const VDIR = {
    get up() {
        return Vec.newI(0,-1)
    },
    get right() {
        return Vec.newI(1,0)
    },
    get down() {
        return Vec.newI(0,1)
    },
    get left() {
        return Vec.newI(-1,0)
    },

    get all() {
        return [this.up, this.right, this.down, this.left];
    }

}