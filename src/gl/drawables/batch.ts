import { Vector } from "../../components/vectors.js";
import { view } from "../../helper/view.js";
import { VBO } from "../buffer/vbo.js";
import { gl } from "../gl.js";
import { Attribute } from "../shader/attribute.js";
import { Program } from "../shader/program.js";
import { VAO } from "../vao.js";

export interface BufferInfo {
  type: number;
  normalized?: boolean;
}

export interface Element {
  [key: string]: Vector;
}

export class Batch {
  private buffers: VBO[] = [];
  private vao: VAO;
  protected program: Program;
  private elements: any[] = [];
  private limit: number;

  constructor(elements: number, program: Program, info: BufferInfo[] = []) {
    this.limit = elements;
    this.program = program;
    program.attributes.forEach((a, i) => {
      this.buffers.push(
        new VBO(
          info[i]?.type ?? a.info.type,
          elements,
          a.size,
          info[i]?.normalized,
        ),
      );
    });

    this.vao = new VAO(this.buffers, this.program.attributes);
  }

  createElement(): Element {
    if (this.elements.length >= this.limit)
      throw "can't create Element, Batch reached limit";
    const element: any = {};
    const n = this.elements.push(element);
    return this.getElement(n - 1);
  }

  removeElement(i: number = this.elements.length - 1) {
    const last = this.elements.pop();
    if (i == this.elements.length) return;

    this.buffers.forEach((vbo, n) => {
      vbo.overwrite(i, this.elements.length);
      last[i] = this.elements[i][n];
    });
    this.elements[i] = last;
  }

  getElement(i: number) {
    const element: Element = {};
    this.buffers.forEach((buffer, n) => {
      const a = this.program.attributes[n] as Attribute;
      element[a.info.name ?? ""] = buffer.getVector(i);
    });
    return element;
  }

  updateUniforms(progress: number) {
    const unis = this.program.uniforms;
    gl.uniform2f(unis.uView, view.x, view.y);
    gl.uniform2f(
      unis.uResInv,
      2 / gl.drawingBufferWidth,
      2 / gl.drawingBufferHeight,
    );
    gl.uniform1f(unis.uProgress, progress);
  }

  draw(progress: number = 0): void {
    this.buffers.forEach((b) => b.update());
    gl.useProgram(this.program.id);
    gl.bindVertexArray(this.vao.id);
    this.updateUniforms(progress);
    gl.drawArrays(gl.POINTS, 0, this.elements.length);
    gl.bindVertexArray(null);
  }
}
