import { gl } from "../gl.js";

export function createAndCompileShader(type: number, src: string): WebGLShader {
    const shader = gl.createShader(type);
    if (shader) {
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        const err = gl.getShaderInfoLog(shader);
        if (err) throw `compileError: ${type} - ${err} - ${src}`;
    } else {
        throw "gl.createShader() failed";
    }
    return shader as WebGLShader;
}

export function createAndLinkProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    const program = gl.createProgram();
    if (!program) {
        throw "gl.createProgram() failed";
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const err = gl.getProgramInfoLog(program);
    if (err) throw `linkingError: ${err}`;
    return program;
}

