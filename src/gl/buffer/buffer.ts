import { gl } from "../gl.js";
import { BufferItemDefinition } from "../helper/interfaces.js";
import { lookupByteSize, nextPowerOf2 } from "../helper/lookups.js";
import { BufferView } from "./bufferview.js";

export class Buffer {
    id : WebGLBuffer
    views : BufferView[] = []
    definition: BufferItemDefinition
    stride : number
    data : ArrayBuffer
    
    target = gl.ARRAY_BUFFER
    usage = gl.STATIC_DRAW

    constructor(definition: BufferItemDefinition, size : number | ArrayBufferView, target = gl.ARRAY_BUFFER, usage = gl.STATIC_DRAW ) {        
        this.stride = calcByteSize(definition);
        this.data = 
            (typeof size === 'number') ?
            new ArrayBuffer(this.stride * size) :
            size.buffer
        ;
        this.definition = definition;        
        this.target = target;
        this.usage = usage        
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
        this.views.forEach(v => console.log(v._data));
        gl.bindBuffer(this.target, this.id);
        gl.bufferData(this.target, this.data, this.usage);
        gl.bindBuffer(this.target, null);
    }
    
    createView() {
        const i = this.views.length * this.stride;
        const view = new BufferView(this.definition, new DataView(this.data, i,this.stride));
        this.views.push(view);
        return view;
    }

}

function calcByteSize(definition: BufferItemDefinition) {
    let size = 0;
    for(const item of Object.values(definition)) {
        size += item.size as number * lookupByteSize(item.type);
    }
    return nextPowerOf2(size);
}