import { TypedArray } from "../../helper/typedArray.js";
import { gl } from "../gl.js";

export class VBO {
    public id: WebGLBuffer | null;
    public data: ArrayBufferView;
    public type: number;
    public changed = false;
    private verticesPerElement : number;
    
    constructor(data: ArrayBufferView, verticesPerElement : number) {
        this.id = gl.createBuffer();
        this.data = data;
        this.type = lookupType(data);
        this.verticesPerElement = verticesPerElement;
        this.update();
    }

    public update() {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    public updateSub(n : number) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.id);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
        gl.bufferSubData(gl.ARRAY_BUFFER,0,this.data,0, n);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    getVertex(n: number, offset : number) { 
        return (this.data as TypedArray)[n * this.verticesPerElement + offset] 
    }
    setVertex(v: number, index: number, offset : number ) {
        this.changed = true;
        (this.data as TypedArray)[index * this.verticesPerElement + offset] = v;
    }

    getSubArray(n:number, length: number) {
        const begin = n * this.verticesPerElement;
        const end = begin + length;
        return (this.data as TypedArray).subarray(begin,end);
    }
}
function lookupType(data: ArrayBufferView): number {
    switch (data.constructor.name) {
        case "Int8Array": return gl.BYTE; break;
        case "Uint8Array": return gl.UNSIGNED_BYTE; break;
        case "Int16Array": return gl.SHORT; break;
        case "Uint16Array": return gl.UNSIGNED_SHORT; break;
        case "Int32Array": return gl.INT; break;
        case "Uint32Array": return gl.UNSIGNED_INT; break;
        case "Float32Array": return gl.FLOAT; break;
        default: return -1;
    }
};

