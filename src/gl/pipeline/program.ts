import { UniformBuffer } from "../arraybuffer/uniformbuffer.js";
import { gl } from "../gl.js";
import { AttributeCollection } from "../helper/interfaces.js";
import {lookupByteSize, lookupLengthByType, lookupPointerType, lookupUniformSetter } from "../helper/lookups.js";
import { VertexArray } from "../vertexarray.js";
import { Shader } from "./shader.js";

export class Program {
    id: WebGLProgram
    vertexShader: Shader
    fragmentShader: Shader
    attributes ={} as AttributeCollection;
    uniforms ={} as  { [key: string]: number | number[] };
    uniformBlocks ={} as { [key: string]: UniformBuffer };
    mode = gl.TRIANGLE_FAN;

    constructor(vertexShaderName: string, fragmentShaderName: string, mode = gl.TRIANGLE_FAN) {
        this.id = gl.createProgram() as WebGLProgram;
        this.vertexShader = new Shader(vertexShaderName, gl.VERTEX_SHADER);
        this.fragmentShader = new Shader(fragmentShaderName, gl.FRAGMENT_SHADER);
        this.mode = mode;
        if (this.id) {
            gl.attachShader(this.id, this.vertexShader.id);
            gl.attachShader(this.id, this.fragmentShader.id);
            gl.linkProgram(this.id);
            this.initUniforms();
            this.initVertexAttributes();
            const err = gl.getProgramInfoLog(this.id);
            if (err) throw `linkingError: ${err}`;
        }
        else {
            throw "gl.createProgram() failed";
        }
    }

    draw(vao: VertexArray, count: number, uniforms?: { [key: string]: number | number[] }) {
        gl.useProgram(this.id);
        if (uniforms) {
            for (const [key, value] of Object.entries(uniforms)) {
                this.uniforms[key] = value;
            }
        }
        gl.bindVertexArray(vao.id);
        gl.drawArrays(this.mode, 0, count);
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
                offset
            };
            offset +=  info.size * lookupByteSize(info.type);
        }
       Object.values(this.attributes).forEach(a => a.stride = offset);
    }

    initUniforms() {
        const indices = [...Array(gl.getProgramParameter(this.id, gl.ACTIVE_UNIFORMS)).keys()] as number[];
        const blockIndices = gl.getActiveUniforms(this.id, indices, gl.UNIFORM_BLOCK_INDEX) as number[];

        indices.forEach(index => {
            const blockIndex = blockIndices[index] as number;
            if (blockIndex == -1) {
                const info = gl.getActiveUniform(this.id, index);
                const location = gl.getUniformLocation(this.id, info?.name as string);
                const uniform_function = lookupUniformSetter(info?.type as number);
                Object.defineProperty(this.uniforms, info?.name as string, {
                    get() {return -1},
                    set(value) {
                        if (typeof value == "number") value = [value]
                        uniform_function.call(gl, location, value)
                    },
                });
            } else {
                const blockName = gl.getActiveUniformBlockName(this.id,blockIndex) as string;
               if (!this.uniformBlocks[blockName])
               this.uniformBlocks[blockName] = new UniformBuffer(this.id,blockName);
            }
        })
    }


}