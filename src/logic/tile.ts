import { Point } from "../helper/point.js";

export class Tile extends Point{
    type : number;
    constructor(x : number, y: number, type : number) {
        super(x,y);
        this.type = type;
    }
}