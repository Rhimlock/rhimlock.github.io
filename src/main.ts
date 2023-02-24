
import { FrameBuffer } from "./gl/basics/framebuffer.js";
import { Texture } from "./gl/basics/texture.js";
import { SpriteBatch } from "./gl/drawables/spritebatch.js";
import { gl } from "./gl/gl.js";
import { Light, Lightmap } from "./gl/lightmap.js";
import { images } from "./helper/images.js";
import { Timer } from "./helper/timer.js";

const cnv = gl.canvas as HTMLCanvasElement;
cnv.id = "canvas";
document.body.appendChild(cnv);

const batch = new SpriteBatch(24,new Texture(images.orks));

const lightmap = new Lightmap(128, 128, 16);
const lights : Light[]= [];
for (let i = 0; i < 16; ++i) {
    const x = Math.round(Math.random() * 128 - 64);
    const y = Math.round(Math.random() * 128 - 64);
    const size = Math.round(Math.random() * 32);
    lights.push(lightmap.createLight(x,y,size));
}
for (let i = 0; i < 24; ++i) {
    const x = Math.round(Math.random() * 128 - 64);
    const y = Math.round(Math.random() * 128 - 64);
    batch.createSprite([x,y],[0,0],16);
}
const tick = () => {
    lights.forEach(light => {
        light.aPos[0] += Math.round(Math.random() * 2 - 1);
        light.aPos[1] += Math.round(Math.random() * 2 - 1);
    });
    batch.sprites.forEach(sprite => {
        sprite.aPos[0] += Math.round(Math.random() * 2 - 1);
        sprite.aPos[1] += Math.round(Math.random() * 2 - 1);
    });
    lightmap.render();

    batch.draw();
    FrameBuffer.disable();

    lightmap.draw();

}
    

const timer = new Timer(tick, 1);
timer.start();

const tilesize = 16;
const tilemap = images.tiles;
console.log(tilesize,tilemap.dataset);