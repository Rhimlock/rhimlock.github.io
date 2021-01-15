import { SpriteBatch } from "../gl/drawables/spriteBatch.js";
import { divMap, imgOrks } from "../helper/htmlElements.js";
import { view } from "../helper/view.js";
import { player } from "./controller/player.js";
import { Entity } from "./entity/entity.js";
import { Tile } from "./tile.js";
export class World {
    constructor(width, height) {
        this.entities = [];
        this.tiles = [];
        this.spriteBatch = new SpriteBatch(10, imgOrks, true);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.tiles.push(new Tile(x, y, 0));
            }
        }
        divMap.style.width = "" + (width * view.tileSize * view.zoom);
        divMap.style.height = "" + (height * view.tileSize * view.zoom);
        const ent = new Entity(this.spriteBatch.createSprite(), player);
        ent.x = 10;
        ent.y = 10;
        this.entities.push(ent);
    }
    update(elapsedTime) {
        player.update(elapsedTime);
        this.spriteBatch.draw();
    }
}
//# sourceMappingURL=world.js.map