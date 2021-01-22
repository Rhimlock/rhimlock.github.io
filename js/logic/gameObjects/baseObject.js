import { Point } from "../../helper/point.js";
export class BaseObject extends Point {
    constructor(sprite) {
        super(0, 0);
        this.sprite = sprite;
    }
    get x() { return this.sprite.x; }
    ;
    set x(v) { this.sprite.x = v; }
    ;
    get y() { return this.sprite.y; }
    ;
    set y(v) { this.sprite.y = v; }
    ;
    get size() { return this.sprite.size / 2; }
    ;
    set size(s) { this.sprite.size = s * 2; }
    ;
}
//# sourceMappingURL=baseObject.js.map