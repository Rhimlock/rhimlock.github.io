import { dom } from "../../helper/htmlElements.js";
import { gl } from "../gl.js";
import { Program } from "../pipeline/program.js";
import { Texture } from "../texture.js";
import { VertexArray } from "../vertexarray.js";

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
        program.draw(vao, 4, {u_texture:this.texture.no});

    }
}

const program = new Program('rect.vert', 'rect.frag');

const vao = new VertexArray();
const buffer = vao.createBuffer(program,4);
buffer.addVertex({aPos : [-1, -1], aTex : [0,1]});
buffer.addVertex({aPos : [-1, 1], aTex : [0,0]});
buffer.addVertex({aPos : [1, 1], aTex : [1,0]});
buffer.addVertex({aPos : [1, -1], aTex : [1,1]});
buffer.sync();
