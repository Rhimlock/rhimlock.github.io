import { dom } from "../helper/htmlElements.js";
export const gl = dom.canvas.getContext("webgl2") as WebGL2RenderingContext;
if (!gl) {
    throw new Error("webgl2 context could not be initialized");
}
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
dom.canvas.width = dom.canvas.clientWidth;
dom.canvas.height = dom.canvas.clientHeight;
gl.viewport(0,0,dom.canvas.width,dom.canvas.height);
gl.clearColor(0,.5,.5, 1.0);
