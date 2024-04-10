import { Vec } from "../../components/vec.js";
import { gl, glsl, VIEW } from "../gl.js";
import { Program } from "../shader/program.js";
import { Texture } from "../texture.js";
import { Drawable } from "./drawable.js";

export interface Tile {
  texPos: Vec;
}

export class TileMap extends Drawable {
  private tex: Texture;
  private width: number;

  constructor(size: Vec, img: HTMLImageElement) {
    super(size.x * size.y, new Program(vertexShader, fragmentShader), {
      texPos: { type: gl.UNSIGNED_BYTE },
    });
    this.width = size.x;
    for (let i = 0; i < size.x * size.y; i++) this.createVertex();
    this.tex = new Texture(img);

    this.program.setUniform("uTex", this.tex.no);
    this.program.setUniform("uTexInv", this.tex.sizeInv);
    this.program.setUniform("uTileSize", VIEW.tileSize);
    this.program.setUniform("uMapSize", this.width);
  }

  getTile(pos: Vec) {
    const tile = this.getVertex(pos.x + pos.y * this.width) as any as Tile;
    return tile;
  }
  setTile(pos: Vec, tex: Vec) {
    const tile = this.getTile(pos);
    tile.texPos?.assign(...tex.data);
  }
}

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 texPos;
  uniform vec2 uTexInv;

  uniform uint uMapSize;
  out vec2 vTex;
  out float tileSizeInv;

  uniform viewport {
    vec4 rect;
    float tileSize;
  };

  vec2 getCoord(uint id) {
    uint y = id / uMapSize ;
    uint x = id - uMapSize * y;
    return vec2(x,y);
  }

  vec2 convertPos(vec2 pos) {
    vec2 scale = tileSize * 2.0/ rect.zw;
    vec2 translate = -rect.xy * scale - vec2(1.0,1.0) + scale / 2.0;
    return pos * scale + translate;
  }

  void main() {   
    vec2 v = convertPos(getCoord(uint(gl_VertexID)));
    gl_Position = vec4(v.x, -v.y, 0.1, 1.0);
    gl_PointSize = tileSize ;
    vTex = texPos * tileSize * uTexInv.x;
    tileSizeInv = uTexInv.x * tileSize;
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
