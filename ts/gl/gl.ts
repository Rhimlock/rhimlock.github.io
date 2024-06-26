import { dom } from "../helper/htmlElements.js";
import { View } from "./view.js";
import { Collection } from "../helper/Collection.js";
import { UBO } from "./buffer/ubo.js";

export const UBOS: Collection<UBO> = {};

export const gl = dom.canvas.getContext("webgl2", {
  antialias: false,
  depth: true,
  alpha: true,
  preserveDrawingBuffer: false,
}) as WebGL2RenderingContext;
if (!gl) {
  throw new Error("webgl2 context could not be initialized");
}
export const VIEW = new View();
window.onresize = VIEW.updateSize.bind(VIEW);
window.onscroll = VIEW.updatePos.bind(VIEW);

//needed for glsl-literal plugin
export const glsl = (x: any) => x as string;
