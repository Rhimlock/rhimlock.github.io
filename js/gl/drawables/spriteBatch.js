import { view } from "../../helper/view.js";
import { gl } from "../gl.js";
import { Program } from "../program.js";
import { Texture } from "../texture.js";
import { VAO } from "../vao.js";
import { VBO } from "../vbo.js";
import { Sprite } from "./sprite.js";
export class SpriteBatch {
    constructor(maxSprites, img) {
        this.program = new Program(vert, frag);
        this.sprites = [];
        this.vboPos = new VBO(new Float32Array(maxSprites * Sprite.ELEMENTS_PER_POSITION), Sprite.ELEMENTS_PER_POSITION);
        this.vboTex = new VBO(new Uint8Array(maxSprites * Sprite.ELEMENTS_PER_TEXTURE), Sprite.ELEMENTS_PER_TEXTURE);
        this.vboColor = new VBO(new Uint8Array(maxSprites * Sprite.ELEMENTS_PER_COLOR), Sprite.ELEMENTS_PER_COLOR);
        this.maxSprites = maxSprites;
        this.tex = new Texture(img);
        this.vao = new VAO([this.vboPos, this.vboTex, this.vboColor], this.program.attributes);
        gl.uniform1i(this.program.uniforms.uTex, this.tex.no);
        gl.uniform2fv(this.program.uniforms.uTexInv, this.tex.sizeInv);
        gl.uniform1f(this.program.uniforms.uTileSize, view.tileSize);
    }
    createSprite() {
        if (this.sprites.length === this.maxSprites) {
            throw 'batchError: could not create new Sprite';
        }
        const spr = new Sprite(this.vboPos, this.vboTex, this.vboColor, this.sprites.length);
        spr.size = 16;
        this.sprites.push(spr);
        return spr;
    }
    deleteSprite(i) {
        const spr = this.sprites.pop();
        if (spr) {
            spr.changeIndex(i);
            this.sprites[i] = spr;
        }
    }
    draw() {
        this.vboPos.updateSub(this.sprites.length);
        this.vboTex.updateSub(this.sprites.length);
        this.vboColor.updateSub(this.sprites.length);
        gl.useProgram(this.program.id);
        gl.bindVertexArray(this.vao.id);
        gl.uniform2f(this.program.uniforms.uView, view.x, view.y);
        gl.uniform2f(this.program.uniforms.uResInv, 2 / gl.drawingBufferWidth, 2 / gl.drawingBufferHeight);
        gl.drawArrays(gl.POINTS, 0, this.sprites.length);
        gl.bindVertexArray(null);
    }
}
const vert = `#version 300 es
  
precision mediump float;
  in vec2 aVert;
  in vec3 aTex;
  in vec4 aColor;
  out vec4 vTex;
  out vec4 vColor;
  uniform vec2 uView;
  uniform vec2 uResInv;
  uniform vec2 uTexInv;
  uniform float uTileSize;
void main() {
  vec2 v = round((aVert.xy - uView.xy ) * uTileSize )* uResInv ;
  v.y *= -1.0;
  v += vec2(-1.0,1.0);
  gl_Position = vec4(v, v.y, 1.0);
  gl_PointSize = aTex.z;
  vTex = vec4(aTex.xy * aTex.z * uTexInv,aTex.zz * uTexInv);
  vColor = aColor / 256.0;
}`;
const frag = `#version 300 es    
  precision mediump float;
  uniform sampler2D uTex;
  in vec4 vColor;
  in vec4 vTex;
  out vec4 outColor;
void main() {    
    //outColor = vec4(,0.5,1.0);
    outColor = texture(uTex,vTex.xy + gl_PointCoord * vTex.zw);

    if (outColor.a <= 0.1) discard;
    outColor.rgb += vColor.rgb * vColor.a;
}
`;
//# sourceMappingURL=spriteBatch.js.map