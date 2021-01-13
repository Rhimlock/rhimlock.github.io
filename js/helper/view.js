import { Point } from "./point.js";
class View {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.zoom = 0.3;
        this.tileSize = 16;
    }
    convertPos(clientX, clientY) {
        return new Point((clientX + window.pageXOffset) * this.zoom / this.tileSize, (clientY + window.pageYOffset) * this.zoom / this.tileSize);
    }
    updatePos() {
        this.x = Math.round(window.pageXOffset * this.zoom * 0.5) * 2;
        this.y = Math.round(window.pageYOffset * this.zoom * 0.5) * 2;
    }
    ;
}
export const view = new View();
//# sourceMappingURL=view.js.map