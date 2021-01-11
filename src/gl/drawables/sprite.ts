import { VBO } from "../vbo.js";

export class Sprite {
    public static ELEMENTS_PER_POSITION = 2;
    public static ELEMENTS_PER_TEXTURE = 3;
    private vboPos: VBO;
    private vboTex: VBO;
    private i: number;
    constructor(vboPos: VBO, vboTex: VBO, spriteIndex: number) {
        this.vboPos = vboPos;
        this.vboTex = vboTex;
        this.i = spriteIndex;
    }

    get x(): number { return this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION] as number };
    get y(): number { return this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION + 1] as number};
    get tx(): number { return this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE] as number};
    get ty(): number { return this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 1] as number};
    get size(): number { return this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 2] as number};

    set x(v: number) {
        this.vboPos.changed = true;
        this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION] = v
    };
    set y(v: number) {
        this.vboPos.changed = true;
        this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION + 1] = v
    };
    set tx(v: number) {
        this.vboTex.changed = true;
        this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE] = v
    };
    set ty(v: number) {
        this.vboTex.changed = true;
        this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 1] = v
    };
    set size(v: number) {
        this.vboTex.changed = true;
        this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 2] = v
    };

    changeIndex(i: number) {
        const spr = new Sprite(this.vboPos, this.vboTex, this.i);
        this.i = i;
        this.x = spr.x;
        this.y = spr.y;
        this.tx = spr.tx;
        this.ty = spr.ty;
        this.size = spr.size;
    }
}