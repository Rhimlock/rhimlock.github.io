#version 300 es
// vertex shader
in vec2 aPos;
in float aSize;
in float aPalletColor;
out float oPalletColor;
uniform vec2 uViewSizeInv;
void main() {
    gl_Position = vec4(aPos * uViewSizeInv * 2.0,0,1);
    gl_PointSize = aSize;
    oPalletColor = aPalletColor * 250.0 ;
}