import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { dom } from "./helper/htmlElements.js";
import { TileMap } from "./gl/drawables/tilemap.js";
import { Layer } from "./gl/drawables/Layer.js";
import { Vec } from "./components/vec.js";
import { WfcHandler } from "./components/WaveFunctionCollapse/WfcHandler.js";
import { view } from "./gl/gl.js";
import { Lights } from "./gl/drawables/lights.js";
import { Sprites } from "./gl/drawables/sprites.js";

const tilemap = new TileMap(view.mapSize, dom.tiles);
const wfc = new WfcHandler(dom.tiles, 8, view.mapSize, tilemap);
const layerTilemap = new Layer(view.sizeFramebuffer, 0.9);
const layerLight = new Layer(view.sizeFramebuffer, 0);
const sprites = new Sprites(1024,dom.humans_normal);

for(let y= 0; y < 5; y++) {
  for(let x= 0; x < 5; x++) {
    const spr = sprites.createSprite(x*10,y*10);
    spr.tex.x = x;
    spr.tex.y = y;
  } 
}
const shadows = new Lights(40);
const lights = new Lights(40);
const light = lights.createLight();
const shadow = shadows.createLight();
light.pos.x = 40;
light.pos.y = 30;
light.radius.x = 200;
shadow.pos.x = 30;
shadow.pos.y = 35;
shadow.radius.x = 50;
wfc.wave(Vec.newI(view.mapSize.x / 2, view.mapSize.y / 2));
const tick = (_elapsedTime: number) => {
  info.update(timer.elapsedTime);

  if (!wfc.done) wfc.wave();

  layerTilemap.use();
  sprites.draw();
  tilemap.draw();
  layerLight.use();
  lights.draw();
  //layerShadow.use();
  shadows.draw();
  layerTilemap.disable();
  layerTilemap.draw();
  layerLight.draw();
  //layerShadow.draw();
  //layerLight.disable();
  //layerShadow.disable();
};

const timer = new Timer(tick, 0);
timer.start();

input.bindCall(timer.toggle, input.keys.pause, timer);

window.onblur = () => timer.toggle.bind(timer);
input.bindCall(() => {}, input.keys.middleClick, null);
