import { gl } from "../gl.js";
import { fetchAttributes } from "./attribute.js";
import { Shader } from "./shader.js";
import { fetchUniforms } from "./uniforms.js";
export class Program {
    constructor(srcVertexShader, srcFragmentShader) {
        this.attributes = [];
        this.uniforms = {};
        this.id = gl.createProgram();
        this.vert = new Shader(gl.VERTEX_SHADER, srcVertexShader);
        this.frag = new Shader(gl.FRAGMENT_SHADER, srcFragmentShader);
        if (this.id && this.vert.id && this.frag.id) {
            gl.attachShader(this.id, this.vert.id);
            gl.attachShader(this.id, this.frag.id);
            gl.linkProgram(this.id);
            gl.useProgram(this.id);
            var err = gl.getProgramInfoLog(this.id);
            if (err)
                throw `linkingError: ${err}`;
            this.attributes = fetchAttributes(this.id);
            this.uniforms = fetchUniforms(this.id);
        }
    }
}
//# sourceMappingURL=program.js.map