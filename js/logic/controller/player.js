import { input, mousePos } from '../../helper/input.js';
import { Point } from '../../helper/point.js';
class Player {
    constructor() {
        this.entities = [];
    }
    addEntity(entity) {
        this.entities.push(entity);
    }
    get x() { return this.entities[0]?.x || -1; }
    ;
    get y() { return this.entities[0]?.y || -1; }
    ;
    mouseClick() {
        if (this.entities.length > 0) {
            const pos = new Point(mousePos.x, mousePos.y);
            this.entities[0]?.moveTo(pos);
        }
    }
    update(elapsedTime) {
        if (this.entities.length > 0) {
            const diff = new Point(input.left ? -1 : 0, input.up ? -1 : 0);
            diff.x = input.right ? 1 : diff.x;
            diff.y = input.down ? 1 : diff.y;
            if (diff.x !== 0 || diff.y !== 0) {
                this.entities[0]?.moveTo(this.entities[0]?.add(diff));
            }
            this.entities.forEach(e => e.update(elapsedTime));
        }
    }
}
export const player = new Player();
input.bindCall(player.mouseClick, "mouse0", player);
//# sourceMappingURL=player.js.map