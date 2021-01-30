export class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    ;
    get y() { return this._y; }
    ;
    set x(v) { this._x = v; }
    set y(v) { this._y = v; }
    get length() { return (Math.sqrt(this.x * this.x + this.y * this.y)); }
    get normalized() { return this.getResized(1 / this.length); }
    get inverted() { return new Point(-this.x, -this.y); }
    get rotatedLeft() { return new Point(this.y, -this.x); }
    get rotatedRight() { return new Point(-this.y, this.x); }
    resize(factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }
    move(offset) {
        this.x += offset.x;
        this.y += offset.y;
        return this;
    }
    rotateLeft() {
        const x = this.x;
        const y = this.y;
        this.x = y;
        this.y = -x;
        return this;
    }
    rotateRight() {
        const x = this.x;
        const y = this.y;
        this.x = -y;
        this.y = x;
    }
    getVectorTo(p) {
        return (new Point(p.x - this.x, p.y - this.y));
    }
    getSum(p) {
        return new Point(p.x + this.x, p.y + this.y);
    }
    getResized(factor) {
        return new Point(this.x * factor, this.y * factor);
    }
    toString() {
        return `x: ${Math.round(this.x * 100) / 100} / y: ${Math.round(this.y * 100) / 100}`;
    }
    checkAngle(vec) {
        const per = vec.x * this.y - this.x * vec.y;
        return (Math.sign(per));
    }
}
//# sourceMappingURL=point.js.map