import { dom } from "../helper/htmlElements.js";
import { Point } from "../helper/point.js";
import { mousePos } from "./mouse.js";
class Info {
    constructor() {
        this.player = null;
    }
    update(worldTime) {
        dom.worldTime.innerHTML = Math.round(worldTime * 0.001).toString();
        dom.playerPos.innerHTML = `x: ${Math.round(this.player?.x || 0)} , y: ${Math.round(this.player?.y || 0)}`;
        dom.worldPos.innerHTML = (new Point(window.pageXOffset, window.pageYOffset)).toString();
        dom.mousePos.innerHTML = mousePos.toString();
    }
}
export const info = new Info();
//# sourceMappingURL=info.js.map