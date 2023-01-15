

import { gl } from "./gl/gl.js";
import { Program } from "./gl/program.js";
import { Timer } from "./helper/timer.js";

const arr = new Uint8Array(1024*1024);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * 8);
}
const tick = () => {
    gl.clear(gl.COLOR_BUFFER_BIT);
}

const timer = new Timer(tick,1);
timer.start();


const vertexShaderSource_normal = `#version 300 es
layout(location = 0) in vec3 a_Position;
// THIS IS CALLED A UNIFORM BLOCK
uniform Settings {
  float u_PointSize;
  vec3 u_Color;
};
out vec4 color;
void main(void) {
  color = vec4(u_Color, 1.0);
  gl_PointSize = u_PointSize;
  gl_Position = vec4(a_Position, 1.0);
}
`;

const vertexShaderSource_inverted = `#version 300 es
layout(location = 0) in vec3 a_Position;
uniform float u_speed;
uniform Settings {
  float u_PointSize;
  vec3 u_Color;
};
out vec4 color;
void main(void) {
  color = vec4(
    1.0 - u_Color.r, 
    1.0 - u_Color.g, 
    1.0 - u_Color.b, 
    1.0
  );
  gl_PointSize = u_PointSize;
  gl_Position = vec4(a_Position, u_speed);
}
`;

const fragmentShaderSource = `#version 300 es
precision mediump float;
in vec4 color;
out vec4 finalColor;
void main(void) {
  finalColor = color;
}
`;

const prog = new Program(vertexShaderSource_inverted, fragmentShaderSource);
const prog2 = new Program(vertexShaderSource_normal, fragmentShaderSource);
console.log(prog);
console.log(prog2);