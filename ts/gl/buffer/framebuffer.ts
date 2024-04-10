import { Vec } from "../../components/vec.js";
import { gl, VIEW } from "../gl.js";
import { Texture } from "../texture.js";

export class Framebuffer {
  id: WebGLFramebuffer;
  depthBuffer: WebGLRenderbuffer | undefined;
  tex: Texture;
  size: Vec;

  constructor(size: Vec, depth = false) {
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
      this.depthBuffer = initDepthBuffer(size);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  use() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
    VIEW.updateViewport(
      this.size,
      this.depthBuffer != undefined,
      Vec.newF(0, 0, 0, 0),
    );
  }

  static disable() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    VIEW.updateViewport();
  }
}

function initDepthBuffer(size: Vec) {
  const id = gl.createRenderbuffer() as WebGLRenderbuffer;

  gl.bindRenderbuffer(gl.RENDERBUFFER, id);
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, size.x, size.y);
  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.DEPTH_ATTACHMENT,
    gl.RENDERBUFFER,
    id,
  );
  return id;
}
