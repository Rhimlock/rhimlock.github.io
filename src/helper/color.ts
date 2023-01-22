export class Color extends Uint8Array {

    constructor(rgba: number[]) {
        super(rgba);
    }
    get r() {
        return this[0] as number;
    }
    set r(value: number) {
        this[0] = value;
    }

    get g() {
        return this[1] as number;
    }
    set g(value: number) {
        this[1] = value;
    }

    get b() {
        return this[2] as number;
    }
    set b(value: number) {
        this[2] = value;
    }

    get a() {
        if (this[3] == undefined) {
            return 255;
        } else {
            return this[3];
        }
        return this[3]??255 as number;
    }
    set a(value: number) {
        if (this[3] == undefined) {
            const arr = Array.from(this);
            arr.push(value);
           this.set(arr);
        }
        this[3] = value;
    }
}