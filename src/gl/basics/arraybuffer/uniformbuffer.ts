import { AttributeCollection, Vertex } from "./vertex.js";
import { gl } from "../../gl.js";
import { lookupLengthByType, lookupPointerType } from "../lookups.js";
import { Buffer } from "./buffer.js";

const cache = {} as {[key:string] : UniformBuffer}
export class UniformBuffer extends Buffer {
    bindingPoint: number = -1
    uniforms: BlockUniforms = {} as Vertex
    constructor(blockName: string, program?: WebGLProgram, ) {

        if(cache[blockName]) {
            return cache[blockName] as UniformBuffer;
        }
        if (!program) {
            throw `no program for block ${ blockName } found`
        }

        const index = gl.getUniformBlockIndex(program, blockName);
        const uniformIndices = gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);

        super(
            lookupBlockUniforms(program, uniformIndices),
            1,
            gl.UNIFORM_BUFFER,
            gl.DYNAMIC_READ
        );
        this.uniforms = super.addVertex({});
        this.bindingPoint = gl.getActiveUniformBlockParameter(program, index, gl.UNIFORM_BLOCK_BINDING);
        cache[blockName] = this;
    }

    sync() {
        super.sync();
        gl.bindBufferBase(this.target, this.bindingPoint, this.id);
    }
};

function lookupBlockUniforms(program: WebGLProgram, indices: number[]) {
    const uniforms = {} as AttributeCollection;
    const offsets = gl.getActiveUniforms(program, indices, gl.UNIFORM_OFFSET);
    offsets.forEach((offset: number, n: number) => {
        const info = gl.getActiveUniform(program, indices[n] as number) as WebGLActiveInfo;
        uniforms[info.name] = {
                location: gl.getUniformLocation(program, info.name) as number,
                size: lookupLengthByType(info.type) * info.size,
                type: lookupPointerType(info.type),
                normalized: false,
                stride: 0,
                offset
        }
    })
    return uniforms;
}


export interface BlockUniforms extends Vertex {
    [key:string] : any
}


