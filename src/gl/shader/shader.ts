import { gl } from "../gl.js";

export class Shader {
  id: WebGLShader | null
  type: number
  constructor(type: number, srcDeclaration: string, srcProcessing: string) {
    this.type = type;
    this.id = gl.createShader(type);
    if (this.id !== null) {
      let src = "";
      if (type === gl.VERTEX_SHADER) {
        // src = vert;
        src = generateVertSrc(srcDeclaration, srcProcessing);
      } else {
        src = generateFragSrc(srcDeclaration, srcProcessing);
        //src = frag;
      }
      gl.shaderSource(this.id, src);
      gl.compileShader(this.id);
      const err = gl.getShaderInfoLog(this.id);
      if (err) throw `compileError: ${type} - ${err}`;
    }
  }

}


function generateVertSrc(srcDeclaration: string, srcProcessing: string): string {
  return `#version 300 es
  
  precision mediump float;
    in vec2 aVert;
    ${srcDeclaration}
    uniform vec2 uView;
    uniform vec2 uResInv;
    uniform float uTileSize;
  void main() {
    vec2 v = round(aVert.xy - uView.xy * uTileSize )* uResInv ;
    v.y *= -1.0;
    v += vec2(-1.0,1.0);
    gl_Position = vec4(v, v.y, 1.0);
    ${srcProcessing}
  }`;
}

function generateFragSrc(srcDeclaration: string, srcProcessing: string): string {
  return `#version 300 es    
  precision mediump float;
  ${srcDeclaration}
  out vec4 outColor;
void main() {    
    outColor = vec4(1.0,0.0,1.5,1.0);
    ${srcProcessing}
}`;
}

// const vert = `#version 300 es
  
// precision mediump float;
//   in vec2 aVert;
//   in vec3 aTex;
//   in vec4 aColor;
//   out vec4 vColor;
//   out vec4 vTex;
//   uniform vec2 uView;
//   uniform vec2 uResInv;
//   uniform vec2 uTexInv;
//   uniform float uTileSize;
// void main() {
//   vec2 v = round((aVert.xy - uView.xy ) * uTileSize )* uResInv ;
//   v.y *= -1.0;
//   v += vec2(-1.0,1.0);
//   gl_Position = vec4(v, v.y, 1.0);
//   gl_PointSize = aTex.z;
//   vTex = vec4(aTex.xy * aTex.z * uTexInv,aTex.zz * uTexInv);
//   vColor = aColor / 256.0;
// }`;

// const frag = `#version 300 es    
//   precision mediump float;
//   uniform sampler2D uTex;
//   in vec4 vColor;
//   in vec4 vTex;
//   out vec4 outColor;
// void main() {    
//     //outColor = vec4(,0.5,1.0);
//     outColor = texture(uTex,vTex.xy + gl_PointCoord * vTex.zw);

//     if (outColor.a <= 0.1) discard;
//     outColor.rgb += vColor.rgb * vColor.a;
// }`;
