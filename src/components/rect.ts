import { Vec2 } from "./vectors.js";

export class Rect extends Vec2 {
    get w() {
        return this.data[2] as number;
    }
    get h() {
        return this.data[3] as number;
    }

    collide(r : Rect) :boolean {
        return (this.x < r.x + r.w &&
            this.x + this.w > r.x &&
            this.y < r.y + r.h &&
            this.y + this.h > r.y)
    }
}