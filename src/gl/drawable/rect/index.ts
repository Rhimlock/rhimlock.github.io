import { Program } from "../../program.js";

export class Rect {
    program: Program;
    constructor() {
        this.program = new Program(srcVertexShader, srcFragmentShader);
    }
    log() {
        console.log(this.program);
    }
}

const srcVertexShader = await fetch('vert.glsl')
    .then(result => result.text());

const srcFragmentShader = await fetch('frag.glsl')
.then(result => result.text());