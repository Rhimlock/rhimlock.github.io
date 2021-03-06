import { gl } from "./gl.js";
export class VAO {
    constructor(buffers, attributes) {
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
    blub(baos) {
        baos.forEach(b => {
            gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer.id);
            b.attributes.forEach(a => {
                gl.enableVertexAttribArray(a.id);
                gl.vertexAttribPointer(a.id, a.size, b.buffer.type, false, 0, 0);
            });
        });
    }
}
export class BufferAttributeObject {
    constructor(buffer) {
        this.attributes = [];
        this.buffer = buffer;
    }
}
//# sourceMappingURL=vao.js.map