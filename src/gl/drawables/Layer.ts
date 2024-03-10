import { Vec } from "../../components/vec.js";
import { Framebuffer } from "../buffer/framebuffer.js";
import { gl, view } from "../gl.js";
import { Program } from "../shader/program.js";
import { Batch } from "./batch.js";

interface Vertex {
  pos: Vec;
  tex: Vec;
}
export class Layer extends Batch {
  fbo: Framebuffer;
  constructor(size: Vec, depth = 0) {
    super(4, new Program(vertexShader, fragmentShader));
    this.mode = gl.TRIANGLE_FAN;
    this.fbo = new Framebuffer(size, true);
    [
      [-1, 1, 0, 1],
      [-1, -1, 0, 0],
      [1, -1, 1, 0],
      [1, 1, 1, 1],
    ].forEach((coords) => {
      let v = Vec.newF(...coords);
      const vertex = this.createElement() as any as Vertex;
      vertex.pos.assign(v.data);
      vertex.tex.assign(v.data.subarray(2));
    });
    this.program.setUniform("uTex", this.fbo.tex.no);
    this.program.setUniform("uLayer", depth);
  }

  use() {
    this.fbo.use();
  }

  disable() {
    this.fbo.disable();
  }
  updateUniforms(_progress: number): void {
    const zoom = view.getZoom().multiply(window.devicePixelRatio);
    this.program.setUniform("zoom", [zoom.x, zoom.y]);
  }
}

//needed for glsl-literal plugin
const glsl = (x: any) => x as string;

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 pos;
  in vec2 tex;
  out vec2 vTexPos;
  uniform float uLayer;
  uniform vec2 zoom;
void main() {
  vTexPos = tex;
  gl_Position = vec4(pos * zoom, uLayer, 1.0);
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
in vec2 vTexPos;
  uniform sampler2D uTex;
  out vec4 outColor;

void main() {    
  outColor = texture(uTex,vTexPos);
}
`;
