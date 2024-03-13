import { Tile } from "../../gl/drawables/tilemap.js";
import { Grid } from "../grid.js";
import { Vec } from "../vec.js";
import { WfcTile } from "./WfcTile.js";
export class WfcField extends Vec {
  tiles: WfcTile[] = [];
  grid: Grid;
  tile: Tile;
  constructor(pos: Vec, tiles: WfcTile[], grid: Grid, tile: Tile) {
    super(pos.data);
    this.tiles = [...tiles];
    this.grid = grid;
    this.tile = tile;
  }

  pickRandom() {
    this.clean();
    if (this.tiles.length >= 0) {
      this.tiles = [
        this.tiles[Math.ceil(this.tiles.length * Math.random() - 1)] as WfcTile,
      ];
      if (this.tiles[0]) {
        this.tile.texPos.assign(...this.tiles[0]?.data);
      }
    }
    this.neighbors.forEach((n: WfcField) => n?.clean());
  }

  clean() {
    if (this.tiles.length === 1) return;
    this.neighbors.forEach((neighbor, i) => {
      if (neighbor) {
        this.tiles = this.tiles.filter((tile) => {
          const hits = tile.findNeighbors(neighbor.tiles, i);
          return hits.length > 0;
        });
      }
    });
    const tile = this.tiles[0];
    if (tile) {
      this.tile?.texPos.assign(...tile.data);
    } else {
      this.tile?.texPos.assign(0, 0);
    }
  }

  get neighbors() {
    return this.grid.getNeighbors(this) as WfcField[];
  }
}
