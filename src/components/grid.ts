import { DIR } from "./directions.js";
import { Vec2 } from "./vectors.js";

export class Field {
    pos:Vec2
    neighbours: any[] = []
    get top() {
        return this.neighbours[0];
    }
    get right() {
        return this.neighbours[0];
    }
    get bottom() {
        return this.neighbours[0];
    }
    get left() {
        return this.neighbours[0];
    }
    constructor(pos: Vec2) {
        this.pos = pos;
    }

}

export class Grid {
    size:Vec2;
    fields:Field[] = [];
    constructor(size:Vec2, values: any[] | undefined) {
        this.size = size;
        if (values) {
            this.fields = values;
        } else {
            for (let i = 0 ; i <(size.x*size.y); i++) this.fields.push(new Field(new Vec2([i % size.x, Math.floor(i / size.x)])));
        }
       
        for(let i = 0; i < this.fields.length; i++) {
            const f = this.fields[i] as Field;
            DIR.array.forEach(dir => f.neighbours.push(this.getField(Vec2.sum(f.pos, dir))));
        }
    }

    getField(pos:Vec2) {
        return this.fields[pos.x + pos.y * this.size.x];
    }
}