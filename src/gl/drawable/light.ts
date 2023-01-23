import { Color } from "../../helper/color.js";
import { VertexAttrib } from "../../helper/interfaces.js";
import { Buffer } from "../buffer.js";
import { gl } from "../gl.js";
import { Program } from "../program.js";
import { shaders } from "../shaders.js";

const program = new Program(shaders.light?.vert as WebGLShader, shaders.light?.frag as WebGLShader);
const attribs = {
    pos: {
        type: gl.SHORT,
    },
    size: {
        type: gl.UNSIGNED_BYTE,
    },
    color: {
        type: gl.UNSIGNED_BYTE,
    }
} as {[key: string] : VertexAttrib};

program.initAttributes(attribs);

export class Light{
    data: DataView
    index = -1
    constructor(buffer: Buffer, x = 0, y = 0, size = 0 ) {
        this.data = buffer.addEntity(this);
        this.size = size;
        this.x = x;
        this.y = y;
        
    }
    set pos(pos: number[]) {
        attribs.pos?.setValues?.(this.data,pos);
    }
    get pos() {
        return attribs.pos?.getValues?.(this.data) as number[];
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
        attribs.size?.setValue?.(this.data, value);
    }
    get size() {
        return attribs.size?.getValue?.(this.data) as number;
    }

    set color(color: Color) {
        attribs.color?.setValues?.(this.data, Array.from(color));
    }
    get color(){
        return new Color(attribs.size?.getValues?.(this.data) as number[]);
    }

    static createBuffer(numberOfRects : number) {
        return new Buffer(numberOfRects, program.attributes);
    }
    
    static getProgram() {
        return program;
    }
    static draw(buffer: Buffer) {
        gl.useProgram(program.id);
        buffer.use();
        gl.drawArrays(gl.POINTS,0, buffer.elements.length);
        gl.bindVertexArray(null);
        gl.useProgram(null);

    }
    
}
