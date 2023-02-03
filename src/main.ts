import { gl } from "./gl/gl.js";
import { Pipeline } from "./gl/pipeline.js";
import { Texture } from "./gl/texture.js";
import { dom } from "./helper/htmlElements.js";
import { Timer } from "./helper/timer.js";

const tick = () => {

}

const timer = new Timer(tick, 1);
timer.start();

const vertexAttributes = {
  aPos : {
    type: gl.BYTE
  },
  aTex : {
    type: gl.BYTE
  }
};
const p = new Pipeline("rect.vert", "rect.frag", vertexAttributes);

const v = p.createVertexBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, v.buffer);
var positions = [
  -1, -1, 0, 1,
  -1, 1, 0, 0,
  1, 1, 1, 0,
  1, -1, 1, 1
];
gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(positions), gl.STATIC_DRAW);
gl.bindBuffer(gl.ARRAY_BUFFER, null);

const ex2 = new Texture(dom.orks);

const ex = new Texture(dom.humans);
console.log(ex,ex2);

gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.useProgram(p.program);
gl.bindVertexArray(v.vao);
var primitiveType = gl.TRIANGLE_FAN;
var offset = 0;
var count = 4;
gl.drawArrays(primitiveType, offset, count);
gl.bindVertexArray(null);
gl.useProgram(null);