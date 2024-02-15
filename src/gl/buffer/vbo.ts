import { TypedArray } from "../../helper/typedArray.js";
import { gl } from "../gl.js";

export class VBO {
    public id: WebGLBuffer | null;
    public data: ArrayBufferView;
    public type: number;
    public changed = false;
    private verticesPerElement : number;
    
    constructor(type : number, elements : number, verticesPerElement : number) {
        this.id = gl.createBuffer();
        this.type = type;
        this.verticesPerElement = verticesPerElement;
        this.data = getArray(type, elements * verticesPerElement);
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

    getSubArray(element:number, length: number  = 1) {
        const begin = element * this.verticesPerElement;
        const end = begin + length * this.verticesPerElement;
        return (this.data as TypedArray).subarray(begin,end);
    }
}

function getArray(type:number, size : number) {
    switch(type) {
        case gl.UNSIGNED_BYTE: return(new Uint8Array(size));
        case gl.BYTE: return(new Int8Array(size));
        case gl.UNSIGNED_SHORT: return(new Uint16Array(size));
        case gl.SHORT: return(new Int16Array(size));
        case gl.UNSIGNED_INT: return(new Uint32Array(size));
        case gl.INT: return(new Int32Array(size));
        case gl.FLOAT: return(new Float32Array(size));
        default: throw ("Unknown type for VBO: " + type);
    }
}
