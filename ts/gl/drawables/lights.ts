import { Vec } from "../../components/vec.js";
import { glsl } from "../gl.js";
import { Program } from "../shader/program.js";
import { Drawable } from "./drawable.js";

interface Light {
  pos: Vec;
  radius: Vec;
}
export class Lights extends Drawable {
  lights: Light[] = [];
  constructor(maxLights: number) {
    super(maxLights, new Program(vertexShader, fragmentShader));
  }

  createLight() {
    const light = this.createVertex() as any as Light;
    light.radius.x = 10;
    light.pos.assign(10, 10);
    return light;
  }
}

const vertexShader = glsl`#version 300 es  
precision mediump float;
  in vec2 pos;
  in float radius;
  in vec4 color;
  uniform config {
    vec2 uView;
    vec2 uResInv;
  };
  uniform float uTileSize;

void main() {
  vec2 v = round(pos.xy * 8.0 - uView.xy * uTileSize )* uResInv ;
  v.y *= -1.0;
  v += vec2(-1.0,1.0);
  gl_Position = vec4(v, v.y, 1.0);
  gl_PointSize = radius;
}
`;

const fragmentShader = glsl`#version 300 es    
precision mediump float;
  out vec4 outColor;

void main() {    
    vec2 dir = (vec2(.5,.5) - gl_PointCoord) * 2.0;
    float l = length(dir);
    if (l>1.0) discard;
    outColor = vec4(gl_PointCoord,1.0-l,1.0);
}
`;
