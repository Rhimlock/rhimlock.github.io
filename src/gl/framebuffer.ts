import { gl } from "./gl.js";

export class FrameBuffer {
    id : WebGLFramebuffer
    constructor() {
        this.id = gl.createFramebuffer() as WebGLFramebuffer;
    }
}