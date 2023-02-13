import { Buffer } from "./buffer/buffer.js";
import { gl } from "./gl.js";
import { VertexAttribute } from "./helper/interfaces.js";
import { lookupUniforms, lookupVertexAttributes } from "./helper/lookups.js";
import { createAndCompileShader, createAndLinkProgram } from "./helper/shader_functions.js";
import { SHADER_SOURCES } from "./helper/shader_sources.js";

export class Pipeline {
    program: WebGLProgram
    vertexShader: WebGLShader
    fragmentShader: WebGLShader
    vertexAttributes: { [key: string]: VertexAttribute }[]
    uniforms: { [key: string]: any } = {};

    constructor(vertexShaderName: string, fragmentShaderName: string, vertexAttributes: { [key: string]: VertexAttribute }[]) {
        this.vertexShader = createAndCompileShader(gl.VERTEX_SHADER, SHADER_SOURCES[vertexShaderName] as string);
        this.fragmentShader = createAndCompileShader(gl.FRAGMENT_SHADER, SHADER_SOURCES[fragmentShaderName] as string);
        this.program = createAndLinkProgram(this.vertexShader, this.fragmentShader);
        this.vertexAttributes = lookupVertexAttributes(this.program, vertexAttributes);
        this.uniforms = lookupUniforms(this.program);
    }

    createVertexBuffers(data: ArrayBufferView | number, usage: number = gl.STATIC_DRAW) {
        const buffers = this.vertexAttributes.map(attribs => new Buffer(attribs, data, gl.ARRAY_BUFFER, usage));

        const vao = gl.createVertexArray();
        if (vao) {
            gl.bindVertexArray(vao);
            buffers.forEach((buffer) => {

                gl.bindBuffer(gl.ARRAY_BUFFER, buffer.id);

                Object.values(buffer.definition as { [key: string]: VertexAttribute } ).forEach(a => {
                    
                gl.enableVertexAttribArray(a.location as number);
                    gl.vertexAttribPointer(
                        a.location as number, a.size as number, a.type as number, !!a.normalize, a.stride ?? 0, a.offset ?? 0);
                });
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
            })
            gl.bindVertexArray(null);
        }
        return { id: vao as WebGLVertexArrayObject, buffers: buffers as WebGLBuffer[] };
    }

    draw(vao: WebGLVertexArrayObject) {
        gl.useProgram(this.program);
        gl.bindVertexArray(vao);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.bindVertexArray(null);
        gl.useProgram(null);
    }
}
