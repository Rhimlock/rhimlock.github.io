import { gl } from "../gl.js";
import { fetchAttributes } from "./attribute.js";
import { Shader } from "./shader.js";
import { fetchUniforms } from "./uniforms.js";
export class Program {
    constructor(vertDeclaration, vertProcessing, fragDeclaration, fragProcessing) {
        this.attributes = [];
        this.uniforms = {};
        this.id = gl.createProgram();
        this.vert = new Shader(gl.VERTEX_SHADER, vertDeclaration, vertProcessing);
        this.frag = new Shader(gl.FRAGMENT_SHADER, fragDeclaration, fragProcessing);
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