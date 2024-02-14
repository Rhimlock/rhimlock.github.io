import { TypedArray } from "../../helper/typedArray.js";
import { view } from "../../helper/view.js";
import { Vec2 } from "../../interfaces/vec2.js";
import { gl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { VAO } from "../vao.js";
import { VBO } from "../buffer/vbo.js";

export class TileMap {
    private buffer: VBO;
    private vao: VAO;
    private tex: Texture;
    private program = new Program(vertexShader, fragmentShader);

    constructor(array: TypedArray, size: Vec2, img: HTMLImageElement) {
        this.buffer = new VBO(array, 1);
        this.tex = new Texture(img);

        this.vao = new VAO([this.buffer], this.program.attributes);
        gl.uniform1i(this.program.uniforms.uTex, this.tex.no);
        gl.uniform2fv(this.program.uniforms.uTexInv, this.tex.sizeInv);
        gl.uniform1f(this.program.uniforms.uTileSize, view.tileSize);
        gl.uniform1ui(this.program.uniforms.uMapSize, size.x);
    }

    draw(): void {
        this.buffer.update();
        gl.useProgram(this.program.id);
        gl.bindVertexArray(this.vao.id);
        gl.uniform2f(this.program.uniforms.uView, view.x, view.y);
        gl.uniform2f(
            this.program.uniforms.uResInv,
            2 / gl.drawingBufferWidth,
            2 / gl.drawingBufferHeight
        );
        gl.drawArrays(gl.POINTS, 0, (this.buffer.data as TypedArray).length);
        gl.bindVertexArray(null);
    }
}

//needed for glsl-literal plugin
const glsl = (x: any) => x as string;

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in float type;
  uniform vec2 uTexInv;
  uniform vec2 uView;
  uniform vec2 uResInv;
  uniform float uTileSize;
  uniform uint uMapSize;
  out vec2 vTex;
  out float tileSizeInv;

void main() {    
    uint y = uint(gl_VertexID) / uMapSize;
    uint x = uint(gl_VertexID ) - uMapSize * y;
    vec2 v = round((vec2(x,y) - uView.xy) * uTileSize)* uResInv ;
    v.y *= -1.0;
    v += vec2(-1.0,1.0);
    gl_Position = vec4(v, 0.99999, 1.0);
    gl_PointSize = uTileSize ;
    vTex.x = type * uTileSize * uTexInv.x;
    tileSizeInv = uTexInv.x * uTileSize;
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
    uniform sampler2D uTex;
    in vec2 vTex;
    in float tileSizeInv;
    out vec4 outColor;

void main() {    
    outColor = texture(uTex, vTex + gl_PointCoord * tileSizeInv);
}
`;