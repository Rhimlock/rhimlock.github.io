import { VertexAttrib } from "../helper/interfaces.js"
import { gl } from "./gl.js";
export class VertexAttributeArray {
    attribs: {[key: string] : VertexAttrib }
    byteLength = 0

    constructor(attribs : {[key: string] : VertexAttrib }) {
        this.attribs = attribs;
        this.calcStrideAndOffset()
    }

    calcStrideAndOffset() {
        this.byteLength = 0;
        for (const [_, a] of Object.entries(this.attribs)){
            a.offset = this.byteLength;
            this.byteLength = a.offset + this.getByteSize(a.type) * (a.size ?? 1);
            const functs = this.getFunction(a.type);
            a.get = functs.get as Function;
            a.set = functs.set as Function;
        }
    }

    getByteSize(type: GLenum) {
        switch (type) {
            case gl.BYTE:
            case gl.UNSIGNED_BYTE:
                return 1;
            case gl.SHORT:
            case gl.UNSIGNED_SHORT:
                return 2;
        }
        return 4;
    }

    getFunction(type: GLenum) {
        const dv = new DataView(new ArrayBuffer(0));
        switch (type) {
            case gl.BYTE:
                return { set: dv.setInt8, get: dv.getInt8 }
            case gl.UNSIGNED_BYTE:
                return { set: dv.setUint8, get: dv.getUint8 }
            case gl.SHORT:
                return { set: dv.setInt16, get: dv.getInt16 }
            case gl.UNSIGNED_SHORT:
                return { set: dv.setUint16, get: dv.getUint16 }
            case gl.INT:
                return { set: dv.setInt32, get: dv.getInt32 }
            case gl.UNSIGNED_INT:
                return { set: dv.setUint32, get: dv.getUint32 }
            case gl.FLOAT:
              
            return { set: dv.setFloat32, get: dv.getFloat32 }
        }
        return {set: null, get: null};
    }
    get byteLengthPow2() {
        return Math.pow(2, Math.ceil(Math.log(this.byteLength) / Math.log(2)));
    }
}