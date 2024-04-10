import { TypedArray } from "../../helper/typedArray.js";
import { gl } from "../gl.js";

let activeBuffers = new Map<number, WebGLBuffer | null>();

export class Buffer {
  id: WebGLBuffer | null;
  target: number;
  usage: number;

  constructor(target: number, usage: number) {
    this.id = gl.createBuffer();
    this.target = target;
    this.usage = usage;
    activeBuffers.set(target, null);
  }

  bind() {
    if (activeBuffers.get(this.target) != this.id) {
      gl.bindBuffer(this.target, this.id);
      activeBuffers.set(this.target, this.id);
    }
  }

  resize(sizeInByte: number) {
    this.bind();
    gl.bufferData(this.target, sizeInByte, this.usage);
  }

  subData(data: TypedArray, offset = 0) {
    this.bind();
    gl.bufferSubData(this.target, offset, data);
  }
}
