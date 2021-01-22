

import { gl } from "./gl/gl.js";
import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { ActiveObject } from "./logic/gameObjects/activeObject.js";
import { SpriteBatch } from "./gl/drawables/spriteBatch.js";
import { dom } from "./helper/htmlElements.js";
import { mousePos } from "./controls/mouse.js";
import { Color } from "./helper/color.js";

const batch = new SpriteBatch(10, dom.orks, true);
const player = new ActiveObject(batch.createSprite());
const dummies : ActiveObject[] = [];
player.x = 8;
player.y = 8;
player.sprite.color = new Color(255,0,0,255);
const tick = (elapsedTime: number) => {
    info.update(timer.elapsedTime);
    gl.clear(gl.COLOR_BUFFER_BIT);
    player.update(elapsedTime * 0.001, []);
    dummies.forEach(d => d.update(elapsedTime * 0.001, dummies));
    batch.draw(elapsedTime);
}

const timer = new Timer(tick, 0);
timer.start();

const createDummy = () => {
    const dummy = new ActiveObject(batch.createSprite(mousePos));
    dummies.push(dummy);
    dummy.destination = player;
}

input.bindCall(timer.toggle,input.keys.pause,timer);

input.bindCall((() => {player.destination = mousePos;}), input.keys.click, null);

input.bindCall(createDummy, input.keys.middleClick, null);