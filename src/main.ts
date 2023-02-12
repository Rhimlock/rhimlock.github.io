import { FrameBuffer } from "./gl/buffer/framebuffer.js";
import { gl } from "./gl/gl.js";
import { Pipeline } from "./gl/pipeline.js";
import { Texture } from "./gl/texture.js";
import { dom } from "./helper/htmlElements.js";
import { Timer } from "./helper/timer.js";

const tick = () => {

}


const timer = new Timer(tick, 1);
timer.start();

const vertexAttributes = [{
  aPos : {
    type: gl.BYTE
  },
  aTex : {
    type: gl.BYTE
  }
}];
const p = new Pipeline("rect.vert", "rect.frag", vertexAttributes);
const v = p.createVertexBuffers(new Int8Array([
  -1, -1, 0, 1,
  -1, 1, 0, 0,
  1, 1, 1, 0,
  1, -1, 1, 1
]));

const ex2 = new Texture(dom.humans);

gl.useProgram(p.program);
gl.uniform1i( gl.getUniformLocation(p.program, "u_texture"),ex2.no);

const fb = new FrameBuffer(128,128);
fb.activate();
p.draw(v.vao);

fb.draw();