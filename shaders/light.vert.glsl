#version 300 es
// vertex shader
in vec2 aPos;
in float aSize;
in float aPalletColor;
out float oPalletColor;
uniform vec2 uViewSizeInv;
void main() {
    gl_Position = vec4(aPos * uViewSizeInv,0,1);
    gl_PointSize = aSize + 16.0;
    oPalletColor = aPalletColor;
}