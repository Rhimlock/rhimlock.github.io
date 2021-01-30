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
        this.animation.addFrame(new Frame(4, 1));
        this.animation.addFrame(new Frame(5, 1));
        this.animation.addFrame(new Frame(6, 1));
        this.animation.addFrame(new Frame(7, 1));
    }
    update(elapsedTime) {
        this.animation.update(elapsedTime, this.sprite);
        this.sprite.ty = 0;
        if (this.destination) {
            this.sprite.ty = 1;
            const dir = this.getVectorTo(this.destination);
            const distance = dir.length;
            if (distance < 0.2) {
                this.direction = dir;
                this.destination = null;
            }
            else {
                dir.resize(this.speed / distance * elapsedTime);
                this.direction = dir;
                switch (Math.sign(dir.x)) {
                    case -1:
                        this.flipped = true;
                        break;
                    case 1: this.flipped = false;
                }
                if (this.flipped !== this.sprite.flipped)
                    this.sprite.flipped = this.flipped;
            }
            if (this.destination) {
                this.move(this.direction);
            }
        }
        this.squad?.update();
    }
}
//# sourceMappingURL=activeObject.js.map