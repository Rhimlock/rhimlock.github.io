import { gl } from "../gl.js";

export class Shader {
  id: WebGLShader | null;
  type: number;
  constructor(type: number, src: string = "") {
    this.type = type;
    this.id = gl.createShader(type);
    if (this.id !== null) {
      if (src === "") {
        src =
          type === gl.VERTEX_SHADER ? simpleVertexShader : simpleFragmentShader;
      }
      gl.shaderSource(this.id, src);
      gl.compileShader(this.id);
      const err = gl.getShaderInfoLog(this.id);
      if (err) throw `compileError: ${type} - ${err}`;
    }
  }
}

const simpleVertexShader = `#version 300 es  
precision mediump float;
  in vec2 aVert;
  uniform vec2 uView;
  uniform vec2 uResInv;
  uniform float uTileSize;

void main() {
  vec2 v = round(aVert.xy - uView.xy * uTileSize )* uResInv ;
  v.y *= -1.0;
  v += vec2(-1.0,1.0);
  gl_Position = vec4(v, v.y, 1.0);
}
`;

const simpleFragmentShader = `#version 300 es    
precision mediump float;
out vec4 outColor;

void main() {    
  outColor = vec4(1.0,0.0,1.5,1.0);
}
`;
