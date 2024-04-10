import { Vec } from "../components/vec.js";
import { VIEW } from "../gl/gl.js";
import { dom } from "../helper/htmlElements.js";
import { mousePos } from "./mouse.js";

class Info {
  player: Vec | null = null;
  update(elapsedTime: number) {
    //dom.worldTime.innerHTML = Math.round(elapsedTime * 0.001).toString();
    dom.frameTime.innerHTML = Math.floor(elapsedTime * 1000).toString();
    dom.playerPos.innerHTML = `x: ${Math.round(this.player?.x || 0)} , y: ${Math.round(this.player?.y || 0)}`;
    dom.worldPos.innerHTML = VIEW.convertPos(0, 0).toString();
    dom.mousePos.innerHTML = mousePos.toString();
  }
}

export const info = new Info();
