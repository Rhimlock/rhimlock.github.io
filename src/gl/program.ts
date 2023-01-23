import { Block, ActiveInfoCollection, VertexAttrib } from "../helper/interfaces.js";
import { lookupActiveInfoTypeSize } from "../helper/lookup.js";
import { gl } from "./gl.js";
import { VertexAttributeArray } from "./vertexAttributes.js";

export class Program {
  id: WebGLProgram;
  attributes: VertexAttributeArray = new VertexAttributeArray({});
  uniforms: ActiveInfoCollection;
  uniformBlocks: Block[];

  constructor(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    this.id = gl.createProgram() as WebGLProgram;
    gl.attachShader(this.id,vertexShader);
    gl.attachShader(this.id,fragmentShader);
    gl.linkProgram(this.id);
    gl.useProgram(this.id);

    const err = gl.getProgramInfoLog(this.id);
    if (err) throw `linkingError: ${err}`;
  
    this.uniforms = this.getActiveInfos(gl.ACTIVE_UNIFORMS, gl.getActiveUniform, gl.getUniformLocation);
    this.uniformBlocks = this.getUniformBlocks();
  }

  initAttributes(attribs : {[key: string] : VertexAttrib }) {
    //lookup location and size from program
    for (const [key, a] of Object.entries(attribs)){
      a.name = key;
      a.location = gl.getAttribLocation(this.id,a.name);
      a.size = lookupActiveInfoTypeSize(gl.getActiveAttrib(this.id,a.location)?.type as number);
    }
    //this will calculate ByteSize, Offset and Stride
    this.attributes = new VertexAttributeArray(attribs);
  }

  //used for ACTIVE_ATTRIBUTES and ACTIVE_UNIFORMS
  getActiveInfos(pname: number, getActiveInfo: Function, getLocation: Function) {
    let infos = [...new Array(gl.getProgramParameter(this.id, pname))];
    infos = infos.map((_, i) => getActiveInfo.call(gl, this.id, i));
    infos = infos.map(info => ({
      name: info.name,
      location: getLocation.call(gl, this.id, info.name) as number,
      size: lookupActiveInfoTypeSize(info.type),
      type: info.type
    })
    );
    return infos.reduce((obj, item) => ({
      ...obj,
      [item.name]: item

    }), {});

  }

  getUniformBlocks() {
    let blocks = [...new Array(gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORM_BLOCKS))];
    return blocks.map((_, i) => {
      const name = gl.getActiveUniformBlockName(this.id, i) as string;
      const index = gl.getUniformBlockIndex(this.id, name);
      const uniformIndices = gl.getActiveUniformBlockParameter(this.id, index, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES) as Uint32Array;
      const uniforms = Object.values(this.uniforms).filter((_,i) => uniformIndices.includes(i));
      return {
        name: name,
        index: index,
        size: gl.getActiveUniformBlockParameter(this.id, index, gl.UNIFORM_BLOCK_DATA_SIZE),
        uniforms: uniforms.reduce((obj, item) => ({
          ...obj,
          [item.name]: item

        }), {}) 
      };
    }
    );
  }
}
