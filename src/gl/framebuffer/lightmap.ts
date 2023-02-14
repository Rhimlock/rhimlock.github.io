
import { Buffer } from "../arraybuffer/buffer.js";
import { BufferView } from "../arraybuffer/bufferview.js";
import { gl } from "../gl.js";
import { Pipeline } from "../pipeline.js";

export class Lightmap extends Buffer {

}
export class Light extends BufferView {
    aPos: number[];
    aSize: number;

    constructor(x: number, y: number, size: number) {
        const view = buffer.createView();
        super(buffer.definition, view._data);
        this.aPos = [x, y];
        this.aSize = size;
    }

    static draw() {
        buffer.sync();
        pipeline.draw(vao.id,buffer.views.length);
    }
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

const vao = pipeline.createVertexBuffers(5, gl.DYNAMIC_DRAW);
const buffer = vao.buffers[0] as Buffer;