import { player } from "../logic/controller/player.js";
import { spanMouse, spanPlayer, spanTime, spanWorldPos } from "./htmlElements.js";
import { mousePos } from "./input.js";
import { Point } from "./point.js";
class Info {
    update(worldTime) {
        spanTime.innerHTML = Math.round(worldTime * 0.001).toString();
        spanPlayer.innerHTML = `x: ${Math.round(player.x)} , y: ${Math.round(player.y)}`;
        spanWorldPos.innerHTML = (new Point(window.pageXOffset, window.pageYOffset)).toString();
        spanMouse.innerHTML = mousePos.toString();
    }
}
export const info = new Info();
//# sourceMappingURL=info.js.map