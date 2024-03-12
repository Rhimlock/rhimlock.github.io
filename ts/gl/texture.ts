import { Vec } from "../components/vec.js";
import { gl } from "./gl.js";
let counter = 0;
let bound: WebGLTexture | null = null;
export class Texture {
  id: WebGLTexture | null;
  no: number = counter++;
  sizeInv = new Float32Array([1, 1]);

  constructor(img: HTMLImageElement | null, size: Vec | undefined = undefined) {
    this.id = gl.createTexture();
    if (gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS <= this.no)
      throw "MAX_COMBINED_TEXTURE_IMAGE_UNITS exceeded";
    gl.activeTexture(gl.TEXTURE0 + this.no);
    gl.bindTexture(gl.TEXTURE_2D, this.id);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (img) {
      this.loadImg(img);
    }
    if (size) this.resize(size);
  }

  bind() {
    if (bound != this.id) {
      gl.bindTexture(gl.TEXTURE_2D, this.id);
      bound = this.id;
    }
  }

  loadImg(img: HTMLImageElement) {
    this.bind();
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    this.sizeInv = new Float32Array([1 / img.width, 1 / img.height]);
  }

  resize(size: Vec) {
    this.bind();
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      size.x,
      size.y,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null,
    );
    const s = size as Vec;
    this.sizeInv = new Float32Array([1 / s.x, 1 / s.y]);
  }
}
