import { gl } from "../../gl.js";
import { Buffer } from "./buffer.js";
import { Attribute } from "./vertex.js";
import { Program } from "../pipeline/program.js";

export class VertexArray {
    id: WebGLVertexArrayObject;
    buffers: Buffer[] = []
    instancedBuffer: Buffer | undefined = undefined
    instanceDivisor = 0

    constructor() {
        this.id = gl.createVertexArray() as WebGLVertexArrayObject;
    }

    addBuffer(buffer: Buffer, instanceDivisor = 0) {
        gl.bindVertexArray(this.id);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer.id);

        Object.values(buffer.definition as { [key: string]: Attribute }).forEach(a => {

            gl.enableVertexAttribArray(a.location as number);
            if (a.useIPointer) {
                gl.vertexAttribIPointer(
                    a.location as number, a.size as number, a.type as number, a.stride ?? 0, a.offset ?? 0);
            } else {
                gl.vertexAttribPointer(
                    a.location as number, a.size as number, a.type as number, !!a.normalized, a.stride ?? 0, a.offset ?? 0);
            }

            if (instanceDivisor) {
                gl.vertexAttribDivisor(a.location as number, instanceDivisor)
                this.instancedBuffer = buffer;
                this.instanceDivisor = instanceDivisor
            }
        });
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindVertexArray(null);
        this.buffers.push(buffer);
    }

    createBuffer(program: Program, maxNumberOfVertices: number, usage: number = gl.STATIC_DRAW, instanceDivisor = 0) {
        const buffer = new Buffer(program.attributes, maxNumberOfVertices, gl.ARRAY_BUFFER, usage);
        this.addBuffer(buffer, instanceDivisor);
        return buffer;
    }

}