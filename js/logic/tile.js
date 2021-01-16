import { Point } from "../helper/point.js";
export class Tile extends Point {
    constructor(x, y, type) {
        super(x, y);
        this.entity = null;
        this.type = type;
    }
}
//# sourceMappingURL=tile.js.map