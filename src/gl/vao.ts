import { gl } from "./gl.js";
import { Attribute } from "./shader/attribute.js";
import { VBO } from "./vbo.js";

export class VAO {
    id: WebGLVertexArrayObject | null;
    constructor(buffers: VBO[], attributes: Attribute[]) {
        this.id = gl.createVertexArray();
        gl.bindVertexArray(this.id);
        attributes.forEach((a, i) => {
            gl.enableVertexAttribArray(a.id);
            const b = buffers[i];
            if (b) {
                gl.bindBuffer(gl.ARRAY_BUFFER, b.id);
                gl.vertexAttribPointer(a.id, a.size, b.type, false, 0, 0);
            }
        });
        gl.bindVertexArray(null);
    }

    blub(baos : BufferAttributeObject[]) {
        baos.forEach(b => {
            gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer.id);
            b.attributes.forEach(a => {
                gl.enableVertexAttribArray(a.id);
                gl.vertexAttribPointer(a.id, a.size, b.buffer.type, false, 0,0);

            });
        });
    }
}

export class BufferAttributeObject {
    buffer:VBO
    attributes:Attribute[] = []
    constructor (buffer : VBO) {
        this.buffer = buffer;
    }
}