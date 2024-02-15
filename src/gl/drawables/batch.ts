// import { VBO } from "../buffer/vbo.js";
// import { Program } from "../shader/program.js";
// import { VAO } from "../vao.js";

// class Batch {
//     private buffers: VBO[] = [];
//     private vao: VAO;
//     private program: Program;

//     constructor(elements: number, bufferTypes: number[], verticesPerElements: number[], program: Program) {
//         this.program = program;
//         bufferTypes.forEach((type, i) => {
//             this.buffers.push(new VBO(type, elements, verticesPerElements[i] ?? 1));
//         })
//         this.vao = new VAO(this.buffers, this.program.attributes);
//     }
// }