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
    get length() {
        return (Math.sqrt(this.x * this.x + this.y * this.y));
    }
    get normalized() {
        if (this.length > 0) {
            return this.getMultiply(1 / this.length);
        }
        return this;
    }
    resize(factor) {
        this.x *= factor;
        this.y *= factor;
    }
    add(p) {
        this.x += p.x;
        this.y += p.y;
    }
    sub(p) {
        this.x -= p.x;
        this.y -= p.y;
    }
    getVectorTo(p) {
        return (new Point(p.x - this.x, p.y - this.y));
    }
    getSum(p) {
        return new Point(p.x + this.x, p.y + this.y);
    }
    getScalar(p) {
        return (this.x * p.y + this.y * p.x);
    }
    getMultiply(factor) {
        return new Point(this.x * factor, this.y * factor);
    }
    toString() {
        return `x: ${Math.round(this.x * 100) / 100} / y: ${Math.round(this.y * 100) / 100}`;
    }
    turn(vec) {
        const per = vec.x * this.y - this.x * vec.y;
        return (Math.sign(per));
    }
}
//# sourceMappingURL=point.js.map