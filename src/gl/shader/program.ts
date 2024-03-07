import { UboContainer } from "../buffer/ubo.js";
import { gl } from "../gl.js";
import { Attribute, fetchAttributes } from "./attribute.js";
import { Shader } from "./shader.js";
import { fetchUniformBlocks, fetchUniforms, Uniforms } from "./uniforms.js";
let currentProgram: WebGLProgram | null;

export class Program {
  id: WebGLProgram | null;
  vert: Shader;
  frag: Shader;
  attributes = [] as Attribute[];
  uniforms = {} as Uniforms;
  ubos: UboContainer = {};
  constructor(srcVertexShader: string, srcFragmentShader: string) {
    this.id = gl.createProgram();
    this.vert = new Shader(gl.VERTEX_SHADER, srcVertexShader);
    this.frag = new Shader(gl.FRAGMENT_SHADER, srcFragmentShader);
    if (this.id && this.vert.id && this.frag.id) {
      gl.attachShader(this.id, this.vert.id);
      gl.attachShader(this.id, this.frag.id);
      gl.linkProgram(this.id);
      this.use();
      var err = gl.getProgramInfoLog(this.id);
      if (err) throw `linkingError: ${err}`;
      this.attributes = fetchAttributes(this.id);
      this.uniforms = fetchUniforms(this.id);
      this.ubos = fetchUniformBlocks(this.id);
    }
  }
  use() {
    if (currentProgram != this.id) {
      gl.useProgram(this.id);
      currentProgram = this.id;
    }
  }
}
