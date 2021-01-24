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

    get length(): number {
        return (Math.sqrt(this.x * this.x + this.y * this.y));
    }

    get normalized() : Point {
        if (this.length  > 0) {
            return this.getResized(1 / this.length);
        }
        return this;
    }

    get inverted() : Point {
        return new Point(-this.x, -this.y);
    }

    get rotatedLeft() : Point {
        return new Point(this.y, - this.x);
    }

    get rotatedRight() : Point {
        return new Point(- this.y, this.x);
    }

    resize(factor : number) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    move(offset: Point) {
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

    getVectorTo(p: Point) {
        return (new Point(p.x - this.x, p.y - this.y));
    }

    getSum(p: Point) {
        return new Point(p.x + this.x, p.y + this.y); 
    }

    getResized(factor : number) {
        return new Point(this.x * factor, this.y * factor);
    }

    toString() {
        return `x: ${Math.round(this.x * 100) / 100} / y: ${Math.round(this.y * 100) / 100}`
    }
    
    checkAngle(vec : Point) {
        const per = vec.x*this.y - this.x * vec.y;
        return (Math.sign(per));
    }

}
