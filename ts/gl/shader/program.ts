import { Collection } from "../../helper/Collection.js";
import { UBO } from "../buffer/ubo.js";
import { gl } from "../gl.js";
import { getUniformBlocks, getUniformSetter } from "./uniforms.js";
let currentProgram: WebGLProgram | null;

export class Program {
  id: WebGLProgram;
  attributes: WebGLActiveInfo[];
  uniformSetters: Collection<Function>;
  ubos = {} as Collection<UBO>;

  constructor(
    srcVertexShader: string,
    srcFragmentShader: string,
    public transformFeedbackOutputs: string[] = [],
  ) {
    this.id = initProgram(
      srcVertexShader,
      srcFragmentShader,
      transformFeedbackOutputs,
    );
    this.attributes = getAttributes(this.id);
    this.ubos = getUniformBlocks(this.id);
    this.uniformSetters = getUniformSetters(this.id);
  }

  use() {
    if (currentProgram != this.id) {
      gl.useProgram(this.id);
      currentProgram = this.id;
    }
  }

  setUniform(uniformName: string, value: any) {
    this.use();
    const setter = this.uniformSetters[uniformName];
    if (setter) setter(value);
  }
}

function initProgram(srcVS: string, srcFS: string, tfOutputs: string[]) {
  const id = gl.createProgram() as WebGLProgram;
  gl.attachShader(id, initShader(gl.VERTEX_SHADER, srcVS));
  gl.attachShader(id, initShader(gl.FRAGMENT_SHADER, srcFS));
  if (tfOutputs.length > 0)
    gl.transformFeedbackVaryings(id, tfOutputs, gl.SEPARATE_ATTRIBS);
  gl.linkProgram(id);
  var err = gl.getProgramInfoLog(id);
  if (err) throw `linkingError: ${err}`;
  return id;
}

function initShader(type: number, src: string) {
  const id = gl.createShader(type) as WebGLShader;
  gl.shaderSource(id, src);
  gl.compileShader(id);
  const err = gl.getShaderInfoLog(id);
  if (err) throw `compileError: ${type} - ${err}`;
  return id;
}

function getAttributes(id: WebGLProgram) {
  return new Array(gl.getProgramParameter(id, gl.ACTIVE_ATTRIBUTES))
    .fill({})
    .map((_, i) => gl.getActiveAttrib(id, i) as WebGLActiveInfo)
    .filter((info) => gl.getAttribLocation(id, info.name) >= 0);
}

function getUniformSetters(id: WebGLProgram) {
  const setters = {} as Collection<Function>;
  new Array(gl.getProgramParameter(id, gl.ACTIVE_UNIFORMS))
    .fill({})
    .map((_, i) => gl.getActiveUniform(id, i) as WebGLActiveInfo)
    .forEach((info) => {
      const location = gl.getUniformLocation(id, info.name);
      if (location) setters[info.name] = getUniformSetter(info.type, location);
    });
  return setters;
}
