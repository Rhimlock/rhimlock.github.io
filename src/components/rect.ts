import { Vec } from "./vec.js";

export class Rect extends Vec {
    get w() {
        return this.data[2] as number;
    }
    get h() {
        return this.data[3] as number;
    }

    set w(v: number) {this.data[2] = v};

    set h(v: number) {this.data[3] = v}

    collide(r : Rect) :boolean {
        return (this.x < r.x + r.w &&
            this.x + this.w > r.x &&
            this.y < r.y + r.h &&
            this.y + this.h > r.y)
    }

    asCoords() {
        return [
            this.x, this.y, 
            this.x+this.w, this.y, 
            this.x, this.y+this.h, 
            this.x+this.w, this.y + this.h];
    }
}