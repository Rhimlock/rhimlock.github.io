export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    diff(p) {
        return (new Point(p.x - this.x, p.y - this.y));
    }
    distance(p) {
        const d = this.diff(p);
        return Math.sqrt(d.x * d.x + d.y * d.y);
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    scale(n) {
        return new Point(this.x * n, this.y * n);
    }
    add(p) {
        return new Point(p.x + this.x, p.y + this.y);
    }
    normalized() {
        const length = this.length();
        return new Point(this.x / length, this.y / length);
    }
}
//# sourceMappingURL=point.js.map