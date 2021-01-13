import { Point } from "./point.js";

class View {
    x = 0;
    y = 0;
    zoom = 0.3;
    tileSize = 16;

    convertPos(clientX: number, clientY : number) : Point {
        return new Point(
            (clientX + window.pageXOffset) * this.zoom / this.tileSize,
            (clientY + window.pageYOffset) * this.zoom / this.tileSize
        );
    }
    updatePos() {
        this.x = Math.round(window.pageXOffset * this.zoom * 0.5) * 2;
        this.y = Math.round(window.pageYOffset * this.zoom * 0.5) * 2;
    };
}

export const view = new View();