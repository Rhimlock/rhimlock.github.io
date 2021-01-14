
import { SpriteBatch } from "./gl/drawables/spriteBatch.js";
import { gl } from "./gl/gl.js";
import { input } from "./helper/input.js";
import { Timer } from "./helper/timer.js";
import { Point } from "./helper/point.js";
import { Entity } from "./logic/entity/entity.js";
import { divMap, spanMouse, spanPlayer, spanTime, spanWorldPos } from "./helper/htmlElements.js";
import { view } from "./helper/view.js";
import { Color } from "./helper/color.js";
const img = document.getElementById("diam") as HTMLImageElement;
const batch = new SpriteBatch(10, img);
const ent = new Entity(batch.createSprite());
ent.sprite.x = 10;
ent.sprite.y = 10;
const tick = (elapsed: number) => {
    spanTime.innerHTML = Math.round(timer.elapsedTime*0.001).toString();
    spanPlayer.innerHTML = `x: ${Math.round(ent.sprite.x)} , y: ${Math.round(ent.sprite.y)}`;
    spanWorldPos.innerHTML = (new Point(window.pageXOffset, window.pageYOffset )).toString();
    spanMouse.innerHTML = mouse.toString();
    ent.update(elapsed * 0.001);
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.draw();
    terrain.draw();
}
const size = 8;
const terrain = new SpriteBatch(size * size, img);
divMap.style.width = "" + (size * view.tileSize * view.zoom);

divMap.style.height = "" + (size * view.tileSize * view.zoom);
for (let x = 0; x < size; x++){
    for (let y = 0; y < size; y++){
        const tile = terrain.createSprite();
        tile.x = x;
        tile.y = y;
        tile.tx = x;
        tile.ty = y;
        tile.size = view.tileSize;
        if ((x+y) % 2 === 1) {
            tile.color = new Color(0,75,0,255);
         } else {
             tile.color = new Color(0,150,0,255);
         }

    }
}

const timer = new Timer(tick, 0);
timer.start();
let  mouse = new Point(0,0);
window.onmousemove = (ev: MouseEvent) => {
    mouse = view.convertPos(ev.clientX, ev.clientY);
}

function moveToMouse() {
    ent.moveTo(mouse);
}
input.bindCall(moveToMouse,input.keys.click,null);
input.bindCall(timer.toggle,input.keys.middleClick,timer);