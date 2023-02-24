import { UniformBuffer } from "../arraybuffer/uniformbuffer.js";
import { gl } from "../../gl.js";
import { VertexArray } from "../arraybuffer/vertexarray.js";
import { Shader } from "./shader.js";
import { AttributeCollection } from "../arraybuffer/vertex.js";
import { lookupByteSize, lookupLengthByType, lookupPointerType, lookupUniformSetter } from "../lookups.js";

const cache = {} as { [key: string]: Program }

export class Program {
    id: WebGLProgram
    attributes = {} as AttributeCollection;
    uniforms = {} as { [key: string]: number | Iterable<number> };
    uniformBlocks = {} as { [key: string]: UniformBuffer };
    mode = gl.TRIANGLE_FAN;

    constructor(vertexShaderName: string, fragmentShaderName?: string, mode = gl.TRIANGLE_FAN, transformFeedbackVaryings?: string[]) {
        this.id = gl.createProgram() as WebGLProgram;
        if (cache[vertexShaderName + fragmentShaderName]) {
            gl.deleteProgram(this.id);
            return cache[vertexShaderName + fragmentShaderName] as Program;
        }
        fragmentShaderName = fragmentShaderName ?? vertexShaderName;

        const vertexShader = new Shader(`${vertexShaderName}.vert`, gl.VERTEX_SHADER);
        const fragmentShader = new Shader(`${fragmentShaderName}.frag`, gl.FRAGMENT_SHADER);
        this.mode = mode;
        if (this.id) {
            gl.attachShader(this.id, vertexShader.id);
            gl.attachShader(this.id, fragmentShader.id);
            if (transformFeedbackVaryings) {
                gl.transformFeedbackVaryings(this.id, transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
            }

            gl.linkProgram(this.id);
            this.initUniforms();
            this.initVertexAttributes();

            const err = gl.getProgramInfoLog(this.id);
            if (err) throw `linkingError: ${err}`;
        }
        else {
            throw "gl.createProgram() failed";
        }
        cache[vertexShaderName + fragmentShaderName] = this;
    }

    draw(vao: VertexArray, uniforms?: { [key: string]: number | Iterable<number> }) {
        const count = vao.buffers[0]?.vertices.length as number;
        const instances = vao.instanceDivisor * (vao.instancedBuffer?.vertices.length as number);
        gl.useProgram(this.id);
        if (uniforms) {
            for (const [key, value] of Object.entries(uniforms)) {
                if (this.uniforms[key]) {
                    this.uniforms[key] = value;
                } else {
                    throw `uniform ${key} not found in ${Object.keys(Object.getOwnPropertyDescriptors(this.uniforms))}`
                }


            }
        }
        for(const block of Object.values(this.uniformBlocks)) {
            block.sync();
        }
        gl.bindVertexArray(vao.id);
        if (instances) {
            gl.drawArraysInstanced(this.mode, 0, count, instances);
        } else {
            gl.drawArrays(this.mode, 0, count);

        }
        gl.bindVertexArray(null);
        gl.useProgram(null);
    }

    initVertexAttributes() {
        this.attributes = {};
        let offset = 0;
        for (let i = 0; i < gl.getProgramParameter(this.id, gl.ACTIVE_ATTRIBUTES); ++i) {
            const info = gl.getActiveAttrib(this.id, i) as WebGLActiveInfo;
            this.attributes[info.name] = {
                location: gl.getAttribLocation(this.id, info.name),
                size: lookupLengthByType(info.type) * info.size,
                type: lookupPointerType(info.type),
                normalized: false,
                stride: 0,
                offset,
                useIPointer: [gl.INT, gl.INT_VEC2, gl.INT_VEC3, gl.INT_VEC4, gl.UNSIGNED_INT, gl.UNSIGNED_INT_VEC2, gl.UNSIGNED_INT_VEC3, gl.UNSIGNED_INT_VEC4].includes(info.type)
            };
            offset += info.size * lookupByteSize(info.type);
        }
        for (const a of Object.values(this.attributes)) {
            a.stride = offset;
        }
    }

    initUniforms() {
        const indices = [...Array(gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORMS)).keys()] as number[];
        const blockIndices = gl.getActiveUniforms(this.id, indices, gl.UNIFORM_BLOCK_INDEX) as number[];

        for (const index of indices) {
            const blockIndex = blockIndices[index] as number;
            if (blockIndex == -1) {
                const info = gl.getActiveUniform(this.id, index);
                const location = gl.getUniformLocation(this.id, info?.name as string);
                const uniform_function = lookupUniformSetter(info?.type as number);
                Object.defineProperty(this.uniforms, info?.name as string, {
                    get() { return 1 },
                    set(value) {
                        if (typeof value == "number") value = [value]
                        uniform_function.call(gl, location, value)
                    },
                });
            } else {
                const blockName = gl.getActiveUniformBlockName(this.id, blockIndex) as string;
                if (!this.uniformBlocks[blockName])
                    this.uniformBlocks[blockName] = new UniformBuffer(blockName, this.id);
            }
        }
    }
}