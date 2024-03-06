import { DIR } from "../directions.js";
import { Vec2, Vec4 } from "../vectors.js";
import { WfcTileSide } from "./WfcTileSide.js";


export class WfcTile extends Vec2 {
    sides: WfcTileSide[];
    pixels: Vec4[];
    constructor (pixels: Vec4[], texPos: Vec2) {
        super ([texPos.x,texPos.y]);
        this.pixels = pixels;
        this.sides = [];
        if (pixels.length == 4) {
            const topLeft = pixels[0] as Vec4;
            const topRight = pixels[1]as Vec4;
            const bottomLeft = pixels[3]as Vec4;
            const bottomRight = pixels[2] as Vec4;

            this.sides.push(new WfcTileSide([topLeft, topRight]));
            this.sides.push(new WfcTileSide([topRight, bottomRight]));
            this.sides.push(new WfcTileSide([bottomLeft, bottomRight]));
            this.sides.push(new WfcTileSide([topLeft, bottomLeft]));
        }
    }

    connects(neighbor: WfcTile, dir: DIR) {
        if (!neighbor) return true;
        const invert = (dir + 2) % 4;
        return this.sides[dir]?.equals(neighbor.sides[invert] as WfcTileSide);
    }

    findNeighbors(neighbors: WfcTile[], dir: DIR) {
        return neighbors.filter(neighbor => this.connects(neighbor, dir));
    }
}