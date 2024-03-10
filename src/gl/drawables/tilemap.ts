import { Vec } from "../../components/vec.js";
import { gl,view } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { Batch } from "./batch.js";

export interface Tile {
  texPos: Vec;
}

export class TileMap extends Batch {
  private tex: Texture;
  private width: number;

  constructor(size: Vec, img: HTMLImageElement) {
    super(size.x * size.y, new Program(vertexShader, fragmentShader), [
      { type: gl.UNSIGNED_BYTE, normalized: false },
    ]);
    this.width = size.x;
    for (let i = 0; i < size.x * size.y; i++) this.createElement();
    this.tex = new Texture(img);

    this.program.setUniform("uTex", this.tex.no);
    this.program.setUniform("uTexInv", this.tex.sizeInv);
    this.program.setUniform("uTileSize", view.tileSize);
    this.program.setUniform("uMapSize", this.width);
  }
  draw() {
    this.program.setUniform("green",new Float32Array([Math.random()]));
    this.program.setUniform("red",new Float32Array([Math.random()]));
    super.draw(0);

  }

  getTile(pos: Vec) {
    const tile = this.getElement(pos.x + pos.y * this.width) as any as Tile;
    return tile;
  }
  setTile(pos:Vec, tex: Vec){
    const tile = this.getTile(pos);
    tile.texPos?.assign(tex.data);
  }
}

//needed for glsl-literal plugin
const glsl = (x: any) => x as string;

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 texPos;
  uniform vec2 uTexInv;
  uniform config {
    vec2 uView;
    vec2 uResInv;
  };
  uniform float uTileSize;
  uniform uint uMapSize;
  out vec2 vTex;
  out float tileSizeInv;

void main() {    
    uint y = uint(gl_VertexID) / uMapSize ;
    uint x = uint(gl_VertexID ) - uMapSize * y;
    vec2 v = round((vec2(x,y)) * uTileSize - uView.xy)* uResInv ;
    v.y *= -1.0;
    v += vec2(-1.0,1.0);
    gl_Position = vec4(v, 0.99999, 1.0);
    gl_PointSize = uTileSize ;
    vTex = texPos * uTileSize * uTexInv.x;
    tileSizeInv = uTexInv.x * uTileSize;
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
    uniform setting {
      float red;
    };
    uniform setting2 {
      float green;
    };
    uniform sampler2D uTex;
    in vec2 vTex;
    in float tileSizeInv;
    out vec4 outColor;

void main() {    
    outColor = texture(uTex, vTex + gl_PointCoord * tileSizeInv);
    outColor.r *= red;
    outColor.g *= green;
}
`;
