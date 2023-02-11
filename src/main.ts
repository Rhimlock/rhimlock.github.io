import { FrameBuffer } from "./gl/framebuffer.js";
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

const ex2 = new Texture(dom.humans);

gl.useProgram(p.program);
// p.uniforms.u_texture.value = ex2.no;
gl.uniform1i( gl.getUniformLocation(p.program, "u_texture"),ex2.no);

const fb = new FrameBuffer(128,128);
fb.activate();
p.draw(v.vao);

fb.draw();
// fb.disable();