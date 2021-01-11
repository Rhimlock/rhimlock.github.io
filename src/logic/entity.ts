import { Sprite } from "../gl/drawables/sprite.js";
import { Point } from "../helper/point.js";

export class Entity {
    sprite: Sprite;
    pos: Point;
    dir: Point;
    speed: number;
    
    constructor(sprite: Sprite) {
        this.sprite = sprite;
        this.dir = new Point(0, 0);
        this.speed = 16;
        this.pos = new Point(0, 0);
    }

    move(dir: Point) {
        this.dir = dir;
    }

    moveTo(destination : Point) {
        this.dir = this.pos.diff(destination).normalized();
    }

    update(time: number) {
        this.pos = this.pos.add(this.dir.scale(this.speed * time));
        this.sprite.x = Math.round(this.pos.x);
        this.sprite.y = Math.round(this.pos.y);
    }
}