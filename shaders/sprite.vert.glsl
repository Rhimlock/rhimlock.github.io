#version 300 es
// vertex shader
in vec2 aPos;
in vec2 aTexPos;
in float aSize;
out vec2 oTexPos;
out float oSize;

uniform vec2 uViewPortSizeInv;


void main() {
    gl_Position = vec4(aPos * uViewPortSizeInv,0,1);
    gl_PointSize = aSize ;
    oTexPos = aTexPos;
    oSize = aSize;
}