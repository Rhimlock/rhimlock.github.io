import { lookupActiveInfoTypeSize } from "../helper/lookup.js";
import { gl } from "./gl.js";

export class Program {
  id: WebGLProgram;
  vert: WebGLShader;
  frag: WebGLShader;
  attributes = [] as ActiveInfo[];
  uniforms = [] as ActiveInfo[];
  uniformBlocks = [] as any[];

  constructor(srcVertexShader: string, srcFragmentShader: string) {
    this.id = gl.createProgram() as WebGLProgram;
    this.vert = this.compileShader(gl.VERTEX_SHADER, srcVertexShader);
    this.frag = this.compileShader(gl.FRAGMENT_SHADER, srcFragmentShader);

    gl.linkProgram(this.id);
    gl.useProgram(this.id);

    const err = gl.getProgramInfoLog(this.id);
    if (err) throw `linkingError: ${err}`;

    this.initAttributes();
    this.initUniforms();
    this.initUniformBlocks();
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
      const info = gl.getActiveAttrib(this.id, i) as ActiveInfo;
      info.location = gl.getAttribLocation(this.id, info.name);
      info.typeSize = lookupActiveInfoTypeSize(info.type);
      this.attributes.push(info);
    }

  }
  initUniforms() {
    const n = gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const info = gl.getActiveUniform(this.id, i) as ActiveInfo;
      info.typeSize = lookupActiveInfoTypeSize(info.type);
      info.location = gl.getUniformLocation(this.id, info.name) as number;
      if(!info.location) {
        info.block = gl.getActiveUniforms(this.id,[i],gl.UNIFORM_BLOCK_INDEX)[0];
      }
      this.uniforms.push(info);
    }

  }

  initUniformBlocks() {
    const n = gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORM_BLOCKS);
    for (let i = 0; i < n; ++i) {
      const block = {
        name : gl.getActiveUniformBlockName(this.id, i) as string,
        size : gl.getActiveUniformBlockParameter(this.id,i,gl.UNIFORM_BLOCK_DATA_SIZE),
        vars: this.uniforms.filter(u => {
          return (u.block === i)
        })

    };
    this.uniformBlocks.push(block);
    }

  }
}

interface ActiveInfo {
  name: string;
  type: GLenum;
  size: number;
  location: number | WebGLUniformLocation;
  typeSize: number;
  block: number;
}

