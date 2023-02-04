import { dom } from "../helper/htmlElements.js";
import { gl } from "./gl.js";
import { Pipeline } from "./pipeline.js";
import { Texture } from "./texture.js";

export class Framebuffer {
    id: WebGLFramebuffer
    texture: Texture
    constructor(width: number, height: number) {
        this.id = gl.createFramebuffer() as WebGLFramebuffer;
        if (!this.id) throw "gl.createFramebuffer() failed"
        const image = new Image();
        image.width = width;
        image.height = height;
        this.texture = new Texture(image);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
        const attachmentPoint = gl.COLOR_ATTACHMENT0;
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, this.texture.id, 0);
    }

    activate() {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
        gl.viewport(0, 0, this.texture.width, this.texture.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    disable() {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, dom.canvas.clientWidth, dom.canvas.clientHeight);

        dom.canvas.width = dom.canvas.clientWidth;
        dom.canvas.height = dom.canvas.clientHeight;
    }

    draw() {
        this.disable();

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        pipeline.draw(vao);
        gl.useProgram(pipeline.program);
        gl.bindVertexArray(vao);
        gl.uniform1i(gl.getUniformLocation(pipeline.program, "u_texture"), this.texture.no);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.bindVertexArray(null);
        gl.useProgram(null);

    }
}


const pipeline = new Pipeline('rect.vert', 'rect.frag', {
    aPos: {
        type: gl.BYTE
    },
    aTex: {
        type: gl.BYTE
    }
});

const vao = pipeline.createVertexBuffer(new Int8Array([
    -1, 1, 0, 1,
    -1, -1, 0, 0,
    1, -1, 1, 0,
    1, 1, 1, 1
])).vao;