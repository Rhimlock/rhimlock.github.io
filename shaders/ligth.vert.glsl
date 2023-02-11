#version 300 es
// vertex shader
in vec2 aPos;
in int aSize;
in int aColor;
out vec4 outColor;
void main() {
    gl_Position = vec4(aPos.xy / 128.0,0,1);
    outColor = vec4(1.0,1.0,1.0,1.0);
}