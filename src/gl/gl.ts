import { dom } from "../helper/htmlElements.js";
export const gl = dom.canvas.getContext("webgl2") as WebGL2RenderingContext;
if (!gl) {
    throw new Error("webgl2 context could not be initialized");
}
gl.clearColor(0.2, 0.2, 0.2, 1.0);
