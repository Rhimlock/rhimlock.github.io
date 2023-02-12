import { gl } from "../gl.js";
import { BufferItem } from "../helper/interfaces.js";
import { lookupByteSize } from "../helper/lookups.js";
import { BufferView } from "./bufferview.js";

export class Buffer {
    id : WebGLBuffer
    views : BufferView[] = []
    definition: { [key:string] :BufferItem}
    stride : number
    data : DataView
    
    target = gl.ARRAY_BUFFER
    usage = gl.STATIC_DRAW

    constructor(definition: { [key:string] :BufferItem}, size : number | ArrayBufferView, target = gl.ARRAY_BUFFER, usage = gl.STATIC_DRAW ) {        
        this.stride = calcByteSize(definition);
        this.data = new DataView(
            (typeof size === 'number') ?
            new ArrayBuffer(this.stride * size) :
            size.buffer
            );
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
        gl.bindBuffer(this.target, this.id);
        gl.bufferSubData(this.target, 0, this.data, this.usage);
        gl.bindBuffer(this.target, null);
    }
    
    createView() {
        const i = this.views.length * this.stride;
        const view = new BufferView(this.definition, this.data.buffer.slice(i,this.stride));
        this.views.push(view);
        return view;
    }

}

function calcByteSize(definition: { [key:string] :BufferItem}) {
    let size = 0;
    for(const item of Object.values(definition)) {
        size += item.size as number * lookupByteSize(item.type);
    }
    return size;
}