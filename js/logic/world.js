import { SpriteBatch } from "../gl/drawables/spriteBatch.js";
import { dom } from "../helper/htmlElements.js";
import { view } from "../helper/view.js";
import { player } from "./controller/player.js";
import { Entity } from "./entity/entity.js";
import { Tile } from "./tile.js";
export class World {
    constructor(width, height) {
        this.entities = [];
        this.tiles = [];
        this.spriteBatch = new SpriteBatch(10, dom.orks, true);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.tiles.push(new Tile(x, y, 0));
            }
        }
        dom.world.style.width = "" + (width * view.tileSize * view.zoom);
        dom.world.style.height = "" + (height * view.tileSize * view.zoom);
        this.createEntity(10, 10, player);
        player.world = this;
    }
    createEntity(x, y, controller) {
        const ent = new Entity(this.spriteBatch.createSprite());
        ent.x = x;
        ent.y = y;
        this.entities.push(ent);
        controller.addEntity(ent);
        return ent;
    }
    update(elapsedTime) {
        player.update(elapsedTime);
        this.spriteBatch.draw();
    }
}
//# sourceMappingURL=world.js.map