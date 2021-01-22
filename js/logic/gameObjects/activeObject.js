import { Point } from "../../helper/point.js";
import { BaseObject } from "./baseObject.js";
export class ActiveObject extends BaseObject {
    constructor() {
        super(...arguments);
        this.direction = new Point(0, 0);
        this.destination = null;
        this.flipped = false;
        this.speed = 2;
    }
    update(elapsedTime, objects) {
        if (this.destination) {
            const dir = this.getVectorTo(this.destination);
            const distance = dir.length;
            if (distance < 0.5) {
                this.destination = null;
                this.direction = new Point(0, 0);
            }
            else {
                dir.resize(this.speed / distance * elapsedTime);
                objects.forEach(o => {
                    if ((this !== o) && this.collidesWith(dir, o)) {
                        const x = dir.x;
                        const y = dir.y;
                        switch (dir.turn(this.getVectorTo(o))) {
                            case (-1): {
                                dir.x = y;
                                dir.y = -x;
                                break;
                            }
                            case (0): {
                                dir.x = -y;
                                dir.y = -x;
                                break;
                            }
                            case (1): {
                                dir.x = -y;
                                dir.y = x;
                                break;
                            }
                        }
                        console.log(dir.normalized.toString());
                    }
                });
                this.direction = dir;
            }
            this.add(this.direction);
        }
    }
    collidesWith(dir, o) {
        return (this.getSum(dir).getVectorTo(o).length < this.size + o.size);
    }
}
//# sourceMappingURL=activeObject.js.map