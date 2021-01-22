import { Color } from "../../helper/color.js";
import { Point } from "../../helper/point.js";
import { view } from "../../helper/view.js";
export class Sprite extends Point {
    constructor(vboPos, vboTex, vboColor, spriteIndex) {
        super(0, 0);
        this.vboPos = vboPos;
        this.vboTex = vboTex;
        this.vboColor = vboColor;
        this.i = spriteIndex;
    }
    get x() { return this.vboPos.getVertex(this.i, 0) / view.tileSize; }
    get y() { return this.vboPos.getVertex(this.i, 1) / view.tileSize; }
    get tx() { return this.vboTex.getVertex(this.i, 0) / view.tileSize; }
    get ty() { return this.vboTex.getVertex(this.i, 1) / view.tileSize; }
    get size() { return this.vboTex.getVertex(this.i, 2) / view.tileSize; }
    get flipped() { return this.vboTex.getVertex(this.i, 3); }
    get color() {
        return new Color(this.vboColor?.getVertex(this.i, 0), this.vboColor?.getVertex(this.i, 1), this.vboColor?.getVertex(this.i, 2), this.vboColor?.getVertex(this.i, 3));
    }
    set x(v) { this.vboPos.setVertex(v * view.tileSize, this.i, 0); }
    set y(v) { this.vboPos.setVertex(v * view.tileSize, this.i, 1); }
    set tx(v) { this.vboTex.setVertex(v * view.tileSize, this.i, 0); }
    set ty(v) { this.vboTex.setVertex(v * view.tileSize, this.i, 1); }
    set size(v) { this.vboTex.setVertex(v * view.tileSize, this.i, 2); }
    set flipped(v) { this.vboTex.setVertex(v ? 1 : 0, this.i, 3); }
    set color(v) {
        this.vboColor?.setVertex(v.r, this.i, 0);
        this.vboColor?.setVertex(v.g, this.i, 1);
        this.vboColor?.setVertex(v.b, this.i, 2);
        this.vboColor?.setVertex(v.a, this.i, 3);
    }
    changeIndex(i) {
        const spr = new Sprite(this.vboPos, this.vboTex, this.vboColor, this.i);
        this.i = i;
        this.x = spr.x;
        this.y = spr.y;
        this.tx = spr.tx;
        this.ty = spr.ty;
        this.size = spr.size;
        this.flipped = spr.flipped;
        this.color = spr.color;
    }
}
Sprite.ELEMENTS_PER_POSITION = 2;
Sprite.ELEMENTS_PER_TEXTURE = 4;
Sprite.ELEMENTS_PER_COLOR = 4;
//# sourceMappingURL=sprite.js.map