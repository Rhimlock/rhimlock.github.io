import { Grid } from "../grid.js";
import { Vec2 } from "../vectors.js";
import { WfcTile } from "./WfcTile.js";
let allTiles: WfcTile[] = [];
export class WfcField extends Vec2 {
    tiles: WfcTile[] = [];
    grid: Grid
    constructor(pos: Vec2, tiles: WfcTile[], grid: Grid) {
        super([pos.x, pos.y]);
        this.tiles = [...tiles];
        allTiles = tiles;
        this.grid = grid;
    }

    pickRandom() {

        this.clean();
        if (this.tiles.length < 1) {
            this.tiles = [...allTiles];
            this.neighbors.forEach((n: WfcField) => n.tiles = [...allTiles]);
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