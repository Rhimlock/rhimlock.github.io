import { Field } from "../grid.js";
import { Vec2 } from "../vectors.js";
import { WfcTile } from "./WfcTile.js";
import { WfcTileSide } from "./WfcTileSide.js";

export class WfcField extends Field {
    tiles: WfcTile[] = [];
    constructor(pos: Vec2, tiles: WfcTile[]) {
        super(pos);
        this.tiles = [...tiles];
    }

    pickRandom() {

        this.clean();
        this.tiles = [this.tiles[Math.floor(this.tiles.length * Math.random())] as WfcTile];
        this.neighbours.forEach((n:WfcField) => n?.clean());

    }

    clean() {
        if (this.tile) return;
        this.tiles = this.tiles.filter(tile => {
            for (let i = 0; i < 4; i++) {
                if (this.neighbours[i]) {

                    let sides = this.getNeigbourSides(i, tile.sides[i] as WfcTileSide);
                    if (sides?.length === 0) return false;
                }
            }
            return true;
        })
        if (!this.tiles[0]) {
            this.tiles.push(new WfcTile([], new  Vec2([0,0])));
        }
    }

    getNeigbourSides(i: number, side: WfcTileSide) : WfcTileSide[] | undefined {
        let opposite = 0;
        switch (i) {
            case 0: opposite = 2; break
            case 1: opposite = 3; break;
            case 3: opposite = 1; break;
        }
        const n = this.neighbours[i];
        if (!n) return undefined;
        let sides = n.tiles.map((t:WfcTile) => t.sides[opposite]);
        sides = sides.filter((s:WfcTileSide) => (s ? s.connects(side) : false));
        return sides;
    }

    get tile() {
        switch (this.tiles.length) {
            case 0: return new WfcTile([], new Vec2([0, 0]));
            case 1: return this.tiles[0];
            default: return undefined;
        }
    }
}