#version 300 es
// vertex shader
in vec2 aPos;
in int aSize;
in float aPalletColor;
out float oPalletColor;
uniform vec2 uViewSizeInv;
void main() {
    gl_Position = vec4(aPos * uViewSizeInv * 2.0,0,1);
    gl_PointSize = float(aSize);
    oPalletColor = aPalletColor * 250.0 ;
}