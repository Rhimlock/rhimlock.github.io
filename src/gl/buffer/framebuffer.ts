import { Vec2, Vec4 } from "../../components/vectors.js";
import { gl, updateViewport } from "../gl.js";
import { Texture } from "../texture.js";

export class Framebuffer {
  id: WebGLFramebuffer;
  depthBuffer: WebGLRenderbuffer | undefined;
  tex: Texture;
  size: Vec2;

  constructor(size: Vec2, depth = false) {
    this.id = gl.createFramebuffer() as WebGLFramebuffer;
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
    if (depth) {

      this.depthBuffer = gl.createRenderbuffer() as WebGLRenderbuffer;
    
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
  }

  use() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
    updateViewport(this.size,this.depthBuffer != undefined, new Vec4([1,0,0,0]));
  }

  disable() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    updateViewport();
  }
}
