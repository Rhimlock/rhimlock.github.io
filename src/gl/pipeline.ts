import { gl } from "./gl.js";
import { VertexAttribute } from "./helper/interfaces.js";
import { lookupVertexAttributes } from "./helper/lookups.js";
import { createAndCompileShader, createAndLinkProgram } from "./helper/shader_functions.js";
import { SHADER_SOURCES } from "./helper/shader_sources.js";

export class Pipeline {
    program: WebGLProgram
    vertexShader: WebGLShader
    fragmentShader: WebGLShader
    vertexAttributes: { [key: string]: VertexAttribute };

    constructor(vertexShaderName: string, fragmentShaderName: string, vertexAttributes: { [key: string]: VertexAttribute }) {
        this.vertexShader = createAndCompileShader(gl.VERTEX_SHADER, SHADER_SOURCES[vertexShaderName] as string);
        this.fragmentShader = createAndCompileShader(gl.FRAGMENT_SHADER, SHADER_SOURCES[fragmentShaderName] as string);
        this.program = createAndLinkProgram(this.vertexShader, this.fragmentShader);
        this.vertexAttributes = lookupVertexAttributes(this.program, vertexAttributes);
    }

    createVertexBuffer() {
        const buffer = gl.createBuffer();
        const vao = gl.createVertexArray();
        if (buffer && vao) {
            gl.bindVertexArray(vao);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            Object.values(this.vertexAttributes).forEach(a => {
                gl.enableVertexAttribArray(a.location as number);
                gl.vertexAttribPointer(
                    a.location as number, a.size as number, a.type as number, !!a.normalize, a.stride ?? 0, a.offset ?? 0);
            });
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.bindVertexArray(null);
        }
        return { vao, buffer };
    }
}
