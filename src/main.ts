import { FrameBuffer } from "./gl/framebuffer/framebuffer.js";
import { Lightmap } from "./gl/framebuffer/lightmap.js";
import { Timer } from "./helper/timer.js";

const lightmap = new Lightmap(128, 128, 16);
lightmap.createLight(0, 0, 16);
lightmap.createLight(-6, 0, 8);
lightmap.createLight(4, 4, 8);
const tick = () => {


}
    lightmap.render();
    FrameBuffer.disable();
    lightmap.draw();

const timer = new Timer(tick, 1);
timer.start();


