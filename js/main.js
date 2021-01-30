import { gl } from "./gl/gl.js";
import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { ActiveObject } from "./logic/gameObjects/activeObject.js";
import { SpriteBatch } from "./gl/drawables/spriteBatch.js";
import { dom } from "./helper/htmlElements.js";
import { mousePos } from "./controls/mouse.js";
import { Color } from "./helper/color.js";
import { Flock } from "./logic/squads/flock.js";
const batch = new SpriteBatch(200, dom.orks, true);
const player = new ActiveObject(batch.createSprite());
const dummies = [];
player.x = 8;
player.y = 8;
player.sprite.color = new Color(255, 0, 0, 255);
player.squad = new Flock(player);
const tick = (elapsedTime) => {
    info.update(timer.elapsedTime);
    gl.clear(gl.COLOR_BUFFER_BIT);
    player.update(elapsedTime * 0.001);
    dummies.forEach(d => d.update(elapsedTime * 0.001));
    batch.draw(elapsedTime);
};
const timer = new Timer(tick, 0);
timer.start();
const createDummy = () => {
    const dummy = new ActiveObject(batch.createSprite(mousePos));
    player.squad?.addMember(dummy);
    dummies.push(dummy);
};
input.bindCall(timer.toggle, input.keys.pause, timer);
window.onblur = () => timer.toggle.bind(timer);
input.bindCall((() => { player.destination = mousePos; }), input.keys.middleClick, null);
input.bindCall(createDummy, input.keys.click, null);
//# sourceMappingURL=main.js.map