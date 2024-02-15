import { Vec2, Vec3, Vec4 } from "../../components/vectors.js";

export class Sprite {
    public static ELEMENTS_PER_POSITION = 2;
    public static ELEMENTS_PER_TEXTURE = 3;
    public static ELEMENTS_PER_COLOR = 4;
    public pos: Vec2;
    public tex: Vec3;
    public color: Vec4 | null;
    constructor(pos: Vec2, tex: Vec3, color: Vec4 | null) {
        this.pos = pos;
        this.tex = tex;
        this.color = color;
    }

}