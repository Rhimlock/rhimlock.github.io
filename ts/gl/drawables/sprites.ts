import { Vec } from "../../components/vec.js";
import { gl, glsl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { Drawable } from "./drawable.js";

export interface Sprite {
  pos: Vec;
  tex: Vec;
  color: Vec;
}

export class Sprites extends Drawable {
  private tex: Texture;

  constructor(maxSprites: number, img: HTMLImageElement) {
    super(maxSprites, new Program(vertexShader, fragmentShader), [
      { type: gl.FLOAT, normalized: false },
      { type: gl.SHORT, normalized: false },
      { type: gl.UNSIGNED_BYTE, normalized: true },
    ]);
    this.tex = new Texture(img);

    this.program.setUniform("uTex", this.tex.no);
    this.program.setUniform("uTexInv", this.tex.sizeInv);
  }

  createSprite(x = 1, y = 1): Sprite {
    const spr: Sprite = this.createVertex() as any as Sprite;

    spr.pos.x = x;
    spr.pos.y = y;
    spr.tex.z = 16;
    spr.tex.y = 0;
    spr.color.assign(255, 255, 255, 255);
    return spr;
  }
}

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 pos;
  in vec3 tex;
  in vec4 color;
  out vec4 vColor;
  out vec3 vTex;
  uniform vec2 uTexInv;
  uniform viewport {
    vec4 rect;
    float tileSize;
  };

void main() {   
    vec2 scale = tileSize * 2.0/ rect.zw;
    vec2 translate = rect.xy - vec2(1.0,1.0) + scale / 2.0;
    vec2 v = (pos - vec2(0.0, 0.5)) * scale + translate;
    gl_Position = vec4(v.x, -v.y, 0.1, 1.0);
    gl_PointSize = tex.z;
  vTex = vec3(tex.xy * tex.z * uTexInv * tileSize, tex.z  * uTexInv.x );
  vColor = color *1.1;
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
  uniform sampler2D uTex;
  in vec3 vTex;
  in vec4 vColor;
  out vec4 outColor;

void main() {    
  vec2 t = (vTex.xy + gl_PointCoord) * vTex.z ;
  outColor = texture(uTex,t);
  outColor = outColor * vColor;
  if (outColor.a <= 0.1) discard;
}
`;
