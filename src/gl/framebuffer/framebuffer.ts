import { dom } from "../../helper/htmlElements.js";
import { gl } from "../gl.js";
import { Pipeline } from "../pipeline.js";
import { Texture } from "../texture.js";

export class FrameBuffer {
    id: WebGLFramebuffer
    texture: Texture
    sizeInv : number[]
    constructor(width: number, height: number) {
        this.sizeInv = [1/width, 1/height];
        this.id = gl.createFramebuffer() as WebGLFramebuffer;
        if (!this.id) throw "gl.createFramebuffer() failed"
        const image = new Image(width, height);
        this.texture = new Texture(image);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
        const attachmentPoint = gl.COLOR_ATTACHMENT0;
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, this.texture.id, 0);
    }

    use() {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.id);
        gl.viewport(0, 0, this.texture.width, this.texture.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    static disable() {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, dom.canvas.clientWidth, dom.canvas.clientHeight);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        dom.canvas.width = dom.canvas.clientWidth;
        dom.canvas.height = dom.canvas.clientHeight;
    }

    draw() {
        pipeline.draw(vao.id, 4, {u_texture:this.texture.no});

    }
}


const pipeline = new Pipeline('rect.vert', 'rect.frag', [{
    aPos: {
        type: gl.BYTE
    },
    aTex: {
        type: gl.BYTE
    }
}]);

const vao = pipeline.createVertexBuffers(new Int8Array([
    -1, -1, 0, 1,
    -1, 1, 0, 0,
    1, 1, 1, 0,
    1, -1, 1, 1
]));