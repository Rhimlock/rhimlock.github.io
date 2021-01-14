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

    distance(p: Point): number {
        const d = this.diff(p);
        return Math.sqrt(d.x * d.x + d.y * d.y);
    }

    get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    scale(n: number) {
        return new Point(this.x * n, this.y * n);
    }

    add(p: Point) {
        return new Point(p.x + this.x, p.y + this.y);
    }

    normalized(): Point {
        const length = this.length;
        return new Point(this.x / length, this.y / length);
    }
    toString() {
        return `x: ${Math.round(this.x * 100) / 100} / y: ${Math.round(this.y * 100) / 100}`
    }
}
