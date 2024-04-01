import { Rect } from "../components/rect.js";
import { Vec } from "../components/vec.js";
import { terminal } from "../controls/terminal.js";
import { UBOS, gl } from "./gl.js";
import { dom } from "../helper/htmlElements.js";

export class View {
  tileSize = 8;
  rect = new Rect(0,0,0,0);
  depthActive = false;
  mapSize = Vec.newI(64, 32);
  sizeFramebuffer = Vec.newU(512, 256);
  baseZoom = 1;

  constructor() {
    this.updatePos();
    this.updateSize();
  }

  getZoom() {
    // const ratio = Vec.multiply(
    //   Vec.newF(1 / gl.canvas.width, 1 / gl.canvas.height),
    //   this.sizeFramebuffer,
    // );
    const ratio = Vec.resized(
      Vec.newF(1/ gl.canvas.width, 1/gl.canvas.height),
      this.tileSize
    )
    ratio.scale(this.baseZoom);
    console.log(ratio);
    return ratio;
  }

  convertPos(clientX: number, clientY: number): Vec {
    const n = this.tileSize * this.baseZoom;
    return Vec.newF(
      (clientX + window.scrollX ) / n,
      (clientY + window.scrollY ) / n,
    );
  }

  updatePos() {
    const pos = this.convertPos(window.scrollX, window.scrollY);
    this.rect.assign(...pos.data);
  }

  updateSize() {
    gl.canvas.width = dom.canvas.clientWidth;
    gl.canvas.height = dom.canvas.clientHeight;
    //this.baseZoom = Math.ceil(gl.canvas.width *window.devicePixelRatio/ this.sizeFramebuffer.x);
    this.updateViewport();
    terminal.showLastLine();
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
    this.rect.w = size.x ;
    this.rect.h = size.y ;
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
