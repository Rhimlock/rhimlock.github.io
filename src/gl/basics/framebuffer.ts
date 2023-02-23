import { gl } from "../gl.js";
import { Program } from "./pipeline/program.js";
import { Texture } from "./texture.js";
import { VertexArray } from "./arraybuffer/vertexarray.js";

export class FrameBuffer {
    id: WebGLFramebuffer
    texture: Texture
    sizeInv: number[]
    constructor(width: number, height: number) {
        this.sizeInv = [1 / width, 1 / height];
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

        if (program.uniformBlocks.settings) program.uniformBlocks.settings.uniforms.viewSizeInv = [1 / this.texture.width, 1 / this.texture.height];
    }

    static disable() {
        const canvas = gl.canvas as HTMLCanvasElement;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        if (program.uniformBlocks.settings) program.uniformBlocks.settings.uniforms.viewSizeInv = [1 / canvas.width, 1 / canvas.height];
    }

    draw() {
        program.draw(vao, { u_texture: this.texture.no });
    }
}

const program = new Program('rect');

const vao = new VertexArray(program.attributes,4);
vao.addVertex({ aPos: [-1, 1], aTex: [0, 1] });
vao.addVertex({ aPos: [-1, -1], aTex: [0, 0] });
vao.addVertex({ aPos: [1, -1], aTex: [1, 0] });
vao.addVertex({ aPos: [1, 1], aTex: [1, 1] });
vao.sync();
