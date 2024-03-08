import { VDIR } from "./directions.js";
import { Vec } from "./vec.js";

export class Grid {
    size: Vec;
    cells: any[] = [];
    constructor(size: Vec, values: any[] | undefined = undefined) {
        this.size = size;
        if (values) {
            this.cells = values;
        } else {
            this.cells = new Array(size.x * size.y).fill({});
        }
    }

    getCell(pos: Vec) {
        return this.isFieldInGrid(pos) ? this.cells[pos.x + pos.y * this.size.x] : undefined;
    }

    getNeighbors(pos: Vec) {
        return [
            this.getCell(Vec.sum(pos, VDIR.up)),
            this.getCell(Vec.sum(pos, VDIR.right)),
            this.getCell(Vec.sum(pos, VDIR.down)),
            this.getCell(Vec.sum(pos, VDIR.left))
        ]
    }

    isFieldInGrid(pos: Vec): boolean {
        return pos.x >= 0 && pos.x < this.size.x && pos.y >= 0 && pos.y < this.size.y;
    }
}