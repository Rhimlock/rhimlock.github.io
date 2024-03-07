import { Collection } from "../../helper/Collection.js";
import { UBO } from "../buffer/ubo.js";
import { gl } from "../gl.js";
import { Attribute, fetchAttributes } from "./attribute.js";
import { Shader } from "./shader.js";
import { Uniform, getUniforms, getUniformBlocks} from "./uniforms.js";
let currentProgram: WebGLProgram | null;

export class Program {
  id: WebGLProgram | null;
  vert: Shader;
  frag: Shader;
  attributes = [] as Attribute[];
  uniforms = {} as Collection<Uniform>;
  ubos = {} as Collection<UBO>;

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
      this.ubos = getUniformBlocks(this.id);
      this.uniforms = getUniforms(this.id);
    }
  }
  use() {
    if (currentProgram != this.id) {
      gl.useProgram(this.id);
      currentProgram = this.id;
    }
  }
  setUniform(name: string, value: any) {
    this.use();
    const uniform = this.uniforms[name];
    if (uniform) {
      if (uniform.location) {
        uniform.func.call(gl, uniform.location, value);

      } else {
        uniform.ubo?.updateUniform(uniform.info.name,value);
      }
    }

    return value;
  }
}
