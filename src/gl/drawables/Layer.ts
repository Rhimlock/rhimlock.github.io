import { Vec2, Vec4 } from "../../components/vectors.js";
import { Framebuffer } from "../buffer/framebuffer.js";
import { gl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Batch } from "./batch.js";

interface Vertex {
  pos: Vec2;
  tex: Vec2;
}
export class Layer extends Batch {
  fbo: Framebuffer;
  constructor(size: Vec2) {
    super(4, new Program(vertexShader, fragmentShader));
    this.mode = gl.TRIANGLE_FAN;
    this.fbo = new Framebuffer(size);
    [
      [-1, 1, 0, 1],
      [-1, -1, 0, 0],
      [1, -1, 1, 0],
      [1, 1, 1, 1],
    ].forEach((coords) => {
      let v = new Vec4(coords);
      const vertex = this.createElement() as any as Vertex;
      vertex.pos.setValues([v.x, v.y]);
      vertex.tex.setValues([v.z, v.w]);
    });
    gl.uniform1i(this.program.uniforms.uTex, this.fbo.tex.no);
  }

  use() {
    this.fbo.use();
  }

  disable() {
    this.fbo.disable();
  }
}

//needed for glsl-literal plugin
const glsl = (x: any) => x as string;

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 pos;
  in vec2 tex;
  out vec2 vTexPos;

void main() {
  vTexPos = tex;
  gl_Position = vec4(pos, 0.0, 1.0);
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
in vec2 vTexPos;
  uniform sampler2D uTex;
  out vec4 outColor;

void main() {    
  outColor = texture(uTex,vTexPos);
   // outColor.ba = vec2(1.0,1.0);
  //if (outColor.a <= 0.1) discard;
}
`;
