import { Grid } from "../grid.js";
import { Vec2, Vec4 } from "../vectors.js";
import { WfcField } from "./WfcField.js";
import { WfcTile } from "./WfcTile.js";

export class WfcHandler {
    tiles: WfcTile[] = []
    todo: WfcField[] = []
    grid: Grid
    constructor(image: HTMLImageElement, tileSize: number, mapSize: Vec2) {
        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(image, 0, 0);

        for (let y = 0; y < image.height; y += tileSize) {
            for (let x = 0; x < image.width; x += tileSize) {
                const pixels: Vec4[] = [
                        new Vec4(ctx?.getImageData(x,y,1,1).data as Uint8ClampedArray),
                        new Vec4(ctx?.getImageData(x+tileSize-1,y,1,1).data as Uint8ClampedArray),
                        new Vec4(ctx?.getImageData(x+tileSize-1,y+tileSize-1,1,1).data as Uint8ClampedArray),
                        new Vec4(ctx?.getImageData(x,y+tileSize-1,1,1).data as Uint8ClampedArray)

                ];

                this.tiles.push(new WfcTile(pixels, new Vec2([x / tileSize, y / tileSize])));

            }
        }
        //this.tiles.forEach((t,i) => t.sides.forEach(s => console.log(i,s)));
        this.grid = new Grid(mapSize);
        for (let i = 0; i < (mapSize.x * mapSize.y); i++) this.todo.push( new WfcField(new Vec2([i % mapSize.x, Math.floor(i / mapSize.x)]), this.tiles, this.grid));
        this.grid.cells = [...this.todo];
    }


    wave(pos : Vec2 | undefined = undefined) {
        const field = (pos ? this.grid.getCell(pos) : this.todo[0]) as WfcField;
        if (!field || field.tile) return;
        field.pickRandom();
        this.todo = this.todo.sort(() => 0.5 - Math.random());
        this.todo = this.todo.sort((a,b) => (a.tiles.length <= b.tiles.length ? -1 : 1));
        this.todo = this.todo.filter(a => a.tiles.length > 1);
    }
   
}