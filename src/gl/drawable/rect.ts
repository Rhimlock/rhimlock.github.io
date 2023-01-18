import { Buffer } from "../buffer.js";
import { gl } from "../gl.js";
import { Program } from "../program.js";

export class Rect {
    program: Program
    buffer: Buffer
    vao: WebGLVertexArrayObject
    x = 0
    y = 0
    size = 1
    constructor() {
        this.program = new Program(srcVertexShader, srcFragmentShader);
        this.buffer = new Buffer(1);
        this.vao = this.initVao();
    }

    initVao(): WebGLVertexArrayObject {
        const vao = gl.createVertexArray() as WebGLVertexArrayObject;
        gl.bindVertexArray(vao);
        Object.values(this.program.attributes).forEach((a) => {
            gl.enableVertexAttribArray(a.location);
            gl.vertexAttribPointer(
                a.location,
                a.size,
                a.type,
                false,
                0,
                0
            );

        })
        gl.bindVertexArray(null);
        return vao;

    }
    draw() {
        gl.useProgram(this.program.id);
    
        const offset = 0;
        const count = 1;
        gl.drawArrays(gl.POINTS, offset, count);

    }
}


const srcVertexShader = await fetch('shaders/example.vert.glsl')
    .then(result => result.text());

const srcFragmentShader = await fetch('shaders/example.frag.glsl')
    .then(result => result.text());
