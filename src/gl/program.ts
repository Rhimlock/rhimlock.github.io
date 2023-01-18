import { Block, ActiveInfo } from "../helper/interfaces.js";
import { lookupActiveInfoTypeSize } from "../helper/lookup.js";
import { gl } from "./gl.js";

export class Program {
  id: WebGLProgram;
  vert: WebGLShader;
  frag: WebGLShader;
  attributes = [] as ActiveInfo[];
  uniforms = [] as ActiveInfo[];
  uniformBlocks = [] as Block[];

  constructor(srcVertexShader: string, srcFragmentShader: string) {
    this.id = gl.createProgram() as WebGLProgram;
    this.vert = this.compileShader(gl.VERTEX_SHADER, srcVertexShader);
    this.frag = this.compileShader(gl.FRAGMENT_SHADER, srcFragmentShader);

    gl.linkProgram(this.id);
    gl.useProgram(this.id);

    const err = gl.getProgramInfoLog(this.id);
    if (err) throw `linkingError: ${err}`;

    this.attributes = this.getActiveInfos(gl.ACTIVE_ATTRIBUTES, gl.getActiveAttrib, gl.getAttribLocation);
    this.uniforms = this.getActiveInfos(gl.ACTIVE_UNIFORMS, gl.getActiveUniform, gl.getUniformLocation);
    this.uniformBlocks = this.getUniformBlocks();
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

  //used for ACTIVE_ATTRIBUTES and ACTIVE_UNIFORMS
  getActiveInfos(pname: number, getActiveInfo: Function, getLocation: Function) {
    let infos = [...new Array(gl.getProgramParameter(this.id, pname))];
    infos = infos.map((_, i) => getActiveInfo.call(gl, this.id, i));
    return infos.map(info => ({
        name: info.name,
        location: getLocation.call(gl, this.id, info.name) as number,
        size: lookupActiveInfoTypeSize(info.type),
        type: info.type
      })
      );
   
  }

  getUniformBlocks() {
    let blocks = [...new Array(gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORM_BLOCKS))];
    return blocks.map((_, i) => {
      const name = gl.getActiveUniformBlockName(this.id, i) as string;
      const index = gl.getUniformBlockIndex(this.id, name);
      const uniformIndices = gl.getActiveUniformBlockParameter(this.id, index, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES) as Uint32Array;
      //const uniformOffsets = gl.getActiveUniformBlockParameter(this.id, index, gl.UNIFORM_OFFSET);
      const uniforms = this.uniforms.filter((_,i) => uniformIndices.includes( i));

      return {
        name: name,
        index: index,
        size: gl.getActiveUniformBlockParameter(this.id, index, gl.UNIFORM_BLOCK_DATA_SIZE),
        uniforms: uniforms
      };
    }
    );
    }
}
