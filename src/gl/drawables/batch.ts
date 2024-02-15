import { view } from "../../helper/view.js";
import { VBO } from "../buffer/vbo.js";
import { gl } from "../gl.js";
import { Attribute } from "../shader/attribute.js";
import { Program } from "../shader/program.js";
import { VAO } from "../vao.js";

export class Batch {
    private buffers: VBO[] = [];
    private vao: VAO;
    protected program: Program;
    private elements: any[] = [];
    private limit: number;

    constructor(elements: number, program: Program) {
        this.limit = elements;
        this.program = program;
        program.attributes.forEach(a => {
            this.buffers.push(new VBO(a.info.type, elements, a.size));
        })

        this.vao = new VAO(this.buffers, this.program.attributes);
    }

    createElement(): any {
        if (this.elements.length >= this.limit) throw ("can't create Element, Batch reached limit");
        const element: any = {};
        const n = this.elements.push(element);
        this.buffers.forEach((buffer, i) => {
            const a = this.program.attributes[i] as Attribute;
            element[a.info.name ?? ""] = buffer.getElement(n-1);
        });
        
        return element;
    }

    removeElement(element: number) {
        const last = this.elements.pop();
        if (element == this.elements.length) return;

        this.buffers.forEach((vbo, i) => {
            vbo.overwrite(element, this.elements.length);
            last[i] = this.elements[element][i];
        })
        this.elements[element] = last;

    }

    draw(progress: number): void {
        this.buffers.forEach(b => b.update());
        gl.useProgram(this.program.id);
        gl.bindVertexArray(this.vao.id);
        gl.uniform2f(this.program.uniforms.uView, view.x, view.y);
        gl.uniform2f(
            this.program.uniforms.uResInv,
            2 / gl.drawingBufferWidth,
            2 / gl.drawingBufferHeight
        );
        gl.uniform1f(this.program.uniforms.uProgress, progress);
        gl.drawArrays(gl.POINTS, 0, this.elements.length);
        gl.bindVertexArray(null);
    }
}