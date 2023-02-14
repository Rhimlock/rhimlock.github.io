import { FrameBuffer } from "./gl/framebuffer/framebuffer.js";
import { Light } from "./gl/framebuffer/lightmap.js";
import { Timer } from "./helper/timer.js";

const lightmap = new FrameBuffer(128,128);
const shadowmap = new FrameBuffer(128,128);
const tick = () => {
    lightmap.use();
    Light.draw();
    shadowmap.use();
    Shadow.draw();
    FrameBuffer.disable();
}


const timer = new Timer(tick, 1);
timer.start();

const l1 = new Light(1,1,16);
const l2 = new Light(-100,0,32);
console.log(l1,l2);


const fb = new FrameBuffer(128,128);
fb.use();

Light.draw();
fb.draw();