import { canvas } from "../helper/htmlElements.js";
import { Point } from "../helper/point.js";
const zoom = 0.3;
export const tileSize = 16;
export const view = new Point(0, 0);
export const gl = canvas.getContext("webgl2", {
    antialias: false,
    depth: true,
    alpha: false,
    preserveDrawingBuffer: false
}) as WebGL2RenderingContext;
if (!gl) {
    throw new Error("webgl2 context could not be initialized");
}
initGL();
updateSize();
updatePos();

window.onresize = updateSize;
window.onscroll = updatePos;

function initGL() {
    gl.canvas.width = canvas.clientWidth;
    gl.canvas.height = canvas.clientHeight;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function updateSize() {
    gl.canvas.width = canvas.clientWidth * zoom;
    gl.canvas.height = canvas.clientHeight * zoom;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
};

function updatePos() {
    view.x = Math.round(window.pageXOffset * zoom * 0.5) * 2;
    view.y = Math.round(window.pageYOffset * zoom * 0.5) * 2;
};

export function getCoords(clientX: number, clientY: number) : Point {
    return new Point(
        (clientX + window.pageXOffset) * zoom,
        (clientY + window.pageYOffset) * zoom
    );
}
