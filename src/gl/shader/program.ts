import { gl } from "../gl.js";
import { Attribute, fetchAttributes } from "./attribute.js";
import { Shader } from "./shader.js";
import { fetchUniforms, Uniforms } from "./uniforms.js";

export class Program {
  id: WebGLProgram | null;
  vert: Shader;
  frag: Shader;
  attributes = [] as Attribute[];
  uniforms = {} as Uniforms;
  constructor(srcVertexShader: string, srcFragmentShader: string) {
    this.id = gl.createProgram();
    this.vert = new Shader(gl.VERTEX_SHADER, srcVertexShader);
    this.frag = new Shader(gl.FRAGMENT_SHADER, srcFragmentShader);
    if (this.id && this.vert.id && this.frag.id) {
      gl.attachShader(this.id, this.vert.id);
      gl.attachShader(this.id, this.frag.id);
      gl.linkProgram(this.id);
      gl.useProgram(this.id);
      var err = gl.getProgramInfoLog(this.id);
      if (err) throw `linkingError: ${err}`;
      this.attributes = fetchAttributes(this.id);
      this.uniforms = fetchUniforms(this.id);
    }
  }
}
