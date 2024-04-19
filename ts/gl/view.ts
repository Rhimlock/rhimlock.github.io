import { Rect } from "../components/rect.js";
import { Vec } from "../components/vec.js";
import { terminal } from "../controls/terminal.js";
import { UBOS, gl } from "./gl.js";
import { dom } from "../helper/htmlElements.js";
import { CONFIG } from "../global.js";

export class View {
  rect = new Rect(0, 0, 0, 0);
  depthActive = false;
  baseZoom = 1;

  constructor() {
    this.updatePos();
    this.updateSize();
  }

  getZoom() {
    const ratio = Vec.multiply(
      Vec.newF(1 / gl.canvas.width, 1 / gl.canvas.height),
      CONFIG.frameSize,
    );
    ratio.scale(this.baseZoom);
    return ratio;
  }

  convertPos(clientX: number, clientY: number): Vec {
    const n = CONFIG.tileSize * this.baseZoom;
    return Vec.newF(
      Math.floor(((clientX + window.scrollX) / n) * CONFIG.tileSize) /
      CONFIG.tileSize,
      Math.floor(((clientY + window.scrollY) / n) * CONFIG.tileSize) /
      CONFIG.tileSize,
    );
  }

  updatePos() {
    const pos = this.convertPos(0, 0);
    this.rect.assign(...pos.data);
  }

  updateSize() {
    gl.canvas.width = dom.canvas.clientWidth;
    gl.canvas.height = dom.canvas.clientHeight;
    this.updateBaseZoom();
    this.updateViewport();
    terminal.showLastLine();
  }

  updateBaseZoom() {
    const x = Math.ceil(
      (gl.canvas.width * window.devicePixelRatio) / CONFIG.frameSize.x,
    );
    const y = Math.ceil(
      (gl.canvas.height * window.devicePixelRatio) / CONFIG.frameSize.y,
    );
    this.baseZoom = Math.max(x, y);
    dom.world.style.width =
    CONFIG.mapSize.x * CONFIG.tileSize * this.baseZoom + "px";
    dom.world.style.height =
    CONFIG.mapSize.y * CONFIG.tileSize * this.baseZoom + "px";
  }

  updateViewport(
    size: Vec = Vec.newI(gl.drawingBufferWidth, gl.drawingBufferHeight),
    depth = true,
    color: Vec = Vec.newF(0.1, 0.6, 0.1, 1),
  ) {
    gl.clearColor(color.r, color.g, color.b, color.a);
    this.setDepth(depth);
    gl.viewport(0, 0, size.x, size.y);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.rect.w = size.x;
    this.rect.h = size.y;
    UBOS.viewport?.updateUniform("rect", this.rect.data);
    UBOS.viewport?.updateUniform("tileSize", new Float32Array([CONFIG.tileSize]));
  }

  private setDepth(use = true) {
    if (use == this.depthActive) return;
    if (use) {
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    } else {
      gl.disable(gl.DEPTH_TEST);
      gl.disable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ZERO);
    }
  }
}
