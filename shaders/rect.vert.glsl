#version 300 es
// vertex shader
in lowp ivec2 aPos;
in vec2 aTex;
out vec2 texCoord;
void main() {
    gl_Position = vec4(aPos,0,1);
    texCoord =aTex;
}