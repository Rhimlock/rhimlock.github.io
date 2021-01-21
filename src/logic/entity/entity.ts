import { Sprite } from "../../gl/drawables/sprite.js";
import { Animation, Frame } from "../../helper/animation.js";
import { Color } from "../../helper/color.js";
import { Point } from "../../helper/point.js";
import { World } from "../world.js";

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
        this.animation.addFrame(new Frame(1,0));
        this.animation.addFrame(new Frame(2,0));
        this.animation.addFrame(new Frame(3,0));
        this.animation.addFrame(new Frame(4,0));
        this.animation.addFrame(new Frame(5,0));
        this.animation.addFrame(new Frame(6,0));
        this.animation.addFrame(new Frame(7,0));
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

    update(time: number, world : World | null = null) {
        this.sprite.color = new Color(time * 255,0,0,255);
        this.animation.update(time, this.sprite);
        switch(Math.sign(this.dir.x)) {
            case -1: this.sprite.flipped = true; break;
            case 1: this.sprite.flipped = false; break;
        }
        if (this.target && world) {   
            let dir = new Point(this.x, this.y).diff(this.target);
            
            if (dir.length > this.distance) {
                dir = dir.scale(this.speed * time / dir.length)
                this.sprite.ty = 1;
                const b = world.getEntitiesAt(this.add(dir),1,this);
                if (b.length > 0) {
                    dir = new Point(-dir.y, dir.x);
                }

                this.updatePos(dir);
            } else {
                this.sprite.ty = 0;
            }
           
        }
    }
}
