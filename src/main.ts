import { FrameBuffer } from "./gl/framebuffer/framebuffer.js";
import { Lightmap } from "./gl/framebuffer/lightmap.js";
import { Timer } from "./helper/timer.js";

const lightmap = new Lightmap(16, 16, 16);
// const shadowmap = new FrameBuffer(128,128);
lightmap.createLight(0, 0, 8);
lightmap.createLight(-4, 0, 8);
lightmap.createLight(4, 4, 8);
const tick = () => {


}
    lightmap.render();
    // shadowmap.use();
    // Shadow.draw();
    FrameBuffer.disable();
    lightmap.draw();

const timer = new Timer(tick, 1);
timer.start();


