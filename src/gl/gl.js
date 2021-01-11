"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = exports.canvas = exports.gl = void 0;
var point_1 = require("src/helper/point");
var canvas = document.getElementById("cnv");
exports.canvas = canvas;
var gl = canvas.getContext("webgl2", {
    antialias: false,
    depth: true,
    alpha: false,
    preserveDrawingBuffer: false
});
exports.gl = gl;
if (!gl) {
    throw new Error("webgl2 context could not be initialized");
}
gl.canvas.width = canvas.clientWidth;
gl.canvas.height = canvas.clientHeight;
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
gl.clearColor(0.5, 0.5, 0.5, 1.0);
gl.enable(gl.DEPTH_TEST);
gl.clear(gl.COLOR_BUFFER_BIT);
var zoom = 0.3;
window.onresize = function () {
    gl.canvas.width = canvas.clientWidth * zoom;
    gl.canvas.height = canvas.clientHeight * zoom;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
};
var view = new point_1.Point(0, 0);
exports.view = view;
window.onscroll = function () {
    view.x = Math.round(window.pageXOffset * zoom * 0.5) * 2;
    view.y = Math.round(window.pageYOffset * zoom * 0.5) * 2;
};
