#version 300 es
precision mediump float;
precision mediump int;
uniform sampler2D tex;
out vec4 outColor;

void main() {
    outColor = texture(tex,gl_FragCoord.xy);
}
