import { Point } from "./point.js";

class View {
    x = 0;
    y = 0;
    zoom = 3;
    tileSize = 8;

    convertPos(clientX: number, clientY : number) : Point {
        return new Point(
            (clientX + window.pageXOffset - this.tileSize * 0.5 * this.zoom ) / (this.zoom * this.tileSize),
            (clientY + window.pageYOffset - this.tileSize * 0.5 * this.zoom) / (this.zoom * this.tileSize)
        );
    }
    updatePos() {
        const pos = this.convertPos(0,0);
        this.x = pos.x;
        this.y = pos.y;
    };
}

export const view = new View();