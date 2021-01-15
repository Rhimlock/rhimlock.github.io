export class Point {
    private _x: number;
    private _y: number;

    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x() { return this._x };
    get y() { return this._y };
    set x(v: number) { this._x = v; }
    set y(v: number) { this._y = v; }

    diff(p: Point): Point {
        return (new Point(p.x - this.x, p.y - this.y));
    }

    get length(): number {
        return Math.round(Math.sqrt(this.x * this.x + this.y * this.y));
    }

    scale(n: number) {
        return new Point(this.x * n, this.y * n);
    }

    add(p: Point) {
        return new Point(p.x + this.x, p.y + this.y);
    }

    toString() {
        return `x: ${Math.round(this.x * 100) / 100} / y: ${Math.round(this.y * 100) / 100}`
    }
}
