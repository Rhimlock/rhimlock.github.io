import { Rect } from "../components/rect.js";
import { Vec } from "../components/vec.js";
import { terminal } from "../controls/terminal.js";
import { UBOS, gl } from "../gl/gl.js";
import { dom } from "./htmlElements.js";

export class View {
  tileSize = 8;
  rect = new Rect(new Float32Array(4));
  depthActive = false;
  mapSize = Vec.newI(81, 61);
  sizeFramebuffer = Vec.newU(640, 480);
  baseZoom = 3;

  constructor() {
    this.updatePos();
    this.updateSize();
  }

  getZoom() {
    const ratio = Vec.multiply(Vec.newF(1/gl.canvas.width, 1/gl.canvas.height),this.sizeFramebuffer, );
    ratio.scale(this.baseZoom);
    return ratio;
  }

  convertPos(clientX: number, clientY: number): Vec {
    const n = this.tileSize; //* this.zoom;
    return Vec.newF(
      (clientX + window.scrollX - n * 0.5) / n,
      (clientY + window.scrollY - n * 0.5) / n,
    );
  }

  updatePos() {
    const pos = this.convertPos(0, 0);
    this.rect.x = pos.x;
    this.rect.assign(...pos.data);
  }

  updateSize() {
    gl.canvas.width = dom.canvas.clientWidth;
    gl.canvas.height = dom.canvas.clientHeight;
    this.updateViewport();
    terminal.showLastLine();
  }

  updateViewport(
    size: Vec = Vec.newI(gl.drawingBufferWidth, gl.drawingBufferHeight),
    depth = true,
    color: Vec = Vec.newF(0.1, 0.1, 1, 1),
  ) {
    gl.clearColor(color.r, color.g, color.b, color.a);
    this.setDepth(depth);
    gl.viewport(0, 0, size.x, size.y);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.rect.w = size.x;
    this.rect.h = size.y;
    UBOS.config?.updateUniform(
      "uResInv",
      new Float32Array([2 / this.rect.w, 2 / this.rect.h]),
    );
    UBOS.config?.updateUniform(
      "uView",
      new Float32Array([this.rect.x, this.rect.y]),
    );
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
