import { Sprite } from "../../gl/drawables/sprite.js";
import { Point } from "../../helper/point.js";

export class Entity extends Point {
    sprite: Sprite;
    dir: Point;
    speed: number;
    target: Point | null = null;

    constructor(sprite: Sprite) {
        super(0,0);
        this.sprite = sprite;
        this.dir = new Point(0, 0);
        this.speed = 1;
    }

    private updatePos(dir: Point) {
        this.dir = dir;
        this.sprite.x += dir.x;
        this.sprite.y += dir.y;
    }

    get x() { return this.sprite.x};
    get y() { return this.sprite.y};
    
    set x(v:number) {this.sprite.x = v};
    set y(v:number) {this.sprite.y = v};

    moveTo(destination: Point) {
        this.target = destination;
    }

    update(time: number) {
        if (this.target) {   
            const dir = new Point(this.sprite.x, this.sprite.y).diff(this.target);
            this.updatePos(dir.scale(this.speed * time / dir.length));
            if (dir.length < this.dir.length) this.target = null;
        }
    }
}
