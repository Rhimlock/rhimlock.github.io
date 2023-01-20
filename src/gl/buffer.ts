import { gl } from "./gl.js";
import { VertexAttributeArray } from "./vertexAttributes.js";

export class Buffer {
    id: WebGLBuffer
    vao: WebGLVertexArrayObject
    data: ArrayBuffer
    bytesPerElement: number
    elements = [] as Element[]
    limit: number

    constructor(numberOfElements: number, vaa: VertexAttributeArray) {
        this.id = gl.createBuffer() as WebGLBuffer;
        this.data = new ArrayBuffer(numberOfElements * vaa.byteLengthPow2);
        this.limit = numberOfElements;
        this.bytesPerElement = vaa.byteLengthPow2;
        this.vao = this.initVertexAttribArray(vaa);
    }

    initVertexAttribArray(vaa: VertexAttributeArray) {
        const vao = gl.createVertexArray() as WebGLVertexArrayObject;
        gl.bindVertexArray(vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        this.bufferData();
        Object.values(vaa.attribs).forEach((a, i) => {
            gl.enableVertexAttribArray(i);
            gl.vertexAttribPointer(
                a.location as number,
                a.size as number,
                a.type as number,
                a.normalized??false,
                vaa.byteLengthPow2,
                a.offset as number)
        });
        gl.bindVertexArray(null);

        return vao;
    }

    draw() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        this.bufferData();
        gl.bindVertexArray(this.vao);
        gl.drawArrays(gl.POINTS,0,this.elements.length);
        gl.bindVertexArray(null);
    }


    bufferData() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
    }

    bufferSubData() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, new DataView(this.data,0,this.elements.length * this.bytesPerElement));

    }

    addEntity(ent: Element) {
        ent.index = this.elements.length;
        this.elements.push(ent);
        if (this.elements.length > this.limit) throw new Error("Buffer-Limit exeeded");
        ent.data = this.fetchEntityData(ent);
        return ent.data;
    }

    fetchEntityData(ent: Element) {
        const begin = ent.index * this.bytesPerElement;
        return new DataView(this.data, begin, this.bytesPerElement);
    }

    removeEntity(ent: Element) {
        const last = this.elements.pop();
        if (last && (ent != last)) {
            this.elements[ent.index] = last;
            last.index = ent.index;
            this.copyBytes(last.data, ent.data);
            last.data = ent.data;
            
        }
        ent.index = -1;
        ent.data = new DataView(new ArrayBuffer(0));

    }

    copyBytes(src: DataView, target: DataView) {
        for (let i = 0; i < src.byteLength; ++i) {
            target.setInt8(i, src.getInt8(i));
        }
    }
}


export interface Element {
    index: number
    data: DataView
}