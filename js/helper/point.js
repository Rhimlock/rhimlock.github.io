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
    diff(p) {
        return (new Point(p.x - this.x, p.y - this.y));
    }
    get length() {
        return (Math.sqrt(this.x * this.x + this.y * this.y));
    }
    get normalized() {
        if (this.length > 0) {
            return this.scale(1 / this.length);
        }
        return this;
    }
    scale(n) {
        return new Point(this.x * n, this.y * n);
    }
    add(p) {
        return new Point(p.x + this.x, p.y + this.y);
    }
    toString() {
        return `x: ${Math.round(this.x * 100) / 100} / y: ${Math.round(this.y * 100) / 100}`;
    }
}
//# sourceMappingURL=point.js.map