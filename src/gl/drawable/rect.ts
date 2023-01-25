import { gl } from "../gl.js";
import { Program } from "../program.js";
import { shaders } from "../shaders.js";
import { Texture } from "../texture.js";

export class Rect {
    program = new Program(
        shaders.light?.vert as WebGLShader, 
        shaders.light?.frag as WebGLShader);
    tex: Texture
    constructor (tex: Texture) {
        this.tex = tex;
    }

    draw() {
        gl.useProgram(this.program.id);
        gl.uniform1i(this.program.uniforms?.tex?.location as number, 0);
        gl.drawArrays(gl.POINTS, 0, 4);
    }
}