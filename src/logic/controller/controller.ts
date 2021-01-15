import { Entity } from "../entity/entity.js";

export interface Controller{
    entities : Entity[];
    addEntity(entity : Entity) : void;
    update(time:number) : void;
}