import { Vec2, Vec4 } from "../vectors.js";
import { WfcTileSide } from "./WfcTileSide.js";

export class WfcTile {
    texPos: Vec2;
    sides: WfcTileSide[];
    pixels: Vec4[];
    constructor (pixels: Vec4[], texPos: Vec2) {
        this.pixels = pixels;
        this.texPos = texPos;
        this.sides = [];
        const size = Math.sqrt(this.pixels.length);
        if (pixels.length > 4) {

            this.sides.push(new WfcTileSide([pixels[0] as Vec4,pixels[size-1] as Vec4]));
            this.sides.push(new WfcTileSide([pixels[size-1] as Vec4,pixels[pixels.length-1] as Vec4]));
            this.sides.push(new WfcTileSide([pixels[pixels.length-size+1] as Vec4,pixels[pixels.length-1] as Vec4]));
            this.sides.push(new WfcTileSide([pixels[0] as Vec4,pixels[pixels.length+1-size] as Vec4]));
        }
    }

    get top() {
        return this.sides[0] as WfcTileSide;
    }
    get right() {
        return this.sides[1] as WfcTileSide;
    }
    get bottom() {
        return this.sides[2] as WfcTileSide;
    }
    get left() {
        return this.sides[3] as WfcTileSide;
    }

    equals(side:WfcTileSide | undefined, i:number) {
        return !side ?? this.sides[i]?.connects(side as WfcTileSide);
    }

    equalsTop(side:WfcTileSide | undefined) {
        return !side ?? this.top.connects(side as WfcTileSide);
    }
    equalsRight(side:WfcTileSide | undefined) {
        return !side ?? this.right.connects(side as WfcTileSide);
    }
    equalsBottom(side:WfcTileSide | undefined) {
        return !side ?? this.bottom.connects(side as WfcTileSide);
    }
    equalsLeft(side:WfcTileSide | undefined) {
        return !side ?? this.left.connects(side as WfcTileSide);
    }
}