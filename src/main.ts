import { Rect } from "./gl/drawable/rect.js";
import { gl } from "./gl/gl.js";
import { Timer } from "./helper/timer.js";

const rectProgram = Rect.getProgram();
const rectBuffer = Rect.createBuffer(5);
const r1 = new Rect(rectBuffer, -300, 100, 16);
const r2 = new Rect(rectBuffer, -300, 50, 16);
const r3 = new Rect(rectBuffer, -300, 0, 16);
const r4 = new Rect(rectBuffer, -300, -50, 16);
const r5 = new Rect(rectBuffer, -300, -100, 16);
r1.color = [255,255,0];
r1.pos = [100,100];
const tick = () => {
    gl.clear(gl.COLOR_BUFFER_BIT);

rectProgram.drawBuffer(rectBuffer);
r1.x+=2;
r2.x+=4;
r3.x+=6;
r4.x+=8;
r5.x+=10;

}

const timer = new Timer(tick,1);
timer.start();

