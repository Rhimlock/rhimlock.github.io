import { Point } from "../../helper/point.js";
import { BaseObject } from "./baseObject.js";

export class ActiveObject extends BaseObject {
    direction = new Point(0, 0);
    destination: Point | null = null;
    flipped = false;
    speed = 2;

    update(elapsedTime: number, objects: BaseObject[]) {
        if (this.destination) {
            const dir = this.getVectorTo(this.destination);
            const distance = dir.length;
            if (distance < 0.5) {
                this.destination = null;
                this.direction = new Point(0, 0);
            } else {
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
                                break
                            }
                        }

                    }
                });
                this.direction = dir;
            }
            this.add(this.direction);
        }
    }
    collidesWith(dir: Point, o: BaseObject) {
        return (this.getSum(dir).getVectorTo(o).length < this.size + o.size);
    }

}