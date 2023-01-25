import { Color } from "../../helper/color.js";
import { VertexAttrib } from "../../helper/interfaces.js";
import { Buffer } from "../buffer.js";
import { gl } from "../gl.js";
import { Program } from "../program.js";
import { shaders } from "../shaders.js";

const limit = 1024;

export class Light {
    static program = new Program(
        shaders.light?.vert as WebGLShader, 
        shaders.light?.frag as WebGLShader);
    static attribs = Light.program.initAttributes({
        pos: {
            type: gl.SHORT,
        },
        size: {
            type: gl.UNSIGNED_BYTE,
        },
        color: {
            type: gl.UNSIGNED_BYTE,
        }
    } as { [key: string]: VertexAttrib });

    static buffer = new Buffer(limit, Light.program.attributes);
    
    data: DataView
    index = -1
    constructor(x = 0, y = 0, size = 0) {
        this.data = Light.buffer.addEntity(this);
        this.size = size;
        this.x = x;
        this.y = y;

    }
    set pos(pos: number[]) {
        Light.attribs.pos?.setValues?.(this.data, pos);
    }
    get pos() {
        return Light.attribs.pos?.getValues?.(this.data) as number[];
    }
    set x(value: number) {
        this.data.setInt16(0, value, true);
    }
    get x() {
        return this.data.getInt16(0, true);
    }

    set y(value: number) {
        this.data.setInt16(2, value, true);
    }
    get y() {
        return this.data.getInt16(2, true);
    }

    set size(value: number) {
        Light.attribs.size?.setValue?.(this.data, value);
    }
    get size() {
        return Light.attribs.size?.getValue?.(this.data) as number;
    }

    set color(color: Color) {
        Light.attribs.color?.setValues?.(this.data, Array.from(color));
    }
    get color() {
        return new Color(Light.attribs.size?.getValues?.(this.data) as number[]);
    }


    static draw() {
        gl.useProgram(Light.program.id);
        Light.buffer.use();
        gl.drawArrays(gl.POINTS, 0, Light.buffer.elements.length);
        gl.bindVertexArray(null);
        gl.useProgram(null);

    }

}
