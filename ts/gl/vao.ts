import { gl } from "./gl.js";
import { VBO } from "./buffer/vbo.js";

export class VAO {
  id: WebGLVertexArrayObject | null;
  constructor(buffers: VBO[]) {
    this.id = gl.createVertexArray();
    gl.bindVertexArray(this.id);
    buffers.forEach((buffer, i) => {
      gl.enableVertexAttribArray(i);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer.id);
      gl.vertexAttribPointer(
        i,
        buffer.attribSize,
        buffer.type,
        buffer.normalized,
        0,
        0,
      );
      if (buffer.instanced) {
        gl.vertexAttribDivisor(i,1);
      }
    });
    gl.bindVertexArray(null);
  }
}
