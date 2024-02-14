import { gl } from "./gl.js";
import { Attribute } from "./shader/attribute.js";
import { VBO } from "./buffer/vbo.js";

export class VAO {
    id: WebGLVertexArrayObject | null;
    constructor(buffers: VBO[], attributes: Attribute[]) {
        this.id = gl.createVertexArray();
        gl.bindVertexArray(this.id);
        attributes.forEach((attrib, i) => {
            gl.enableVertexAttribArray(attrib.id);
            const buffer = buffers[i];
            if (buffer) {
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer.id);
                gl.vertexAttribPointer(attrib.id, attrib.size, buffer.type, false, 0, 0);
            }
        });
        gl.bindVertexArray(null);
    }
}