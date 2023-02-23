import { gl } from "../../gl.js";
import { Buffer } from "./buffer.js";
import { Attribute, AttributeCollection } from "./vertex.js";

export class VertexArray {
    id: WebGLVertexArrayObject;
    buffers: Buffer[] = []
    instancedBuffer: Buffer | undefined = undefined
    instanceDivisor = 0
    constructor(attributes: AttributeCollection, maxNumberOfVertices: number, bufferOptions?: BufferOptions[]) {
        this.id = gl.createVertexArray() as WebGLVertexArrayObject;
        this.initBuffers(attributes, maxNumberOfVertices, bufferOptions);
    }
    initBuffers(attributes: AttributeCollection, maxNumberOfVertices: number, bufferOptions?: BufferOptions[]) {
        if (!bufferOptions) {
            this.createBuffer(attributes, maxNumberOfVertices);
        } else {
            bufferOptions.forEach(opt => {
                if (opt.attributeTypes) {
                    const def = Object.entries(opt.attributeTypes).map(([key, type]) => {
                        const attrib = attributes[key];
                        if (attrib) {
                            attrib.type = type;
                            return attrib;
                        } else {
                            throw `attribute ${key} not found`
                        }
                    }).reduce((result, entry) => Object.assign(result, entry), {});
                    this.createBuffer(def, opt.maxNumberOfVertices ?? maxNumberOfVertices, opt.usage, opt.instanceDivisor);
                }
            });
        }
    }

    initPointerAndDivisor(buffer: Buffer, instanceDivisor = 0) {
        gl.bindVertexArray(this.id);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer.id);

        Object.values(buffer.definition as { [key: string]: Attribute }).forEach(a => {

            gl.enableVertexAttribArray(a.location as number);
            if (a.useIPointer) {
                gl.vertexAttribIPointer(
                    a.location as number, a.size as number, a.type as number, a.stride ?? 0, a.offset ?? 0);
            } else {
                gl.vertexAttribPointer(
                    a.location as number, a.size as number, a.type as number, !!a.normalized, a.stride ?? 0, a.offset ?? 0);
            }

            if (instanceDivisor) {
                gl.vertexAttribDivisor(a.location as number, instanceDivisor)
                this.instancedBuffer = buffer;
                this.instanceDivisor = instanceDivisor
            }
        });
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindVertexArray(null);
        this.buffers.push(buffer);
    }

    createBuffer(attributes: AttributeCollection, maxNumberOfVertices: number, usage: number = gl.STATIC_DRAW, instanceDivisor = 0) {
        const buffer = new Buffer(attributes, maxNumberOfVertices, gl.ARRAY_BUFFER, usage);
        this.initPointerAndDivisor(buffer, instanceDivisor);
        return buffer;
    }

    addVertex(attributes: { [key: string]: number | number[] }) {
        let vertex = {};
        this.buffers.forEach(b =>
            {
            vertex = b.addVertex(attributes);
            }
        );
        return vertex;
    }

    sync() {
        this.buffers.forEach(b => b.sync());
    }

}

export interface BufferOptions {
    attributeTypes?: { [key: string]: number },
    maxNumberOfVertices?: number,
    usage?: number,
    instanceDivisor?: number
}