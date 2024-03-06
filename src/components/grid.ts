import { VDIR } from "./directions.js";
import { Vec2 } from "./vectors.js";

export class Grid {
    size: Vec2;
    cells: any[] = [];
    constructor(size: Vec2, values: any[] | undefined = undefined) {
        this.size = size;
        if (values) {
            this.cells = values;
        } else {
            this.cells = new Array(size.x * size.y).fill({});
        }
    }

    getCell(pos: Vec2) {
        return this.isFieldInGrid(pos) ? this.cells[pos.x + pos.y * this.size.x] : undefined;
    }

    getNeighbors(pos: Vec2) {
        return [
            this.getCell(Vec2.sum(pos, VDIR.up)),
            this.getCell(Vec2.sum(pos, VDIR.right)),
            this.getCell(Vec2.sum(pos, VDIR.down)),
            this.getCell(Vec2.sum(pos, VDIR.left))
        ]
    }

    isFieldInGrid(pos: Vec2): boolean {
        return pos.x >= 0 && pos.x < this.size.x && pos.y >= 0 && pos.y < this.size.y;
    }
}