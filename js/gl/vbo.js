import { gl } from "./gl.js";
export class VBO {
    constructor(data) {
        this.changed = false;
        this.id = gl.createBuffer();
        this.data = data;
        this.type = lookupType(data);
        this.bytesPerElement = lookupBytesPerElement(data);
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
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.data, 0, length * this.bytesPerElement);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            this.changed = false;
        }
    }
    get int8Array() { return this.data; }
    ;
    get int16Array() { return this.data; }
    ;
    get int32Array() { return this.data; }
    ;
    get uInt8Array() { return this.data; }
    ;
    get uInt16Array() { return this.data; }
    ;
    get uInt32Array() { return this.data; }
    ;
    get float32Array() { return this.data; }
    ;
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