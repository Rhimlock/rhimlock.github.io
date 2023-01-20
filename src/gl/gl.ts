import { dom } from "../helper/htmlElements.js";
export const gl = dom.canvas.getContext("webgl2") as WebGL2RenderingContext;
if (!gl) {
    throw new Error("webgl2 context could not be initialized");
}
dom.canvas.width = 300;
dom.canvas.height = 150;
gl.clearColor(0.0, 0.5, 0.5, 1.0);
