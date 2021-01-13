import { gl } from "./gl.js";
export class VBO {
    constructor(data, verticesPerElement) {
        this.changed = false;
        this.id = gl.createBuffer();
        this.data = data;
        this.type = lookupType(data);
        this.bytesPerVertex = lookupBytesPerElement(data);
        this.verticesPerElement = verticesPerElement;
        this.update();
    }
    update() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    updateSub(length) {
        if (this.changed) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
            gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.data, 0, length * this.bytesPerVertex);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            this.changed = false;
        }
    }
    getVertex(n, offset) { return this.data[n * this.verticesPerElement + offset]; }
    setVertex(v, n, offset) {
        this.changed = true;
        this.data[n * this.verticesPerElement + offset] = v;
    }
}
function lookupType(data) {
    switch (data.constructor.name) {
        case "Int8Array":
            return gl.BYTE;
            break;
        case "Uint8Array":
            return gl.UNSIGNED_BYTE;
            break;
        case "Int16Array":
            return gl.SHORT;
            break;
        case "Uint16Array":
            return gl.UNSIGNED_SHORT;
            break;
        case "Int32Array":
            return gl.INT;
            break;
        case "Uint32Array":
            return gl.UNSIGNED_INT;
            break;
        case "Float32Array":
            return gl.FLOAT;
            break;
        default: return -1;
    }
}
;
function lookupBytesPerElement(data) {
    switch (data.constructor.name) {
        case "Int8Array":
            return 1;
            break;
        case "Uint8Array":
            return 1;
            break;
        case "Int16Array":
            return 2;
            break;
        case "Uint16Array":
            return 2;
            break;
        case "Int32Array":
            return 4;
            break;
        case "Uint32Array":
            return 4;
            break;
        case "Float32Array":
            return 4;
            break;
        default: return -1;
    }
}
;
//# sourceMappingURL=vbo.js.map