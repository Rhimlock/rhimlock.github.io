import { Entity } from "../entity/entity.js";
import { World } from "../world.js";

export interface Controller{
    entities : Entity[];
    world : World | null;
    addEntity(entity : Entity) : void;
    update(time:number) : void;
}