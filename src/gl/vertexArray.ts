import { gl } from "./gl.js";

export class VertexArray{
    id: WebGLVertexArrayObject;

    constructor() {
        this.id = gl.createVertexArray() as WebGLVertexArrayObject;
    }
}