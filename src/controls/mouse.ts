import { Vec } from "../components/vec.js";
import { dom } from "../helper/htmlElements.js";
import { view } from "../helper/view.js";
import { input } from "./input.js";
import { terminal } from "./terminal.js";

export const mousePos = Vec.newI(0, 0);

window.onmousedown = (ev: MouseEvent) => {
  input.set("mouse" + ev.button, true);
  input.call(ev);
};

window.onmouseup = (ev: MouseEvent) => {
  input.set("mouse" + ev.button, false);
};

window.onmousemove = (ev: MouseEvent) => {
  const pos = view.convertPos(ev.clientX, ev.clientY);
  mousePos.x = pos.x;
  mousePos.y = pos.y;
};

dom.world.onmousedown = () => {
  terminal.hide();
};
