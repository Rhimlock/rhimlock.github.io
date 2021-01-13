import { view } from "../../helper/view.js";
import { gl } from "../gl.js";
import { Program } from "../program.js";
import { Texture } from "../texture.js";
import { VAO } from "../vao.js";
import { VBO } from "../vbo.js";
import { Drawable } from "./drawable.js";
import { Sprite } from "./sprite.js";

export class SpriteBatch implements Drawable {
  private vboPos: VBO;
  private vboTex: VBO;
  private vao: VAO;
  private tex: Texture;
  private program = new Program(vert, frag);
  sprites = [] as Sprite[];
  maxSprites: number;

  constructor(maxSprites: number, img: HTMLImageElement) {
    this.vboPos = new VBO(new Float32Array(maxSprites * Sprite.ELEMENTS_PER_POSITION), Sprite.ELEMENTS_PER_POSITION);
    this.vboTex = new VBO(new Int16Array(maxSprites * Sprite.ELEMENTS_PER_TEXTURE), Sprite.ELEMENTS_PER_TEXTURE);
    this.maxSprites = maxSprites;
    this.tex = new Texture(img);

    this.vao = new VAO([this.vboPos, this.vboTex], this.program.attributes);
    gl.uniform1i(this.program.uniforms.uTex, this.tex.no);
    gl.uniform2fv(this.program.uniforms.uTexInv, this.tex.sizeInv);
    gl.uniform1f(this.program.uniforms.uTileSize, view.tileSize);
  }

  createSprite(): Sprite {
    if (this.sprites.length === this.maxSprites) {
      throw 'batchError: could not create new Sprite';
    }
    const spr = new Sprite(this.vboPos, this.vboTex, this.sprites.length);

    spr.tx = 0;
    spr.ty = 0;
    spr.size = 16;
    this.sprites.push(spr);
    return spr;
  }

  deleteSprite(i: number) {
    const spr = this.sprites.pop();
    if (spr) {
      spr.changeIndex(i);
      this.sprites[i] = spr;
    }
  }

  draw(): void {
    this.vboPos.updateSub(this.sprites.length);
    this.vboTex.updateSub(this.sprites.length);
    gl.useProgram(this.program.id);
    gl.bindVertexArray(this.vao.id);
    gl.uniform2f(this.program.uniforms.uView, view.x, view.y);
    gl.uniform2f(
      this.program.uniforms.uResInv,
      2 / gl.drawingBufferWidth,
      2 / gl.drawingBufferHeight
    );
    gl.drawArrays(gl.POINTS, 0, this.sprites.length);
    gl.bindVertexArray(null);
  }
}

const vert = `#version 300 es
  
precision mediump float;
  in vec2 aVert;
  in vec3 aTex;
  out vec4 vTex;
  uniform vec2 uView;
  uniform vec2 uResInv;
  uniform vec2 uTexInv;
  uniform float uTileSize;
void main() {
  vec2 v = round((aVert.xy - uView.xy) * uTileSize)* uResInv ;
  v.y *= -1.0;
  v += vec2(-1.0,1.0);
  gl_Position = vec4(v, v.y, 1.0);
  gl_PointSize = aTex.z;
  vTex = vec4(aTex.xy * uTexInv,aTex.zz * uTexInv);
}`;

const frag = `#version 300 es    
  precision mediump float;
  uniform sampler2D uTex;
  
  in vec4 vTex;
  out vec4 outColor;
void main() {    
    //outColor = vec4(,0.5,1.0);
    outColor = texture(uTex,vTex.xy + gl_PointCoord * vTex.zw);
    if (outColor.a <= 0.1) discard;
}
`;
