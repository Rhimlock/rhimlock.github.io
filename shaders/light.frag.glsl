#version 300 es
// fragment shader
precision highp float;
out vec4 outColor;

void main() {
    vec2 center = vec2(0.5,0.5);
    float dist = 0.5 - distance( gl_PointCoord, center);
    dist = dist * 4.0;
    outColor = vec4(gl_PointCoord,0, dist);
}