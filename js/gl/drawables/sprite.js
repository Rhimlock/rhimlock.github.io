export class Sprite {
    constructor(vboPos, vboTex, spriteIndex) {
        this.vboPos = vboPos;
        this.vboTex = vboTex;
        this.i = spriteIndex;
    }
    get x() { return this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION]; }
    ;
    get y() { return this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION + 1]; }
    ;
    get tx() { return this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE]; }
    ;
    get ty() { return this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 1]; }
    ;
    get size() { return this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 2]; }
    ;
    set x(v) {
        this.vboPos.changed = true;
        this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION] = v;
    }
    ;
    set y(v) {
        this.vboPos.changed = true;
        this.vboPos.int16Array[this.i * Sprite.ELEMENTS_PER_POSITION + 1] = v;
    }
    ;
    set tx(v) {
        this.vboTex.changed = true;
        this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE] = v;
    }
    ;
    set ty(v) {
        this.vboTex.changed = true;
        this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 1] = v;
    }
    ;
    set size(v) {
        this.vboTex.changed = true;
        this.vboTex.int16Array[this.i * Sprite.ELEMENTS_PER_TEXTURE + 2] = v;
    }
    ;
    changeIndex(i) {
        const spr = new Sprite(this.vboPos, this.vboTex, this.i);
        this.i = i;
        this.x = spr.x;
        this.y = spr.y;
        this.tx = spr.tx;
        this.ty = spr.ty;
        this.size = spr.size;
    }
}
Sprite.ELEMENTS_PER_POSITION = 2;
Sprite.ELEMENTS_PER_TEXTURE = 3;
//# sourceMappingURL=sprite.js.map