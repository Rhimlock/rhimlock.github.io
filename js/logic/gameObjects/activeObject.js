import { Animation, Frame } from "../../helper/animation.js";
import { Point } from "../../helper/point.js";
import { BaseObject } from "./baseObject.js";
export class ActiveObject extends BaseObject {
    constructor(sprite) {
        super(sprite);
        this.direction = new Point(1, 0);
        this.destination = null;
        this.flipped = false;
        this.speed = 4;
        this.squad = null;
        this.animation = new Animation();
        this.animation.addFrame(new Frame(0, 1));
        this.animation.addFrame(new Frame(1, 1));
        this.animation.addFrame(new Frame(2, 1));
        this.animation.addFrame(new Frame(3, 1));
    }
    update(elapsedTime) {
        this.animation.update(elapsedTime, this.sprite);
        if (this.destination) {
            const dir = this.getVectorTo(this.destination);
            const distance = dir.length;
            if (distance < 0.2) {
                this.direction = dir;
                this.destination = null;
            }
            else {
                dir.resize(this.speed / distance * elapsedTime);
                this.direction = dir;
            }
            if (this.destination) {
                this.move(this.direction);
            }
        }
        if (Math.abs(this.direction.y) > Math.abs(this.direction.x)) {
            switch (Math.sign(this.direction.y)) {
                case -1:
                    this.sprite.ty = 0;
                    break;
                case 1:
                    this.sprite.ty = 2;
                    break;
            }
        }
        else {
            switch (Math.sign(this.direction.x)) {
                case -1:
                    this.sprite.ty = 3;
                    break;
                case 1:
                    this.sprite.ty = 1;
                    break;
            }
        }
        this.squad?.update();
    }
}
//# sourceMappingURL=activeObject.js.map