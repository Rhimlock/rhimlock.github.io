#version 300 es
// fragment shader
precision highp float;

in vec2 oTexPos;
in float oSize;
uniform sampler2D u_texture;

uniform vec2 uTexSizeInv;
out vec4 outColor;

void main() {
    vec2 coord = (oTexPos + gl_PointCoord * oSize) * uTexSizeInv;
    outColor = texture(u_texture,coord);
}