import { dom } from "../helper/htmlElements.js";
import { terminal } from "../controls/terminal.js";
import { view } from "../helper/view.js";
export const gl = dom.canvas.getContext("webgl2", {
    antialias: false,
    depth: true,
    alpha: false,
    preserveDrawingBuffer: false
});
if (!gl) {
    throw new Error("webgl2 context could not be initialized");
}
initGL();
updateSize();
view.updatePos();
window.onresize = updateSize;
window.onscroll = view.updatePos.bind(view);
function initGL() {
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
function updateSize() {
    gl.canvas.width = dom.canvas.clientWidth / view.zoom;
    gl.canvas.height = dom.canvas.clientHeight / view.zoom;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    terminal.showLastLine();
}
;
//# sourceMappingURL=gl.js.map