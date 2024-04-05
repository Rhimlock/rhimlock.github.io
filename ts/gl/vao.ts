import { gl } from "./gl.js";
import { VBO } from "./buffer/vbo.js";

export class VAO {
  id: WebGLVertexArrayObject | null;
  transformFeedback?: WebGLTransformFeedback | null;
  buffers: VBO[];
  constructor(buffers: VBO[], maketransformFeedback?: boolean) {
    this.id = gl.createVertexArray();
    this.buffers = buffers;
    if (maketransformFeedback) {
      this.transformFeedback = gl.createTransformFeedback();
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, this.transformFeedback);
    }
    gl.bindVertexArray(this.id);
    buffers.forEach((buffer, i) => {
      gl.enableVertexAttribArray(i);
      buffer.bind();
      buffer.setVertexAttribPointer(i);
      if (this.transformFeedback)
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, i, buffer);
    });
    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
    gl.bindVertexArray(null);
  }

  clone(): VAO {
    const buffers = this.buffers.map((vbo) => vbo.clone());
    return new VAO(buffers);
  }
}
