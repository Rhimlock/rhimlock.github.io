import { gl } from "./gl.js";

export const shaders = {
    light : {
        vert : WebGLShader,
        frag: WebGLShader
    },
    example : {
        vert : WebGLShader,
        frag: WebGLShader
    },

} as { [key : string ] : Shader }

for (const [key, value] of Object.entries(shaders)) {
    value.vert = compile(gl.VERTEX_SHADER,await fetch(`shaders/${key}.vert.glsl`)
    .then(result => result.text()));
    value.frag = compile(gl.FRAGMENT_SHADER,await fetch(`shaders/${key}.frag.glsl`)
    .then(result => result.text()));
}

export interface Shader {
    vert: WebGLShader,
    frag: WebGLShader
}

function compile (type: number, src: string) {
    const shader = gl.createShader(type) as WebGLShader;
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    const err = gl.getShaderInfoLog(shader);
    if (err) throw `compileError: ${type} - ${err}`;
    return shader;
  }
