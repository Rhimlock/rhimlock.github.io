import { Vec4, Vector} from "../vectors.js";

const colors: Vec4[] = [];

function addColor(color: Vec4) {
    let i = colors.findIndex(c => c.equals(color));
    if (i < 0) i = colors.push(color) - 1;
    return i;
}

function addColors(arr: Vec4[]){
    return arr.map(color =>  addColor(color))
};

export class WfcTileSide extends Vector {
    type: number = 0;
    constructor(colors: Vec4[]) {
        super(addColors(colors));
    }

    equals(side: WfcTileSide): boolean {
        return this.data.every((c,i) => c === side.data[i]);
    }
}