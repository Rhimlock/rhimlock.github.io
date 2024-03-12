import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { dom } from "./helper/htmlElements.js";
import { TileMap } from "./gl/drawables/tilemap.js";
import { Layer } from "./gl/drawables/Layer.js";
import { Vec } from "./components/vec.js";
import { WfcHandler } from "./components/WaveFunctionCollapse/WfcHandler.js";
import { view } from "./gl/gl.js";

const a = new Uint16Array([1,2]);
const b = a.buffer;
const c = new Uint8Array(b);

console.log(a,c);
c[0] = 128;
console.log(a,c);
const mapSize = view.mapSize;

const tilemap = new TileMap(mapSize, dom.tiles);
const wfc = new WfcHandler(dom.tiles, 8, mapSize, tilemap);
const layerTilemap = new Layer(view.sizeFramebuffer);

wfc.wave(Vec.newI(mapSize.x / 2, mapSize.y / 2));
const tick = (_elapsedTime: number) => {
  info.update(timer.elapsedTime);

  if (!wfc.done) wfc.wave();

  layerTilemap.use();
  tilemap.draw();
  layerTilemap.disable();
  layerTilemap.draw();
};

const timer = new Timer(tick, 0);
timer.start();

input.bindCall(timer.toggle, input.keys.pause, timer);

window.onblur = () => timer.toggle.bind(timer);
input.bindCall(() => {}, input.keys.middleClick, null);
