import { Color } from "../../helper/color.js";
export class Sprite {
    constructor(vboPos, vboTex, vboColor, spriteIndex) {
        this.vboPos = vboPos;
        this.vboTex = vboTex;
        this.vboColor = vboColor;
        this.i = spriteIndex;
    }
    get x() { return this.vboPos.getVertex(this.i, 0); }
    get y() { return this.vboPos.getVertex(this.i, 1); }
    get tx() { return this.vboTex.getVertex(this.i, 0); }
    get ty() { return this.vboTex.getVertex(this.i, 1); }
    get size() { return this.vboTex.getVertex(this.i, 2); }
    get color() {
        return new Color(this.vboColor.getVertex(this.i, 0), this.vboColor.getVertex(this.i, 1), this.vboColor.getVertex(this.i, 2), this.vboColor.getVertex(this.i, 3));
    }
    set x(v) { this.vboPos.setVertex(v, this.i, 0); }
    set y(v) { this.vboPos.setVertex(v, this.i, 1); }
    set tx(v) { this.vboTex.setVertex(v, this.i, 0); }
    set ty(v) { this.vboTex.setVertex(v, this.i, 1); }
    set size(v) { this.vboTex.setVertex(v, this.i, 2); }
    set color(v) {
        this.vboColor.setVertex(v.r, this.i, 0);
        this.vboColor.setVertex(v.g, this.i, 1);
        this.vboColor.setVertex(v.b, this.i, 2);
        this.vboColor.setVertex(v.a, this.i, 3);
    }
    changeIndex(i) {
        const spr = new Sprite(this.vboPos, this.vboTex, this.vboColor, this.i);
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
Sprite.ELEMENTS_PER_COLOR = 4;
//# sourceMappingURL=sprite.js.map