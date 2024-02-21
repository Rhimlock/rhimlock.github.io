import { dom } from "../helper/htmlElements.js";
import { terminal } from "../controls/terminal.js";
import { view } from "../helper/view.js";
import { Vec2, Vec4 } from "../components/vectors.js";
export const gl = dom.canvas.getContext("webgl2", {
  antialias: false,
  depth: true,
  alpha: true,
  preserveDrawingBuffer: false,
}) as WebGL2RenderingContext;
if (!gl) {
  throw new Error("webgl2 context could not be initialized");
}
const depthActive = false;
updateViewport();
updateSize();
view.updatePos();

window.onresize = updateSize;
window.onscroll = view.updatePos.bind(view);


function updateSize() {
  gl.canvas.width = dom.canvas.clientWidth / view.zoom;
  gl.canvas.height = dom.canvas.clientHeight / view.zoom;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  terminal.showLastLine();
}


function setDepth(use = true) {
  if (use == depthActive) return;
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

export function updateViewport(size: Vec2 = new Vec2([gl.drawingBufferWidth, gl.drawingBufferHeight]), depth = true, color: Vec4 = new Vec4([0.1,0.1,1,1])) {
  gl.clearColor(color.r, color.g, color.b, color.a);
  setDepth(depth);
  gl.viewport(0, 0, size.x, size.y);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

}
