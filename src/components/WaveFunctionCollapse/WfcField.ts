import { Grid } from "../grid.js";
import { Vec } from "../vec.js";
import { WfcTile } from "./WfcTile.js";
export class WfcField extends Vec {
    tiles: WfcTile[] = [];
    grid: Grid
    constructor(pos: Vec, tiles: WfcTile[], grid: Grid) {
        super(pos.data);
        this.tiles = [...tiles];
        this.grid = grid;
    }

    pickRandom() {
        this.clean();
        if (this.tiles.length < 1) {
        } else {
            this.tiles = [this.tiles[Math.ceil(this.tiles.length * Math.random() - 1)] as WfcTile];
        }
        this.neighbors.forEach((n: WfcField) => n?.clean());
    }

    clean() {
        if (this.tile) return;
        this.neighbors.forEach((neighbor, i) => {
            if (neighbor) {

                this.tiles = this.tiles.filter(tile => {
                    const hits = tile.findNeighbors(neighbor.tiles, i);
                    return hits.length > 0;
                })
            }
        })
    }

    get neighbors() {
        return this.grid.getNeighbors(this) as WfcField[];
    }

    get tile() {
        switch (this.tiles.length) {
            case 1: return this.tiles[0];
            default: return undefined;
        }
    }
}