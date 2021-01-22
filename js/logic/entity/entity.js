import { Animation, Frame } from "../../helper/animation.js";
import { Color } from "../../helper/color.js";
import { Point } from "../../helper/point.js";
export class Entity extends Point {
    constructor(sprite, x = 0, y = 0) {
        super(x, y);
        this.target = null;
        this.distance = 0;
        this.sprite = sprite;
        this.dir = new Point(0, 0);
        this.speed = 2;
        this.animation = new Animation();
        this.animation.addFrame(new Frame(0, 0));
        this.animation.addFrame(new Frame(1, 0));
        this.animation.addFrame(new Frame(2, 0));
        this.animation.addFrame(new Frame(3, 0));
        this.animation.addFrame(new Frame(4, 0));
        this.animation.addFrame(new Frame(5, 0));
        this.animation.addFrame(new Frame(6, 0));
        this.animation.addFrame(new Frame(7, 0));
    }
    updatePos(dir) {
        this.dir = dir;
        this.sprite.x += dir.x;
        this.sprite.y += dir.y;
    }
    get x() { return this.sprite.x; }
    ;
    get y() { return this.sprite.y; }
    ;
    set x(v) { this.sprite.x = v; }
    ;
    set y(v) { this.sprite.y = v; }
    ;
    moveTo(destination) {
        this.target = destination;
    }
    setTarget(target, distance = 0) {
        this.target = target;
        this.distance = distance;
    }
    update(time, world = null) {
        this.sprite.color = new Color(time * 255, 0, 0, 255);
        this.animation.update(time, this.sprite);
        console.log(this.toString(), this.target?.toString());
        switch (Math.sign(this.dir.x)) {
            case -1:
                this.sprite.flipped = true;
                break;
            case 1:
                this.sprite.flipped = false;
                break;
        }
        if (this.target && world) {
            let dir = new Point(this.x, this.y).diff(this.target);
            if (dir.length > 0.04 || dir.length === 0) {
                dir = this.calcNewDir(dir, world);
                dir = dir.scale(this.speed * time / dir.length);
                this.sprite.ty = 1;
                this.updatePos(dir);
            }
            else {
                this.updatePos(new Point(0, 0));
                this.target = null;
                this.sprite.ty = 0;
            }
        }
    }
    calcNewDir(dir, world) {
        const ents = world.getEntitiesAt(this.add(dir), this.sprite.size, this);
        let d = new Point(0, 0);
        if (ents) {
            ents.forEach(e => {
                d = d.add(e.diff(this).normalized);
            });
            d = d.scale(1 / ents.length);
            d = d.add(dir);
            d = d.normalized;
        }
        else {
            d = dir.normalized;
        }
        return dir;
    }
}
//# sourceMappingURL=entity.js.map