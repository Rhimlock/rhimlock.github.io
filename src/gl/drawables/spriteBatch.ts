import { Point } from "../../helper/point.js";
import { view } from "../../helper/view.js";
import { gl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { VAO } from "../vao.js";
import { VBO } from "../buffer/vbo.js";
import { Sprite } from "./sprite.js";
import { Vec2, Vec3, Vec4 } from "../../components/vectors.js";

export class SpriteBatch {
  private buffers: VBO[];
  private vboPos: VBO;
  private vboTex: VBO;
  private vboColor: VBO | null = null;
  private vao: VAO;
  private tex: Texture;
  private program = new Program(vertexShader, fragmentShader);
  sprites = [] as Sprite[];
  maxSprites: number;

  constructor(maxSprites: number, img: HTMLImageElement, useColors: boolean = false) {

    this.vboPos = new VBO(gl.FLOAT,maxSprites,Sprite.ELEMENTS_PER_POSITION);
    this.vboTex = new VBO(gl.BYTE,maxSprites,Sprite.ELEMENTS_PER_TEXTURE);
    this.buffers = [this.vboPos, this.vboTex];
    if (useColors) {
      this.vboColor = new VBO(gl.UNSIGNED_BYTE, maxSprites, Sprite.ELEMENTS_PER_COLOR);
      this.buffers.push(this.vboColor);
    }
    this.maxSprites = maxSprites;
    this.tex = new Texture(img);

    this.vao = new VAO(this.buffers, this.program.attributes);
    gl.uniform1i(this.program.uniforms.uTex, this.tex.no);
    gl.uniform2fv(this.program.uniforms.uTexInv, this.tex.sizeInv);
    gl.uniform1f(this.program.uniforms.uTileSize, view.tileSize);
  }

  createSprite(p: Point = new Point(1, 1)): Sprite {
    p = new Point(1,1);
    if (this.sprites.length >= this.maxSprites) {
      throw 'batchError: could not create new Sprite';
    }
    const i = this.sprites.length;
    const spr = new Sprite(new Vec2(this.vboPos.getSubArray(i)),
    new Vec3(this.vboTex.getSubArray(i)),
    this.vboColor ? new Vec4(this.vboColor.getSubArray(i)) : null);
    spr.pos.x = p.x;
    spr.pos.y = p.y;
    spr.tex.z = 16;
    spr.tex.y = 0;
    this.sprites.push(spr);
    return spr;
  }

  deleteSprite(i: number) {
    const spr = this.sprites.pop();
    if (spr) {
      //spr.changeIndex(i);
      this.sprites[i] = spr;
    }
  }

  draw(progress: number): void {
    this.buffers.forEach(b => b.updateSub(this.sprites.length));
    gl.useProgram(this.program.id);
    gl.bindVertexArray(this.vao.id);
    gl.uniform2f(this.program.uniforms.uView, view.x, view.y);
    gl.uniform2f(
      this.program.uniforms.uResInv,
      2 / gl.drawingBufferWidth,
      2 / gl.drawingBufferHeight
    );
    gl.uniform1f(this.program.uniforms.uProgress, progress);
    gl.drawArrays(gl.POINTS, 0, this.sprites.length);
    gl.bindVertexArray(null);
  }
}

//needed for glsl-literal plugin
const glsl = (x: any) => x as string;

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 aVert;
  in vec3 aTex;
  in vec4 aColor;
  out vec4 vColor;
  out vec3 vTex;
  uniform vec2 uTexInv;
  uniform vec2 uView;
  uniform vec2 uResInv;
  uniform float uTileSize;

void main() {
  vec2 v = round(aVert.xy *8.0 - uView.xy * uTileSize )* uResInv ;
  v.y *= -1.0;
  v += vec2(-1.0,1.0);
  gl_Position = vec4(v, v.y, 1.0);
  gl_PointSize = aTex.z;
  vTex = vec3(aTex.xy * aTex.z * uTexInv * uTileSize, aTex.z  * uTexInv.x );
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