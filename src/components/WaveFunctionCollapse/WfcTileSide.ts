import { Vec4 } from "../vectors.js";

export class WfcTileSide {
    connectors: number[] = [];
    type: number = 0;
    constructor(colors: Vec4[]) {
        this.connectors = colors.map(c => c.r);

    }


    connects(side: WfcTileSide): boolean {
        for (let i = 0; i < this.connectors.length; i++) {
            if (this.connectors[i] != side.connectors[i]) return false;
        }
        return true;
    }
}