import { Vec } from "../components/vec.js";
import { dom } from "../helper/htmlElements.js";
import { mousePos } from "./mouse.js";

class Info {
  player: Vec | null = null;
  update(worldTime: number) {
    dom.worldTime.innerHTML = Math.round(worldTime * 0.001).toString();
    dom.playerPos.innerHTML = `x: ${Math.round(this.player?.x || 0)} , y: ${Math.round(this.player?.y || 0)}`;
    dom.worldPos.innerHTML = Vec.newI(
      window.scrollX,
      window.scrollY
    ).toString();
    dom.mousePos.innerHTML = mousePos.toString();
  }
}

export const info = new Info();
