export class Point {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    diff(p: Point): Point {
        return (new Point(p.x - this.x, p.y - this.y));
    }

    distance(p: Point): number {
        const d = this.diff(p);
        return Math.sqrt(d.x * d.x + d.y * d.y);
    }

    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    scale(n: number) {
        return new Point(this.x * n, this.y * n);
    }

    add(p: Point) {
        return new Point(p.x + this.x, p.y + this.y);
    }

    normalized() : Point {
        const length = this.length();
        return new Point (this.x / length, this.y / length);
    }
}
