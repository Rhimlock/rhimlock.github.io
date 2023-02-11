#version 300 es
// fragment shader
precision highp float;

in vec2 texCoord;
uniform sampler2D u_texture;
out vec4 outColor;

void main() {
    outColor = texture(u_texture, texCoord);
}