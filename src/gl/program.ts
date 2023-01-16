import { lookupActiveInfoTypeSize } from "../helper/lookup.js";
import { gl } from "./gl.js";

export class Program {
  id: WebGLProgram;
  vert: WebGLShader;
  frag: WebGLShader;
  attributes = [] as Attribute[];
  uniforms = [] as Uniform[];
  uniformBlocks = [] as Block[];

  constructor(srcVertexShader: string, srcFragmentShader: string) {
    this.id = gl.createProgram() as WebGLProgram;
    this.vert = this.compileShader(gl.VERTEX_SHADER, srcVertexShader);
    this.frag = this.compileShader(gl.FRAGMENT_SHADER, srcFragmentShader);

    gl.linkProgram(this.id);
    gl.useProgram(this.id);

    const err = gl.getProgramInfoLog(this.id);
    if (err) throw `linkingError: ${err}`;

    this.initAttributes();
    this.initUniformBlocks();
    this.initUniforms();
  }

  compileShader(type: number, src: string) {
    const shader = gl.createShader(type) as WebGLShader;
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    const err = gl.getShaderInfoLog(shader);
    if (err) throw `compileError: ${type} - ${err}`;
    gl.attachShader(this.id, shader);
    return shader;
  }

  initAttributes() {
    const n = gl.getProgramParameter(this.id, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < n; ++i) {
      const info = gl.getActiveAttrib(this.id, i) as WebGLActiveInfo;
      this.attributes.push({
        name: info.name,
        location: gl.getAttribLocation(this.id, info.name),
        size: lookupActiveInfoTypeSize(info.type),
        type: info.type
      });
    }

  }
  initUniforms() {
    const n = gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const info = gl.getActiveUniform(this.id, i) as WebGLActiveInfo;
      const uniform = {
        name: info.name,
        location: gl.getUniformLocation(this.id, info.name),
        size: lookupActiveInfoTypeSize(info.type),
        type: info.type,
        block: this.uniformBlocks[gl.getActiveUniforms(this.id, [i], gl.UNIFORM_BLOCK_INDEX)[0]]
      };
      this.uniforms.push(uniform);
      uniform.block?.uniforms.push(uniform);

    }

  }

  initUniformBlocks() {
    const n = gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORM_BLOCKS);
    for (let i = 0; i < n; ++i) {
      const block = {
        name: gl.getActiveUniformBlockName(this.id, i) as string,
        index: i,
        size: gl.getActiveUniformBlockParameter(this.id, i, gl.UNIFORM_BLOCK_DATA_SIZE),
        uniforms: []
        
      };
      this.uniformBlocks.push(block);
    }

  }
}

interface Attribute {
  name: string;
  type: GLenum;
  size: number;
  location: number;
}

interface Uniform {
  name: string;
  type: GLenum;
  size: number;
  location: WebGLUniformLocation | null;
  block: Block | undefined;
}

interface Block {
  name: string;
  index: number;
  size: number;
  uniforms: Uniform[];
}

