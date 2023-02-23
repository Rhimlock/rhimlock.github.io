import { gl } from "../../gl.js";
import { lookupByteSize, nextPowerOf2 } from "../lookups.js";
import { AttributeCollection, Vertex } from "./vertex.js";

export class Buffer {
    id: WebGLBuffer
    vertices: Vertex[] = []
    definition: AttributeCollection
    stride: number
    data: ArrayBuffer

    target = gl.ARRAY_BUFFER
    usage = gl.STATIC_DRAW

    constructor(definition: AttributeCollection, maxNumberOfVertices: number, target = gl.ARRAY_BUFFER, usage = gl.STATIC_DRAW) {
        this.definition = definition;
        this.stride = this.calcByteSize();
        this.data = new ArrayBuffer(Math.max(this.stride * maxNumberOfVertices, 16)) ;
            this.target = target;
            this.usage = usage;
            this.id = this.createBuffer();
        
    }

    createBuffer() {
        const buffer = gl.createBuffer() as WebGLBuffer;
        if (!buffer) throw 'gl.createBuffer() failed for class Buffer';
        gl.bindBuffer(this.target, buffer);
        gl.bufferData(this.target, this.data, this.usage);
        gl.bindBuffer(this.target, null);
        return buffer as WebGLBuffer;
    }

    sync() {
        gl.bindBuffer(this.target, this.id);
        gl.bufferSubData(this.target,0,new DataView(this.data),0,this.stride * this.vertices.length);
        gl.bindBuffer(this.target, null);
    }

    addVertex(attributes : { [key : string] : number | number[]}, vertex?: Vertex)  {
        const byteOffset = this.vertices.length * this.stride;
        const dv = new DataView(this.data, byteOffset, this.stride);
        if (vertex) {
            vertex.addAttributes(this.definition,dv);
            vertex.setValues(attributes);
        } else {
            vertex = new Vertex(this.definition, dv, attributes);
        }
        this.vertices.push(vertex);
        return vertex;
    }

    calcByteSize() {
        let size = 0;
        for (const item of Object.values(this.definition)) {
            size += item.size as number * lookupByteSize(item.type);
        }
        console.log(nextPowerOf2(size));
        return size;
    }
}
