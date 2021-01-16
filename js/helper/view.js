import { Point } from "./point.js";
class View {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.zoom = 3;
        this.tileSize = 8;
    }
    convertPos(clientX, clientY) {
        return new Point((clientX + window.pageXOffset - this.tileSize * 0.5 * this.zoom) / (this.zoom * this.tileSize), (clientY + window.pageYOffset - this.tileSize * 0.5 * this.zoom) / (this.zoom * this.tileSize));
    }
    updatePos() {
        const pos = this.convertPos(0, 0);
        this.x = pos.x;
        this.y = pos.y;
    }
    ;
}
export const view = new View();
//# sourceMappingURL=view.js.map