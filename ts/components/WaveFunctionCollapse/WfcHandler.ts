import { Tile, TileMap } from "../../gl/drawables/tilemap.js";
import { Grid } from "../grid.js";
import { Rect } from "../rect.js";
import { Vec } from "../vec.js";
import { WfcField } from "./WfcField.js";
import { WfcTile } from "./WfcTile.js";

export class WfcHandler {
  tiles: WfcTile[] = [];
  todo: WfcField[] = [];
  grid: Grid;
  tileMap: TileMap;
  done = false;
  constructor(
    image: HTMLImageElement,
    tileSize: number,
    mapSize: Vec,
    tileMap: TileMap,
  ) {
    this.tileMap = tileMap;
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(image, 0, 0);

    for (let y = 0; y < image.height; y += tileSize) {
      for (let x = 0; x < image.width; x += tileSize) {
        const rects = [
          new Rect(x, y, 1, 1),
          new Rect(x + tileSize - 1, y, 1, 1),
          new Rect(x + tileSize - 1, y + tileSize - 1, 1, 1),
          new Rect(x, y + tileSize - 1, 1, 1),
        ];
        const pixels = rects.map(
          (r) =>
            new Vec(
              ctx?.getImageData(r.x, r.y, r.w, r.h).data as Uint8ClampedArray,
            ),
        );
        if (x + y > 0)
          this.tiles.push(
            new WfcTile(pixels, Vec.newI(x / tileSize, y / tileSize)),
          );
      }
    }
    this.grid = new Grid(mapSize);
    for (let i = 0; i < mapSize.x * mapSize.y; i++)
      this.todo.push(
        new WfcField(
          Vec.newI(i % mapSize.x, Math.floor(i / mapSize.x)),
          this.tiles,
          this.grid,
          tileMap.getVertex(i) as any as Tile,
        ),
      );
    this.grid.cells = [...this.todo];
  }

  wave(pos: Vec | undefined = undefined): boolean {
    if (this.done) return true;
    if (this.todo.length == 0) {
      this.done = this.checkIfAllFieldsOk();
      return this.done;
    }
    const field = (pos ? this.grid.getCell(pos) : this.todo[0]) as WfcField;
    field.pickRandom();
    this.todo = this.todo.sort(() => 0.5 - Math.random());
    this.todo = this.todo.sort((a, b) =>
      a.tiles.length <= b.tiles.length ? -1 : 1,
    );
    this.todo = this.todo.filter((a) => a.tiles.length > 1);
    return false;
  }

  private checkIfAllFieldsOk(): boolean {
    const missing = (this.grid.cells as WfcField[]).filter(
      (field) => (field.tiles.length === 0 || field.tile.texPos.equals(Vec.newI(0,0))),
    );
    if (missing.length === 0) return true;
    this.todo = [...missing];
    missing.forEach((m) =>
      m.neighbors.forEach((n) => {
        if (n && this.todo.indexOf(n) < 0) {
          this.todo.push(n);
        }
      }),
    );
    this.todo.forEach((field) => (field.tiles = [...this.tiles]));
    return false;
  }
}
