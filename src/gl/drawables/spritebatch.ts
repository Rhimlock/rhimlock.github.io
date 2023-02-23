import { Vertex } from "../basics/arraybuffer/vertex.js";
import { Program } from "../basics/pipeline/program.js";
import { VertexArray } from "../basics/arraybuffer/vertexarray.js";
import { Texture } from "../basics/texture.js"
import { gl } from "../gl.js";

export class SpriteBatch{
    
    sprites : Sprite[] = []
    texture : Texture
    vao : VertexArray
    constructor(maxNumberOfSprites : number, texture: Texture) {
        this.texture = texture;
        this.vao = new VertexArray(program.attributes, maxNumberOfSprites);
    }

    createSprite(pos : number[],texPos : number[], size : number) {
        const sprite = this.vao.addVertex({
            aPos :pos, 
            aTexPos : texPos, 
            aSize : size}) as Sprite;
        this.sprites.push(sprite);
        return sprite;
    }

    draw() {
        this.vao.sync();
        program.draw(this.vao, {u_texture : this.texture.no, uTexSizeInv : this.texture.sizeInv});
    }

}

const program = new Program("sprite");
program.mode = gl.POINTS;

export interface Sprite extends Vertex{
    aPos : number[]
    aTexPos : number[]
    aSize : number
}