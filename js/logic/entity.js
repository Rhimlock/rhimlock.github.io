import { Point } from "../helper/point.js";
export class Entity {
    constructor(sprite) {
        this.sprite = sprite;
        this.dir = new Point(0, 0);
        this.speed = 16;
        this.pos = new Point(0, 0);
    }
    move(dir) {
        this.dir = dir;
    }
    moveTo(destination) {
        this.dir = this.pos.diff(destination).normalized();
    }
    update(time) {
        this.pos = this.pos.add(this.dir.scale(this.speed * time));
        this.sprite.x = Math.round(this.pos.x);
        this.sprite.y = Math.round(this.pos.y);
    }
}
//# sourceMappingURL=entity.js.map