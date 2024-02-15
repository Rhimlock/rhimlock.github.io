import { view } from "../../helper/view.js";
import { gl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { Sprite } from "./sprite.js";
import { Batch } from "./batch.js";

export class SpriteBatch extends Batch {

  private tex: Texture;

  constructor(maxSprites: number, img: HTMLImageElement) {

    super(maxSprites,new Program(vertexShader, fragmentShader));
    this.tex = new Texture(img);

    gl.uniform1i(this.program.uniforms.uTex, this.tex.no);
    gl.uniform2fv(this.program.uniforms.uTexInv, this.tex.sizeInv);
    gl.uniform1f(this.program.uniforms.uTileSize, view.tileSize);
  }

  createSprite(x = 1, y = 1): Sprite {
    const spr : Sprite = this.createElement();

    spr.pos.x = x;
    spr.pos.y = y;
    spr.tex.z = 16;
    spr.tex.y = 0;
    return spr;
  }


}

//needed for glsl-literal plugin
const glsl = (x: any) => x as string;

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 pos;
  in vec3 tex;
  in vec4 aColor;
  out vec4 vColor;
  out vec3 vTex;
  uniform vec2 uTexInv;
  uniform vec2 uView;
  uniform vec2 uResInv;
  uniform float uTileSize;

void main() {
  vec2 v = round(pos.xy *8.0 - uView.xy * uTileSize )* uResInv ;
  v.y *= -1.0;
  v += vec2(-1.0,1.0);
  gl_Position = vec4(v, v.y, 1.0);
  gl_PointSize = tex.z;
  vTex = vec3(tex.xy * tex.z * uTexInv * uTileSize, tex.z  * uTexInv.x );
  vColor = aColor / 256.0;
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
  uniform sampler2D uTex;
  in vec4 vColor;
  in vec3 vTex;
  out vec4 outColor;

void main() {    
  vec2 t = (vTex.xy + gl_PointCoord) * vTex.z ;
  outColor = texture(uTex,t);

  if (outColor.a <= 0.1) discard;
  outColor.rgb += vColor.rgb * vColor.a;
}
`;