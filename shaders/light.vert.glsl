#version 300 es
// vertex shader
in vec2 aPos;
in float aSize;
void main() {
    gl_Position = vec4(aPos.xy /128.0,0,1);
    gl_PointSize = aSize + 16.0;
}