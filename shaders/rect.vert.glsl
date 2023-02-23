#version 300 es
// vertex shader
in vec2 aPos;
in vec2 aTex;
out vec2 texCoord;
uniform settings {
          vec2 viewSizeInv;
        };

void main() {
    gl_Position = vec4(aPos ,0,1);
    texCoord =aTex;
}