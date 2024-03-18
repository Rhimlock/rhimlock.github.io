import { Vec } from "../../components/vec.js";
import { gl, glsl, view } from "../gl.js";
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
    this.program.setUniform("uTileSize", view.tileSize);
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
  uniform config {
    vec2 uView;
    vec2 uResInv;
  };
  uniform float uTileSize;

void main() {
  vec2 v = round(pos.xy *8.0 - uView.xy * uTileSize )* uResInv ;
  v.y *= -1.0;
  v += vec2(-1.0,1.0);
  gl_Position = vec4(v, v.y, 1.0);
  gl_PointSize = tex.z;
  vTex = vec3(tex.xy * tex.z * uTexInv * uTileSize, tex.z  * uTexInv.x );
  vColor = color;
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
