import { Sprite } from "../../gl/drawables/sprite.js";
import { Animation, Frame } from "../../helper/animation.js";
import { Point } from "../../helper/point.js";

export class Entity extends Point {
    sprite: Sprite;
    animation: Animation;
    dir: Point;
    speed: number;
    target: Point | null = null;
    distance : number = 0;

    constructor(sprite: Sprite, x : number = 0, y: number = 0) {
        super(x,y);
        this.sprite = sprite;
        this.dir = new Point(0, 0);
        this.speed = 2;
        this.animation = new Animation();
        this.animation.addFrame(new Frame(0,0));
        this.animation.addFrame(new Frame(16,0));
        this.animation.addFrame(new Frame(32,0));
        this.animation.addFrame(new Frame(48,0));
        this.animation.addFrame(new Frame(64,0));
        this.animation.addFrame(new Frame(80,0));
        this.animation.addFrame(new Frame(96,0));
        this.animation.addFrame(new Frame(112,0));
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
        this.animation.update(time, this.sprite);
        switch(Math.sign(this.dir.x)) {
            case -1: this.sprite.flipped = true; break;
            case 1: this.sprite.flipped = false; break;
        }
        if (this.target) {   
            const dir = new Point(this.x, this.y).diff(this.target);
            
            if (dir.length > this.distance) {
                this.sprite.ty = 1;
                this.updatePos(dir.scale(this.speed * time / dir.length));
            } else {
                this.sprite.ty = 0;
            }
           
        }
    }
}
