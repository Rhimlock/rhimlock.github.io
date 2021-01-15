export function createVertexShader(additionalDeclaractions, additionalFunction) {
    return `#version 300 es
  
  precision mediump float;
    in vec2 aVert;
    in vec3 aTex;
    in vec4 aColor;
    ${tagAdditionalDeclara}
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
    ${additionalFunction}
  }`;
}
createFragmentShader(additional);
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
//# sourceMappingURL=baseShader.js.map