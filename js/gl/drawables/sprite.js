export class Sprite {
    constructor(vboPos, vboTex, spriteIndex) {
        this.vboPos = vboPos;
        this.vboTex = vboTex;
        this.i = spriteIndex;
    }
    get x() { return this.vboPos.getVertex(this.i, 0); }
    get y() { return this.vboPos.getVertex(this.i, 1); }
    get tx() { return this.vboTex.getVertex(this.i, 0); }
    get ty() { return this.vboTex.getVertex(this.i, 1); }
    get size() { return this.vboTex.getVertex(this.i, 2); }
    set x(v) { this.vboPos.setVertex(v, this.i, 0); }
    set y(v) { this.vboPos.setVertex(v, this.i, 1); }
    set tx(v) { this.vboTex.setVertex(v, this.i, 0); }
    set ty(v) { this.vboTex.setVertex(v, this.i, 1); }
    set size(v) { this.vboTex.setVertex(v, this.i, 2); }
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