import { Sprite } from "../../gl/drawables/sprite.js";
import { Point } from "../../helper/point.js";
import { terminal } from "../../helper/terminal.js";
import { Controller } from "../controller/controller.js";

export class Entity extends Point {
    sprite: Sprite;
    controller : Controller;
    dir: Point;
    speed: number;
    target: Point | null = null;

    constructor(sprite: Sprite, controller : Controller) {
        super(0,0);
        this.controller = controller;
        controller.addEntity(this);
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

    update(time: number) {
        if (this.target) {   
            const dir = new Point(this.x, this.y).diff(this.target);
            this.updatePos(dir.scale(this.speed * time / dir.length));
            if (dir.length < this.dir.length) this.target = null;
        }
    }
}
