import { FrameBuffer } from "./gl/buffer/framebuffer.js";
import { Light } from "./gl/light.js";
import { Timer } from "./helper/timer.js";

const tick = () => {

}


const timer = new Timer(tick, 1);
timer.start();

const l1 = new Light(1,1,16);
const l2 = new Light(-100,0,32);
console.log(l1,l2);


const fb = new FrameBuffer(128,128);
fb.activate();

Light.draw();
fb.draw();