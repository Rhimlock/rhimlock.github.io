import { input } from "./controls/input.js";
import { Timer } from "./helper/timer.js";
import { info } from "./controls/info.js";
import { Sprites } from "./gl/drawables/sprites.js";
import { dom } from "./helper/htmlElements.js";
import { TileMap } from "./gl/drawables/tilemap.js";
import { Layer } from "./gl/drawables/Layer.js";
import { Vec } from "./components/vec.js";
import { WfcHandler } from "./components/WaveFunctionCollapse/WfcHandler.js";
import { WfcField } from "./components/WaveFunctionCollapse/WfcField.js";
import { view } from "./gl/gl.js";

const mapSize = view.mapSize;

const wfc = new WfcHandler(dom.tiles, 8, mapSize);
const tilemap = new TileMap(mapSize, dom.tiles);
const batch = new Sprites(5000, dom.humans);
const layerTilemap = new Layer(view.sizeFramebuffer);

wfc.wave(Vec.newI(mapSize.x/2, mapSize.y/2));
const tick = (_elapsedTime: number) => {
  info.update(timer.elapsedTime);

  doWaveFunctionCollapseStep();
  layerTilemap.use();
  tilemap.draw();
  //batch.draw(elapsedTime);
  layerTilemap.disable();
  layerTilemap.draw();
};

const timer = new Timer(tick, 0);
timer.start();

const createDummy = () => {
};

const doWaveFunctionCollapseStep = () => {
  wfc.wave();
  wfc.grid.cells.forEach(f => {
    tilemap.setTile((f as WfcField), (f as WfcField).tiles[0] || Vec.newI(0,0) as Vec)
  });
}

createDummy();
input.bindCall(timer.toggle, input.keys.pause, timer);

window.onblur = () => timer.toggle.bind(timer);
input.bindCall(
  () => {


  },
  input.keys.middleClick,
  null,
);

input.bindCall(createDummy, input.keys.click, null);

input.bindCall(batch.removeElement, input.keys.escape, batch);
