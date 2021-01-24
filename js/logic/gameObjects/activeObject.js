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
        this.squad = [];
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
    addSquaddy(squaddy) {
        this.squad.push(squaddy);
        squaddy.destination = this.getSum(this.calcGlobalSquaddieOffset(this.squad.length));
    }
    update(elapsedTime, objects) {
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
                objects.forEach(o => {
                    const x = dir.x;
                    const y = dir.y;
                    if ((this !== o) && this.collidesWith(dir, o)) {
                        switch (dir.checkAngle(this.getVectorTo(o))) {
                            case (-1):
                                dir.rotateLeft();
                                break;
                            case (0):
                                this.rotateRight();
                                break;
                            case (1):
                                this.rotateRight();
                                break;
                        }
                        dir.move(new Point(x, y));
                        dir.resize(0.5);
                    }
                });
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
            this.squad.forEach((e, n) => {
                e.destination = this.getSum(this.calcGlobalSquaddieOffset(n + 1));
            });
        }
    }
    collidesWith(dir, o) {
        return (this.getSum(dir).getVectorTo(o).length < this.size + o.size);
    }
    calcGlobalSquaddieOffset(n) {
        let offset = this.calcLocalSquaddieOffset(n);
        const x = offset.x;
        const dir = this.direction.length > 0 ? this.direction : new Point(1.0, 0);
        offset = dir.inverted.normalized.resize(offset.y);
        offset.move(dir.normalized.rotateLeft().resize(x));
        return offset;
    }
    calcLocalSquaddieOffset(n) {
        const w = Math.max(5, Math.ceil(Math.sqrt(this.squad.length)));
        const offset = new Point(0, 0);
        offset.y = Math.floor(n / w);
        offset.x = (n % w) % 2;
        n = n % w;
        offset.x = (n % 2) ? -Math.ceil(n / 2) : n / 2;
        return offset;
    }
}
//# sourceMappingURL=activeObject.js.map