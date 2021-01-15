import { Sprite } from "../../gl/drawables/sprite.js";
import { Point } from "../../helper/point.js";

export class Entity extends Point {
    sprite: Sprite;
    dir: Point;
    speed: number;
    target: Point | null = null;
    distance : number = 0;

    constructor(sprite: Sprite, x : number = 0, y: number = 0) {
        super(x,y);
        this.sprite = sprite;
        this.dir = new Point(0, 0);
        this.speed = 5;
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

    setTarget(target : Point, distance : number = 0) {
        this.target = target;
        this.distance = distance;
    }

    update(time: number) {
        if (this.target) {   
            const dir = new Point(this.x, this.y).diff(this.target);
            
            if (dir.length > this.distance) this.updatePos(dir.scale(this.speed * time / dir.length));
        }
    }
}
