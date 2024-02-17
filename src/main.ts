

import { gl } from "./gl/gl.js";
import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { ActiveObject } from "./logic/gameObjects/activeObject.js";
import { SpriteBatch } from "./gl/drawables/spriteBatch.js";
import { dom } from "./helper/htmlElements.js";
import { mousePos } from "./controls/mouse.js";
import { Regiment } from "./logic/squads/regiment.js";
import { Point } from "./helper/point.js";
import { TileMap } from "./gl/drawables/tilemap.js";


const tilemap = new TileMap(1024,1024,dom.tiles);
const batch = new SpriteBatch(5, dom.humans);
const player = new ActiveObject(batch.createSprite());
const dummies : ActiveObject[] = [];


for (let y = 0; y <1024; y++) {
for (let x = 0; x < 1024; x++) {
    tilemap.setTile(x,y,Math.round(Math.random() * 8));
}
}

player.x = 8;

player.y = 8;
player.size = 8;
player.squad = new Regiment(player);
info.player = player;
const tick = (elapsedTime: number) => {
    info.update(timer.elapsedTime);
    
    const dir = new Point(0,0);
    if (input.left) dir.x = -1;
    if (input.right) dir.x = 1;
    if (input.up) dir.y = -1;
    if (input.down) dir.y = 1;
    if (dir.length !== 0) {

        player.destination = player.getSum(dir);
    
    }gl.clear(gl.COLOR_BUFFER_BIT);
    player.update(elapsedTime * 0.001);
    dummies.forEach(d => d.update(elapsedTime * 0.001));
    batch.draw(elapsedTime);
    tilemap.draw();
}

const timer = new Timer(tick, 0);
timer.start();

const createDummy = () => {
    const dummy = new ActiveObject(batch.createSprite(mousePos.x, mousePos.y));
    player.squad?.addMember(dummy);
    dummies.push(dummy);
    return dummy;
}

createDummy();
input.bindCall(timer.toggle,input.keys.pause,timer);

window.onblur = () => timer.toggle.bind(timer);
input.bindCall((() => {player.destination = mousePos;}), input.keys.middleClick, null);

input.bindCall(createDummy, input.keys.click, null);

input.bindCall(batch.removeElement, input.keys.escape, batch);