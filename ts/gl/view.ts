import { Rect } from "../components/rect.js";
import { Vec } from "../components/vec.js";
import { terminal } from "../controls/terminal.js";
import { UBOS, gl } from "./gl.js";
import { dom } from "../helper/htmlElements.js";

export class View {
  tileSize = 8;
  rect = new Rect(0, 0, 0, 0);
  depthActive = false;
  mapSize = Vec.newI(64, 64);
  sizeFramebuffer = Vec.newU(512, 512);
  baseZoom = 1;

  constructor() {
    this.updatePos();
    this.updateSize();
  }

  getZoom() {
    const ratio = Vec.multiply(
      Vec.newF(1 / gl.canvas.width, 1 / gl.canvas.height),
      this.sizeFramebuffer,
    );
    ratio.scale(this.baseZoom);
    return ratio;
  }

  convertPos(clientX: number, clientY: number): Vec {
    const n = this.tileSize * this.baseZoom;
    return Vec.newF(
      Math.floor((clientX + window.scrollX) / n),
      Math.floor((clientY + window.scrollY) / n),
    );
  }

  updatePos() {
    const pos = this.convertPos(0,0);
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
    const x = Math.ceil(gl.canvas.width * window.devicePixelRatio / this.sizeFramebuffer.x);
    const y = Math.ceil(gl.canvas.height * window.devicePixelRatio / this.sizeFramebuffer.y);
    this.baseZoom = Math.max(x,y);
    
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
    UBOS.viewport?.updateUniform(
      "rect",
      this.rect.data
    )
    UBOS.viewport?.updateUniform(
      "tileSize",
      new Float32Array([this.tileSize])
    )
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
