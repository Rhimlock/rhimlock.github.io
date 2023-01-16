import { Program } from "../program.js";
export class Rect {
    constructor() {
        this.program = new Program(srcVertexShader, srcFragmentShader);
    }
    log() {
        console.log(this.program);
    }
}
const srcVertexShader = await fetch('rect.vert.glsl')
    .then(result => result.text());
const srcFragmentShader = await fetch('rect.frag.glsl')
    .then(result => result.text());
//# sourceMappingURL=rect.js.map