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

const mapSize = Vec.newI(50,30);

const wfc = new WfcHandler(dom.tiles, 8, mapSize);
const tilemap = new TileMap(mapSize, dom.tiles);
const batch = new Sprites(5000, dom.humans);
const layer = new Layer(
  Vec.newI(dom.canvas.width, dom.canvas.height), 0.9
);
const layer2 = new Layer(
  Vec.newI(dom.canvas.width, dom.canvas.height), -1
);

wfc.wave(Vec.newI(mapSize.x/2, mapSize.y/2));
const tick = (elapsedTime: number) => {
  info.update(timer.elapsedTime);

  doWaveFunctionCollapseStep();
  layer.use();
  tilemap.draw();
  layer2.use();
  batch.draw(elapsedTime);
  layer2.disable();
  layer.draw();
  layer2.draw();
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
