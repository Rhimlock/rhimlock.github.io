import { player } from "../logic/controller/player.js";
import { dom } from "../helper/htmlElements.js";
import { Point } from "../helper/point.js";
import { terminal } from "./terminal.js";
import { mousePos } from "./mouse.js";
class Info {
    update(worldTime) {
        if (terminal.isVisible()) {
            dom.worldTime.innerHTML = Math.round(worldTime * 0.001).toString();
            dom.playerPos.innerHTML = `x: ${Math.round(player.x)} , y: ${Math.round(player.y)}`;
            dom.worldPos.innerHTML = (new Point(window.pageXOffset, window.pageYOffset)).toString();
            dom.mousePos.innerHTML = mousePos.toString();
        }
    }
}
export const info = new Info();
//# sourceMappingURL=info.js.map