import { Grid } from "../grid.js";
import { Vec2, Vec4 } from "../vectors.js";
import { WfcField } from "./WfcField.js";
import { WfcTile } from "./WfcTile.js";

export class WfcHandler {
    tiles: WfcTile[] = []
    todo: WfcField[] = []
    pixles: Vec4[] = [];
    grid: Grid
    constructor(image: HTMLImageElement, tileSize: number, mapSize: Vec2) {
        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(image, 0, 0);

        for (let y = 0; y < image.height; y += tileSize) {
            for (let x = 0; x < image.height; x += tileSize) {
                const data = ctx?.getImageData(x, y, tileSize, tileSize).data;
                const pixels: Vec4[] = [];
                for (let i = 0; i < (data?.length ?? 0); i += 4) {
                    pixels.push(new Vec4(data?.subarray(i, i + 4) as Uint8ClampedArray))
                }
                this.addPixel(pixels[pixels.length/2] as Vec4);
                this.tiles.push(new WfcTile(pixels, new Vec2([x / tileSize, y / tileSize])));

            }
        }
        this.tiles.forEach((t,i) => t.sides.forEach(s => console.log(i,s.connectors)));
        for (let i = 0; i < (mapSize.x * mapSize.y); i++) this.todo.push( new WfcField(new Vec2([i % mapSize.x, Math.floor(i / mapSize.x)]), this.tiles));
        this.grid = new Grid(mapSize, this.todo);
    }

    addPixel(pixel: Vec4) {
        let i = this.pixles.findIndex(p => p.equals(pixel));
        if (i < 0) i = this.pixles.push(pixel);
        return i;
    }

    wave(pos : Vec2 | undefined = undefined) {
        const field = (pos ? this.grid.getField(pos) : this.todo[0]) as WfcField;
        if (!field || field.tile) return;
        field.pickRandom();
        this.todo = this.todo.sort(() => 0.5 - Math.random());
        this.todo = this.todo.sort((a,b) => (a.tiles.length <= b.tiles.length ? -1 : 1));
        this.todo = this.todo.filter(a => a.tiles.length > 1);
    }
   
}