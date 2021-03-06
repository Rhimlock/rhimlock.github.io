import { Color } from "../../helper/color.js";
import { Point } from "../../helper/point.js";
import { view } from "../../helper/view.js";
import { VBO } from "../vbo.js";

export class Sprite extends Point {
    public static ELEMENTS_PER_POSITION = 2;
    public static ELEMENTS_PER_TEXTURE = 3;
    public static ELEMENTS_PER_COLOR = 4;
    private vboPos: VBO;
    private vboTex: VBO;
    private vboColor: VBO | null;
    private i: number;
    constructor(vboPos: VBO, vboTex: VBO, vboColor: VBO | null, spriteIndex: number) {
        super(0,0);
        this.vboPos = vboPos;
        this.vboTex = vboTex;
        this.vboColor = vboColor;
        this.i = spriteIndex;
    }

    get x() { return this.vboPos.getVertex(this.i, 0) as number / view.tileSize }
    get y() { return this.vboPos.getVertex(this.i, 1) as number / view.tileSize }

    get tx() { return this.vboTex.getVertex(this.i, 0) as number/ view.tileSize }
    get ty() { return this.vboTex.getVertex(this.i, 1) as number / view.tileSize}
    get size() { return this.vboTex.getVertex(this.i, 2) as number/ view.tileSize }
    get color() {
        return new Color(
            this.vboColor?.getVertex(this.i, 0) as number,
            this.vboColor?.getVertex(this.i, 1) as number,
            this.vboColor?.getVertex(this.i, 2) as number,
            this.vboColor?.getVertex(this.i, 3) as number
        );
    }

    set x(v: number) { this.vboPos.setVertex(v  * view.tileSize, this.i, 0); }
    set y(v: number) { this.vboPos.setVertex(v  * view.tileSize, this.i, 1); }

    set tx(v: number) { this.vboTex.setVertex(v * view.tileSize, this.i, 0); }
    set ty(v: number) { this.vboTex.setVertex(v * view.tileSize, this.i, 1); }
    set size(v: number) { this.vboTex.setVertex(v * view.tileSize, this.i, 2); }
    
    set color(v: Color) {
        this.vboColor?.setVertex(v.r, this.i, 0);
        this.vboColor?.setVertex(v.g, this.i, 1);
        this.vboColor?.setVertex(v.b, this.i, 2);
        this.vboColor?.setVertex(v.a, this.i, 3);

    }

    changeIndex(i: number) {
        const spr = new Sprite(this.vboPos, this.vboTex, this.vboColor, this.i);
        this.i = i;
        this.x = spr.x;
        this.y = spr.y;
        this.tx = spr.tx;
        this.ty = spr.ty;
        this.size = spr.size;
        this.color = spr.color;
    }
}