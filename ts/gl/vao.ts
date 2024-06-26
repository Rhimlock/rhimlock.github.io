import { gl } from "./gl.js";
import { VBO } from "./buffer/vbo.js";

export class VAO {
  id: WebGLVertexArrayObject | null;
  transformFeedback?: WebGLTransformFeedback | null;

  constructor(public buffers: VBO[], maketransformFeedback?: boolean) {
    this.id = gl.createVertexArray();
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

  bind() {
    gl.bindVertexArray(this.id);
    if (this.transformFeedback) {
      gl.enable(gl.RASTERIZER_DISCARD);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, this.transformFeedback);
    }
  }

  unbind() {
    gl.bindVertexArray(null);
    if (this.transformFeedback) {
      gl.endTransformFeedback();
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
      gl.disable(gl.RASTERIZER_DISCARD);
    }
  }

  clone(): VAO {
    const buffers = this.buffers.map((vbo) => vbo.clone());
    return new VAO(buffers);
  }
}
