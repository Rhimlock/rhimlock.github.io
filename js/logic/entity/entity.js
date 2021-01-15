import { Point } from "../../helper/point.js";
export class Entity extends Point {
    constructor(sprite, x = 0, y = 0) {
        super(x, y);
        this.target = null;
        this.distance = 0;
        this.sprite = sprite;
        this.dir = new Point(0, 0);
        this.speed = 5;
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
    update(time) {
        if (this.target) {
            const dir = new Point(this.x, this.y).diff(this.target);
            if (dir.length > this.distance)
                this.updatePos(dir.scale(this.speed * time / dir.length));
        }
    }
}
//# sourceMappingURL=entity.js.map