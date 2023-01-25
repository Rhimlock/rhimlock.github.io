import { Light } from "./gl/drawable/light.js";
import { Rect } from "./gl/drawable/rect.js";
// import { FrameBuffer } from "./gl/framebuffer.js";
import { gl } from "./gl/gl.js";
import { Texture } from "./gl/texture.js";
import { Color } from "./helper/color.js";
import { dom } from "./helper/htmlElements.js";
import { Timer } from "./helper/timer.js";
// const fb = new FrameBuffer(512,512);
const r1 = new Light(-300, 100, 16);
const r2 = new Light(-300, 50, 16);
const r3 = new Light(-300, 0, 16);
const r4 = new Light(-300, -50, 16);
const r5 = new Light(-300, -100, 16);
const r6 = new Light(0,0,32);
r6.color = new Color([255,255,255]);
r1.color = new Color([255,255,0]);
r1.pos = [100,100];
r2.pos = [80,80];
r5.pos = [0,0];
r5.size = 128    ;
r2.color = new Color([255,0,0]);
r3.color = new Color([0, 255,0]);
r4.color = new Color([0, 0, 255]);
r5.color = new Color([255,0,255]);

const rect = new Rect(new Texture(dom.humans));
const tick = () => {
    // gl.clearColor(0,2,0,1);
 gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // fb.use();
Light.draw();
rect.draw();

}

const timer = new Timer(tick,1);
timer.start();

