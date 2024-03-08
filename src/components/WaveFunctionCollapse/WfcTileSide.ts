import { Vec} from "../vec.js";

const colors: Vec[] = [];

function addColor(color: Vec) {
    let i = colors.findIndex(c => c.equals(color));
    if (i < 0) i = colors.push(color) - 1;
    return i;
}

function addColors(arr: Vec[]){
    const indices = arr.map(color =>  addColor(color));
    return new Int32Array(indices);
};

export class WfcTileSide extends Vec {
    type: number = 0;
    constructor(colors: Vec[]) {
        super(addColors(colors));
    }
}