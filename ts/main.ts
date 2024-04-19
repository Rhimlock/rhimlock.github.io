import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { dom } from "./helper/htmlElements.js";
import { TileMap } from "./gl/drawables/tilemap.js";
import { Layer } from "./gl/drawables/Layer.js";
import { WfcHandler } from "./components/WaveFunctionCollapse/WfcHandler.js";
import { Sprites } from "./gl/drawables/sprites.js";
import { Vec } from "./components/vec.js";
import { CONFIG } from "./global.js";
const tilemap = new TileMap(CONFIG.mapSize, dom.tiles);
const wfc = new WfcHandler(dom.tiles, 8, CONFIG.mapSize, tilemap);
const sprites = new Sprites(1024, dom.humans_normal);

for (let y = 0; y < 3; y++) {
  for (let x = 0; x < 4; x++) {
    const spr = sprites.createSprite(x, y);
    spr.tex.x = x;
    spr.tex.y = y;
    spr.color.assign(100, 0, 100, 255);
  }
}

const layers: Layer[] = [];

layers.push(new Layer([tilemap]));
layers.push(new Layer([sprites]));

wfc.wave(Vec.newI(CONFIG.mapSize.x / 2, CONFIG.mapSize.y / 2));
const tick = (elapsedTime: number) => {
  info.update(elapsedTime);

  if (!wfc.done) {
    wfc.wave();
    wfc.wave();
    wfc.wave();
    wfc.wave();
  }
  layers.forEach((layer) => layer.update());

  Layer.disable();
  layers.forEach((layer) => layer.draw(elapsedTime));
};

const timer = new Timer(tick, 0);
timer.start();

input.bindCall(timer.toggle, input.keys.pause, timer);

window.onblur = () => timer.toggle.bind(timer);
input.bindCall(() => {}, input.keys.middleClick, null);
