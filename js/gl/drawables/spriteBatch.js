import { view } from "../../helper/view.js";
import { gl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { VAO } from "../vao.js";
import { VBO } from "../vbo.js";
import { Sprite } from "./sprite.js";
export class SpriteBatch {
    constructor(maxSprites, img, useColors = false) {
        this.vboColor = null;
        this.program = new Program(vertDeclaration, vertProcessing, fragDeclaration, fragProcessing);
        this.sprites = [];
        this.vboPos = new VBO(new Float32Array(maxSprites * Sprite.ELEMENTS_PER_POSITION), Sprite.ELEMENTS_PER_POSITION);
        this.vboTex = new VBO(new Int8Array(maxSprites * Sprite.ELEMENTS_PER_TEXTURE), Sprite.ELEMENTS_PER_TEXTURE);
        this.buffers = [this.vboPos, this.vboTex];
        if (useColors) {
            this.vboColor = new VBO(new Uint8Array(maxSprites * Sprite.ELEMENTS_PER_COLOR), Sprite.ELEMENTS_PER_COLOR);
            this.buffers.push(this.vboColor);
        }
        this.maxSprites = maxSprites;
        this.tex = new Texture(img);
        this.vao = new VAO(this.buffers, this.program.attributes);
        gl.uniform1i(this.program.uniforms.uTex, this.tex.no);
        gl.uniform2fv(this.program.uniforms.uTexInv, this.tex.sizeInv);
        gl.uniform1f(this.program.uniforms.uTileSize, view.tileSize);
    }
    createSprite() {
        if (this.sprites.length === this.maxSprites) {
            throw 'batchError: could not create new Sprite';
        }
        const spr = new Sprite(this.vboPos, this.vboTex, this.vboColor, this.sprites.length);
        spr.size = 2;
        spr.ty = 0;
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
    draw(progress) {
        this.buffers.forEach(b => b.updateSub(this.sprites.length));
        gl.useProgram(this.program.id);
        gl.bindVertexArray(this.vao.id);
        gl.uniform2f(this.program.uniforms.uView, view.x, view.y);
        gl.uniform2f(this.program.uniforms.uResInv, 2 / gl.drawingBufferWidth, 2 / gl.drawingBufferHeight);
        gl.uniform1f(this.program.uniforms.uProgress, progress);
        gl.drawArrays(gl.POINTS, 0, this.sprites.length);
        gl.bindVertexArray(null);
    }
}
const vertDeclaration = `
    in vec4 aTex;
    in vec4 aColor;
    out vec4 vColor;
    out vec4 vTex;
    uniform vec2 uTexInv;
`;
const vertProcessing = `
    gl_PointSize = aTex.z ;
    vTex = vec4(aTex.xy * aTex.z * uTexInv, aTex.z  * uTexInv.x, aTex.w);
    vColor = aColor / 256.0;
`;
const fragDeclaration = `
  uniform sampler2D uTex;
  in vec4 vColor;
  in vec4 vTex;
`;
const fragProcessing = `
vec2 t = (vTex.xy + gl_PointCoord) * vTex.z ;
if (vTex.w > 0.0) {
  t.x = (vTex.x - gl_PointCoord.x) * vTex.z + vTex.z;
}
  outColor = texture(uTex,t);

  if (outColor.a <= 0.1) discard;
  outColor.rgb += vColor.rgb * vColor.a;
`;
//# sourceMappingURL=spriteBatch.js.map