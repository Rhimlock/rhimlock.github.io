import { Vec } from "../../components/vec.js";
import { Collection } from "../../helper/Collection.js";
import { VBO } from "../buffer/vbo.js";
import { gl } from "../gl.js";
import { getNumComponents } from "../mapper.js";
import { Program } from "../shader/program.js";
import { VAO } from "../vao.js";

export interface BufferInfo {
  type: number;
  normalized?: boolean;
}

export class Drawable {
  protected buffers: VBO[] = [];
  private vao: VAO;
  protected program: Program;
  private vertices: Collection<Vec>[] = [];
  protected mode: number = gl.POINTS;
  protected limit: number;

  constructor(count: number, program: Program, info: BufferInfo[] = []) {
    this.limit = count;
    this.program = program;
    program.attributes.forEach((a, i) => {
      this.buffers.push(
        new VBO(
          info[i]?.type ?? a.type,
          getNumComponents(a.type),
          count,
          info[i]?.normalized,
        ),
      );
    });
    this.vao = new VAO(this.buffers);
  }

  createVertex(): Collection<Vec> {
    if (this.vertices.length >= this.limit)
      throw "can't create Element, Buffer reached limit";
    const vertex: Collection<Vec> = {};
    const n = this.vertices.push(vertex);
    return this.getVertex(n - 1);
  }

  removeVertex(i: number = this.vertices.length - 1) {
    const last = this.vertices.pop();
    if (i == this.vertices.length) return;

    this.buffers.forEach((vbo) => {
      vbo.setVector(i, vbo.getVector(this.vertices.length));
    });
    this.vertices[i] = last as Collection<Vec>;
  }

  getVertex(i: number) {
    const element: Collection<Vec> = {};
    this.buffers.forEach((buffer, n) => {
      const a = this.program.attributes[n] as WebGLActiveInfo;
      element[a.name ?? ""] = new Vec(buffer.getVector(i));
    });
    return element;
  }

  updateUniforms(progress: number) {
    this.program.setUniform("uProgress", progress);
  }

  draw(progress: number = 0): void {
    this.buffers.forEach((b) => b.update());
    gl.useProgram(this.program.id);
    gl.bindVertexArray(this.vao.id);
    this.updateUniforms(progress);
    gl.drawArrays(this.mode, 0, this.vertices.length);
    gl.bindVertexArray(null);
    this.postDraw();
  }

  preDraw() {}
  postDraw() {}
}
