import { Vector } from "../../components/vectors.js";
import { view } from "../../helper/view.js";
import { gl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { Batch } from "./batch.js";

export interface Tile {
  type: Vector
}

export class TileMap extends Batch {
  private tex: Texture;
  private width: number;

  constructor(width: number, height: number, img: HTMLImageElement) {
    super(width * height, new Program(vertexShader, fragmentShader), [
      { type: gl.UNSIGNED_BYTE, normalized: false },
    ]);
    this.width = width;
    for (let i = 0; i < width * height; i++) this.createElement();
    this.tex = new Texture(img);

    gl.uniform1i(this.program.uniforms.uTex, this.tex.no);
    gl.uniform2fv(this.program.uniforms.uTexInv, this.tex.sizeInv);
    gl.uniform1f(this.program.uniforms.uTileSize, view.tileSize);
    gl.uniform1ui(this.program.uniforms.uMapSize, this.width);
  }

  getTile(x: number, y: number) {
    const tile = this.getElement(x + y * this.width) as any as Tile;
    return tile.type?.getValue(0);
  }
  setTile(x: number, y: number, value: number) {
    const tile = this.getElement(x + y * this.width);
    tile.type?.setValues([value]);
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
