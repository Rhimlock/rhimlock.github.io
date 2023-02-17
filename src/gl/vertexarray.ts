import { Buffer } from "./arraybuffer/buffer.js";
import { gl } from "./gl.js";
import { Attribute } from "./helper/interfaces.js";
import { Program } from "./pipeline/program.js";

export class VertexArray {
    id: WebGLVertexArrayObject;
    buffers: Buffer[] = []
    constructor() {
        this.id = gl.createVertexArray() as WebGLVertexArrayObject;
    }

    addBuffer(buffer: Buffer) {
        gl.bindVertexArray(this.id);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer.id);

        Object.values(buffer.definition as { [key: string]: Attribute }).forEach(a => {

            gl.enableVertexAttribArray(a.location as number);
            gl.vertexAttribPointer(
                a.location as number, a.size as number, a.type as number, !!a.normalized, a.stride ?? 0, a.offset ?? 0);
        });
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindVertexArray(null);
        this.buffers.push(buffer);
    }

    createBuffer(program: Program, maxNumberOfVertices: number, usage: number = gl.STATIC_DRAW) {
        const buffer = new Buffer(program.attributes, maxNumberOfVertices, gl.ARRAY_BUFFER, usage);
        this.addBuffer(buffer);
        return buffer;
    }

}