import { SpriteBatch } from "../gl/drawables/spriteBatch.js";
import { divMap, imgOrks } from "../helper/htmlElements.js";
import { view } from "../helper/view.js";
import { Controller } from "./controller/controller.js";
import { player } from "./controller/player.js";
import { Entity } from "./entity/entity.js";
import { Tile } from "./tile.js";

export class World {
    entities: Entity[] = [];
    tiles: Tile[] = [];

    spriteBatch: SpriteBatch;

    constructor(width: number, height: number) {
        this.spriteBatch = new SpriteBatch(10, imgOrks, true);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.tiles.push(new Tile(x, y, 0));
            }
        }
        divMap.style.width = "" + (width * view.tileSize * view.zoom);
        divMap.style.height = "" + (height * view.tileSize * view.zoom);
        this.createEntity(10, 10, player);
        player.world = this;
    }

    createEntity(x: number, y: number, controller: Controller): Entity {
        const ent = new Entity(this.spriteBatch.createSprite());
        ent.x = x;
        ent.y = y;
        this.entities.push(ent);
        controller.addEntity(ent);
        return ent;

    }

    update(elapsedTime: number) {
        player.update(elapsedTime);
        this.spriteBatch.draw();
    }
}
