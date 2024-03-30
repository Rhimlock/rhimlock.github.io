import { Vec } from "../../components/vec.js";
import { Framebuffer } from "../buffer/framebuffer.js";
import { gl, glsl, view } from "../gl.js";
import { Program } from "../shader/program.js";
import { Drawable } from "./drawable.js";

export class Layer extends Drawable {
  fbo: Framebuffer;
  constructor(size: Vec, depth = 0) {
    super(4, new Program(vertexShader, fragmentShader));
    this.mode = gl.TRIANGLE_FAN;
    this.fbo = new Framebuffer(size, true);
    this.buffers[0]?.data.set([-1, 1, -1, -1, 1, -1, 1, 1]);
    this.buffers[1]?.data.set([0, 1, 0, 0, 1, 0, 1, 1]);
    new Array(4).fill(0).forEach((_) => this.createVertex());
    this.program.setUniform("uTex", this.fbo.tex.no);
    this.program.setUniform("uLayer", depth);
  }

  use() {
    this.fbo.use();
  }

  disable() {
    Framebuffer.disable();
  }
  updateUniforms(_progress: number): void {
    const zoom = view.getZoom();
    this.program.setUniform("zoom", [zoom.x, zoom.y]);
  }
}

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
