
import { Buffer } from "../arraybuffer/buffer.js";
import { BufferView } from "../arraybuffer/bufferview.js";
import { gl } from "../gl.js";
import { Pipeline } from "../pipeline.js";
import { FrameBuffer } from "./framebuffer.js";

export class Lightmap extends FrameBuffer {
    vao : WebGLVertexArrayObject
    buffer: Buffer
    constructor(width : number, height: number, maxLights : number) {
        super(width,height);
        const vao = pipeline.createVertexBuffers(maxLights, gl.DYNAMIC_DRAW);
        this.buffer = vao.buffers[0] as Buffer;
        this.vao = vao.id;
    }
    render() {
        this.buffer.sync();
        this.use();
        pipeline.draw(this.vao,this.buffer.views.length,{ uViewSizeInv:this.sizeInv});
        FrameBuffer.disable();

    }
    createLight(x : number, y: number, size : number) {
        const light = this.buffer.createView() as Light;
        light.aPos = [x,y];
        light.aSize = size;
        light.aPalletColor = 0;
        return light;
    }
}
interface Light extends BufferView {
    aPos: number[];
    aSize: number;
    aPalletColor : number
}

const pipeline = new Pipeline("light.vert", "light.frag",
    [{
        aPos: {
            type: gl.SHORT
        },
        aSize: {
            type: gl.UNSIGNED_BYTE
        },
        aPalletColor: {
            type: gl.UNSIGNED_BYTE
        }
    }],
    gl.POINTS
);

