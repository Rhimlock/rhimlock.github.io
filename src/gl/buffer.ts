import { gl } from "./gl.js";

export class Buffer {
    id: WebGLBuffer;
    data: ArrayBuffer;
    bytesPerEntity: number;
    constructor(byteLength: number, bytesPerEntity?: number | undefined) {
        this.id = gl.createBuffer() as WebGLBuffer;
        this.data = new ArrayBuffer(byteLength);
        this.bytesPerEntity = bytesPerEntity ?? byteLength;
    }

    bufferData() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
    }

    bufferSubData(byteLength: number) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Uint8Array(this.data), byteLength);

    }
    getSlice(n: number) {
        const begin = n * this.bytesPerEntity;
        return this.data.slice(begin, begin + this.bytesPerEntity);

    }


}