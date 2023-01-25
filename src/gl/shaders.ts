import { gl } from "./gl.js";

export class ShaderPair {
    vert: WebGLShader = new WebGLShader();
    frag: WebGLShader = new WebGLShader();
}
export const shaders = {
    light : new ShaderPair(),
    rect : new ShaderPair(),
    example : new ShaderPair(),
    framebuffer: new ShaderPair(),
} as { [key : string ] : ShaderPair }

for (const [key, value] of Object.entries(shaders)) {
    value.vert = compile(gl.VERTEX_SHADER,await fetch(`shaders/${key}.vert.glsl`)
    .then(result => result.text()));
    value.frag = compile(gl.FRAGMENT_SHADER,await fetch(`shaders/${key}.frag.glsl`)
    .then(result => result.text()));
}


function compile (type: number, src: string) {
    const shader = gl.createShader(type) as WebGLShader;
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    const err = gl.getShaderInfoLog(shader);
    if (err) throw `compileError: ${type} - ${err} - ${src}`;
    return shader;
  }
