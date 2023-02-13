
import { Buffer } from "./buffer/buffer.js";
import { BufferView } from "./buffer/bufferview.js";
import { gl } from "./gl.js";
import { Pipeline } from "./pipeline.js";

export class Light extends BufferView {
    [x: string]: any;


    constructor(x: number, y: number, size: number) {
        const view = buffer.createView();
        super(buffer.definition, view._data);
        this.aPos = [x, y];
        this.aSize = size;
    }
    static draw() {
        buffer.sync();
        gl.useProgram(pipeline.program);
        gl.bindVertexArray(vao.id);
        gl.drawArrays(gl.POINTS, 0, buffer.views.length);
        gl.bindVertexArray(null);
        gl.useProgram(null);
        
    }
}

const pipeline = new Pipeline("light.vert", "light.frag",
    [{
        aPos: {
            type: gl.FLOAT
        },
        aSize: {
            type: gl.FLOAT
        }
    }]
);

const vao = pipeline.createVertexBuffers(5, gl.DYNAMIC_DRAW);
const buffer = vao.buffers[0] as Buffer;