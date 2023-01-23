import { Light } from "./gl/drawable/light.js";
import { gl } from "./gl/gl.js";
import { Color } from "./helper/color.js";
import { Timer } from "./helper/timer.js";

const lights = Light.createBuffer(5);
const r1 = new Light(lights, -300, 100, 16);
const r2 = new Light(lights, -300, 50, 16);
const r3 = new Light(lights, -300, 0, 16);
const r4 = new Light(lights, -300, -50, 16);
const r5 = new Light(lights, -300, -100, 16);
r1.color = new Color([255,255,0]);
r1.pos = [100,100];
r2.pos = [80,80];
r5.size = 255;
r2.color = new Color([255,0,0]);
r3.color = new Color([0, 255,0]);
r4.color = new Color([0, 0, 255]);
r5.color = new Color([255,0,255]);
const tick = () => {
    gl.clear(gl.COLOR_BUFFER_BIT);

Light.draw(lights);
r1.x+=1;
r2.x+=3;
r3.x+=5;
r4.x+=7;
r5.x+=10;

}

const timer = new Timer(tick,1);
timer.start();

