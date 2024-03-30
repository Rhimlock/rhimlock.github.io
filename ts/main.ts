import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { dom } from "./helper/htmlElements.js";
import { TileMap } from "./gl/drawables/tilemap.js";
import { Layer } from "./gl/drawables/Layer.js";
import { Vec } from "./components/vec.js";
import { WfcHandler } from "./components/WaveFunctionCollapse/WfcHandler.js";
import { view } from "./gl/gl.js";
import { Sprites } from "./gl/drawables/sprites.js";

const tilemap = new TileMap(view.mapSize, dom.tiles);
const wfc = new WfcHandler(dom.tiles, 8, view.mapSize, tilemap);
const layerTilemap = new Layer(view.sizeFramebuffer, 0.9);
const layerSprites = new Layer(view.sizeFramebuffer, 0);
const sprites = new Sprites(1024, dom.humans_normal);

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 14; x++) {
    const spr = sprites.createSprite(x * 20, y * 20);
    spr.tex.x = x;
    spr.tex.y = y;
    spr.color.assign(100, 0, 100, 255);
  }
}
wfc.wave(Vec.newI(view.mapSize.x / 2, view.mapSize.y / 2));
const tick = (_elapsedTime: number) => {
  info.update(timer.elapsedTime);

  if (!wfc.done) wfc.wave();

  layerTilemap.use();

  tilemap.draw();
  layerSprites.use();
  sprites.draw();
  Layer.disable();
  layerTilemap.draw();
  layerSprites.draw();
};

const timer = new Timer(tick, 0);
timer.start();

input.bindCall(timer.toggle, input.keys.pause, timer);

window.onblur = () => timer.toggle.bind(timer);
input.bindCall(() => {}, input.keys.middleClick, null);
