import { Rect } from "../../components/rect.js";
import { Framebuffer } from "../buffer/framebuffer.js";
import { gl, glsl, view } from "../gl.js";
import { Program } from "../shader/program.js";
import { Drawable } from "./drawable.js";

let counter = 0;
export class Layer extends Drawable {
  fbo: Framebuffer;
  drawables: Drawable[]
  layerNo = -(++counter);
  constructor(drawables: Drawable[] = []) {
    super(4, new Program(vertexShader, fragmentShader));
    this.mode = gl.TRIANGLE_FAN;
    this.fbo = new Framebuffer(view.sizeFramebuffer, true);
    this.buffers[0]?.data.set(new Rect(-1, -1, 2, 2).asCoords());
    this.buffers[1]?.data.set(new Rect(0,0,1,1).asCoords());
    new Array(4).fill(0).forEach((_) => this.createVertex());
    this.drawables = drawables;

  }

  use() {
    this.fbo.use();
    this.drawables.forEach(d => {
      d.draw();
    })
  }

  static disable() {
    Framebuffer.disable();
  }
  updateUniforms(_progress: number): void {
    const zoom = view.getZoom();
    this.program.setUniform("zoom", zoom.data);
    this.program.setUniform("uTex", this.fbo.tex.no);
    this.program.setUniform("uLayer", this.layerNo);
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
  vTexPos = vec2(tex.x, tex.y);
  vec2 off = zoom - vec2(1.0, 1.0);
  off.y = -off.y;
  gl_Position = vec4(pos * zoom + off, uLayer * 0.01, 1.0);
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
in vec2 vTexPos;
  uniform sampler2D uTex;
  out vec4 outColor;

void main() {    
  outColor = texture(uTex,vTexPos);
  if (vTexPos.x <= 0.001) outColor.r = 1.0;
  }
`;
