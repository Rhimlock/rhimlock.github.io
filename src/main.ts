
import { FrameBuffer } from "./gl/basics/framebuffer.js";
import { Texture } from "./gl/basics/texture.js";
import { SpriteBatch } from "./gl/drawables/spritebatch.js";
import { Lightmap } from "./gl/lightmap.js";
import { dom } from "./helper/htmlElements.js";
import { Timer } from "./helper/timer.js";
const batch = new SpriteBatch(20,new Texture(dom.orks));
batch.createSprite([-64,-32],[0,0],16);
const lightmap = new Lightmap(128, 128, 16);
lightmap.createLight(-6, 0, 32);
lightmap.createLight(4, 4, 32);

lightmap.createLight(0, 0, 64);
const tick = () => {


}
    lightmap.render();
    batch.draw();
    FrameBuffer.disable();

    lightmap.draw();

const timer = new Timer(tick, 1);
timer.start();


