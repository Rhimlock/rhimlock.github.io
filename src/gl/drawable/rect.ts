import { Buffer } from "../buffer.js";
import { gl } from "../gl.js";
import { Program } from "../program.js";
import { shaders } from "../shaders.js";

const program = new Program(shaders.rect?.vert as string, shaders.rect?.frag as string);

program.initAttributes( [
    {
        name: 'pos',
        type: gl.SHORT,
    },
    {
        name: 'size',
        type: gl.UNSIGNED_BYTE
    }
]);

export class Rect{
    data: DataView
    index = -1
    buffer: Buffer
    constructor(buffer: Buffer, x = 0, y = 0, size = 0 ) {
        this.buffer = buffer;
        this.data = buffer.addEntity(this);
        this.size = size;
        this.x = x;
        this.y = y;
        
    }
    set x(value: number) {
        this.data.setInt16(0,value,true);
    }
    get x() {
        return this.data.getInt16(0,true);
    }

    set y(value: number) {
        this.data.setInt16(2,value,true);
    }
    get y() {
        return this.data.getInt16(2,true);
    }

    set size(value: number) {
        this.data.setUint8(4,value);
    }
    get size() {
        return this.data.getUint8(4);
    }

    static createBuffer(numberOfRects : number) {
        return new Buffer(numberOfRects, program.attributes);
    }
    
    static getProgram() {
        return program;
    }
    
}
