
import { Buffer } from "../arraybuffer/buffer.js";
import { Vertex } from "../arraybuffer/vertex.js";
import { gl } from "../gl.js";
import { Program } from "../pipeline/program.js";
import { VertexArray } from "../vertexarray.js";
import { FrameBuffer } from "./framebuffer.js";

export class Lightmap extends FrameBuffer {
    vao: VertexArray
    buffer: Buffer
    constructor(width: number, height: number, maxLights: number) {
        super(width, height);
        this.vao = new VertexArray();
        this.buffer = this.vao.createBuffer(program, maxLights);
    }

    render() {
        this.buffer.sync();
        this.use();
        program.draw(this.vao, this.buffer.vertices.length, { uViewSizeInv: this.sizeInv });
        FrameBuffer.disable();
    }

    createLight(x: number, y: number, size: number) {
        const light = this.buffer.addVertex() as Light;
        light.aPos = [x, y];
        light.aSize = size;
        light.aPalletColor = 0;
        return light;
    }
}

interface Light extends Vertex {
    aPos: number[];
    aSize: number;
    aPalletColor: number
}

const program = new Program("light");
program.mode = gl.POINTS;
