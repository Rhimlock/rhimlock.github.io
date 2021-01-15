

import { gl } from "./gl/gl.js";
import { input } from "./helper/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./helper/info.js";
import { World } from "./logic/world.js";

const world = new World(100,100);
const tick = (elapsedTime: number) => {
    info.update(timer.elapsedTime);
    gl.clear(gl.COLOR_BUFFER_BIT);
    world.update(elapsedTime * 0.001);
}

const timer = new Timer(tick, 0);
timer.start();

input.bindCall(timer.toggle,input.keys.middleClick,timer);