import { Vec2 } from "../../components/vectors.js";
import { gl } from "../gl.js";
import { Texture } from "../texture.js";

export class Framebuffer {
  id: WebGLFramebuffer;
  depthBuffer: WebGLRenderbuffer;
  tex: Texture;
  size: Vec2;

  constructor(size: Vec2) {
    this.id = gl.createFramebuffer() as WebGLFramebuffer;
    this.depthBuffer = gl.createRenderbuffer() as WebGLRenderbuffer;
    this.size = size;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
    this.tex = new Texture(null, size);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      this.tex.id,
      0,
    );
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      gl.DEPTH_COMPONENT16,
      size.x,
      size.y,
    );
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.RENDERBUFFER,
      this.depthBuffer,
    );
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  use() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
    
    gl.viewport(0, 0, this.size.x, this.size.y);
    gl.clearColor(1, .5, .5, 1);   // clear to pink
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  disable() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0, 0, 1, 1);   // clear to white
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
}
