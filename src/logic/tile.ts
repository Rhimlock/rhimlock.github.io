import { Point } from "../helper/point.js";
import { Entity } from "./entity/entity.js";

export class Tile extends Point{
    type : number;
    entity : Entity | null = null;
    constructor(x : number, y: number, type : number) {
        super(x,y);
        this.type = type;
    }
}