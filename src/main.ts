
import { SpriteBatch } from "./gl/drawables/spriteBatch.js";
import { gl } from "./gl/gl.js";
import { input } from "./helper/input.js";
import { Timer } from "./helper/timer.js";
import { Point } from "./helper/point.js";
import { Entity } from "./logic/entity/entity.js";
import { spanMouse, spanPlayer, spanTime } from "./helper/htmlElements.js";
import { view } from "./helper/view.js";
const img = document.getElementById("diam") as HTMLImageElement;
const batch = new SpriteBatch(10, img);
const ent = new Entity(batch.createSprite());
ent.sprite.x = 10;
ent.sprite.y = 10;
const tick = (elapsed: number) => {
    spanTime.innerHTML = Math.round(timer.elapsedTime*0.001).toString();
    spanPlayer.innerHTML = `x: ${Math.round(ent.sprite.x)} , y: ${Math.round(ent.sprite.y)}`;
    ent.update(elapsed * 0.001);
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.draw();
}

const timer = new Timer(tick, 66);
timer.start();
let  mouse = new Point(0,0);
window.onmousemove = (ev: MouseEvent) => {
    mouse = view.convertPos(ev.clientX, ev.clientY);
    spanMouse.innerHTML = `x: ${Math.round(mouse.x)} , y: ${Math.round(mouse.y)}`;
}

function moveToMouse() {
    ent.moveTo(mouse);
}
input.bindCall(moveToMouse,input.keys.click,null);
input.bindCall(timer.toggle,input.keys.middleClick,timer);