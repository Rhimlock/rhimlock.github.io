import { player } from "../logic/controller/player.js";
import { dom } from "./htmlElements.js";
import { mousePos } from "./input.js";
import { Point } from "./point.js";
class Info {
    update(worldTime) {
        dom.worldTime.innerHTML = Math.round(worldTime * 0.001).toString();
        dom.playerPos.innerHTML = `x: ${Math.round(player.x)} , y: ${Math.round(player.y)}`;
        dom.worldPos.innerHTML = (new Point(window.pageXOffset, window.pageYOffset)).toString();
        dom.mousePos.innerHTML = mousePos.toString();
    }
}
export const info = new Info();
//# sourceMappingURL=info.js.map