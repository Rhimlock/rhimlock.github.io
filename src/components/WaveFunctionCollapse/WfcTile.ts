import { DIR } from "../directions.js";
import { Vec } from "../vec.js";
import { WfcTileSide } from "./WfcTileSide.js";

export class WfcTile extends Vec {
  sides: WfcTileSide[];
  pixels: Vec[];
  constructor(pixels: Vec[], texPos: Vec) {
    super(texPos.data);
    this.pixels = pixels;
    this.sides = [];
    if (pixels.length == 4) {
      const topLeft = pixels[0] as Vec;
      const topRight = pixels[1] as Vec;
      const bottomLeft = pixels[3] as Vec;
      const bottomRight = pixels[2] as Vec;

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
    return neighbors.filter((neighbor) => this.connects(neighbor, dir));
  }
}
