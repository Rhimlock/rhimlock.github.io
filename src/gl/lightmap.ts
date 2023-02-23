
import { Vertex } from "./basics/arraybuffer/vertex.js";
import { gl } from "./gl.js";
import { Program } from "./basics/pipeline/program.js";
import { VertexArray } from "./basics/arraybuffer/vertexarray.js";
import { FrameBuffer } from "./basics/framebuffer.js";

export class Lightmap extends FrameBuffer {
    vao: VertexArray
    constructor(width: number, height: number, maxLights: number) {
        super(width, height);
        this.vao = new VertexArray(program.attributes, maxLights);
    }

    render() {
        this.vao.sync();
        this.use();
        program.draw(this.vao,{ uViewSizeInv: this.sizeInv });
    }

    createLight(x: number, y: number, size: number) {
        return this.vao.addVertex({
            aPos: [x,y],
            aSize: size,
            aPalletColor: 0
        }) as Light;
    }
}

export interface Light extends Vertex {
    aPos: number[];
    aSize: number;
    aPalletColor: number
}

const program = new Program("light");
program.mode = gl.POINTS;
