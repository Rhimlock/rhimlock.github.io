
import { SpriteBatch } from "./gl/drawables/spriteBatch.js";
import { getCoords, gl } from "./gl/gl.js";
import { input } from "./helper/input.js";
import { Timer } from "./helper/timer.js";
import { Point } from "./helper/point.js";
import { Entity } from "./logic/entity.js";
import { spanMouse, spanPlayer, spanTime } from "./helper/htmlElements.js";
import { terminal } from "./helper/terminal.js";
const img = document.getElementById("diam") as HTMLImageElement;
const batch = new SpriteBatch(10, img);
const ent = new Entity(batch.createSprite());
ent.pos.x = 100;
ent.pos.y = 100;
terminal.show();
const tick = (elapsed: number) => {
    spanTime.innerHTML = Math.round(timer.elapsedTime*0.001).toString();
    spanPlayer.innerHTML = `x: ${Math.round(ent.sprite.x)} , y: ${Math.round(ent.sprite.y)}`;
    handleInput();
    ent.update(elapsed * 0.001);
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.draw();
}

const timer = new Timer(tick, 66);
timer.start();

function handleInput() {
    const dir = new Point(0, 0);
    if (input.right ) dir.x = 1;
    if (input.left) dir.x = -1;
    if (input.up) dir.y = -1;
    if (input.down) dir.y = 1;
    ent.dir = dir;
}


window.onmousemove = (ev: MouseEvent) => {
    const pos = getCoords(ev.clientX, ev.clientY);
    spanMouse.innerHTML = `x: ${Math.round(pos.x)} , y: ${Math.round(pos.y)}`;
    //ent.moveTo(pos);
    // spr2.x = pos.x;
    // spr2.y = pos.y;
}

window.onmousedown = (ev: MouseEvent) => {
    if (ev.button === 1) {
        timer.running ? timer.stop() : timer.start();
    }
}