import { gl } from "./gl.js";
import { Program } from "./program.js";
import { shaders } from "./shaders.js";
import { Texture } from "./texture.js";

export class FrameBuffer {
    id: WebGLFramebuffer
    width: number
    height: number
    texture: Texture;
    program: Program;
    constructor(width: number, height: number) {
        this.id = gl.createFramebuffer() as WebGLFramebuffer;
        this.width = width;
        this.height = height;
        this.texture = new Texture(undefined, width, height)
        this.program = new Program(
            shaders.framebuffer?.vert as WebGLShader, 
            shaders.framebuffer?.frag as WebGLShader);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
        const attachmentPoint = gl.COLOR_ATTACHMENT0;
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, this.texture.id, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    use() {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
        gl.viewport(0, 0, this.width, this.height);
        gl.clearColor(1,0,0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    }

    disable() {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    draw() {
        gl.useProgram(this.program.id);
        gl.uniform1i(gl.getUniformLocation(this.program.id, "tex"), 0);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }
}