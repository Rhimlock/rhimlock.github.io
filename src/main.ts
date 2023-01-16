

import { Rect } from "./gl/drawable/rect.js";
import { gl } from "./gl/gl.js";
import { Timer } from "./helper/timer.js";

const arr = new Uint8Array(1024*1024);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * 8);
}
const tick = () => {
    gl.clear(gl.COLOR_BUFFER_BIT);
}

const timer = new Timer(tick,1);
timer.start();



const rect = new Rect();
rect.log();