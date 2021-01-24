import { Point } from "../../helper/point.js";
import { BaseObject } from "./baseObject.js";

export class ActiveObject extends BaseObject {
    direction = new Point(0, 0);
    destination: Point | null = null;
    flipped = false;
    speed = 10;
    squad: ActiveObject[] = [];

    addSquaddy(squaddy: ActiveObject) {
        this.squad.push(squaddy);
        
        squaddy.destination = this.getSum(this.calcGlobalSquaddieOffset(this.squad.length));
    }


    update(elapsedTime: number, objects: BaseObject[]) {

        if (this.destination) {
            const dir = this.getVectorTo(this.destination);
            const distance = dir.length;
            if (distance < 0.5) {
                this.destination = null;
                this.direction = new Point(0, 0);
            } else {
                dir.resize(this.speed / distance * elapsedTime);

                objects.forEach(o => {
                    const x = dir.x;
                    const y = dir.y;
                    if ((this !== o) && this.collidesWith(dir, o)) {
                        switch (dir.checkAngle(this.getVectorTo(o))) {
                            case (-1): dir.rotateLeft(); break;
                            case (0): this.rotateRight(); break;
                            case (1): this.rotateRight(); break;
                        }
                        dir.move(new Point(x, y));
                        dir.resize(0.5);

                    }
                });
                this.direction = dir;
                switch(Math.sign(dir.x)) {
                    case -1 : this.flipped = true; break;
                    case 1: this.flipped = false;
                }
                if (this.flipped !== this.sprite.flipped) this.sprite.flipped = this.flipped;
            }
            this.move(this.direction);
            if (this.direction.length > 0) {
                this.squad.forEach((e, n) => {
                    e.destination = this.getSum(this.calcGlobalSquaddieOffset(n + 1));              
                })
            }

        }
    }
    collidesWith(dir: Point, o: BaseObject) {
        return (this.getSum(dir).getVectorTo(o).length < this.size + o.size);
    }

    calcGlobalSquaddieOffset(n: number) {
        let offset = this.calcLocalSquaddieOffset(n);
        const x = offset.x;
        const dir = this.direction.length > 0 ? this.direction : new Point(1.0,0);
        offset = dir.inverted.normalized.resize(offset.y);
        offset.move(dir.normalized.rotateLeft().resize(x));
        return offset; 
    }
    calcLocalSquaddieOffset(n : number) {
        const w = Math.max(5, Math.ceil(Math.sqrt(this.squad.length)));
        const offset = new Point(0, 0);
        offset.y = Math.floor(n / w);
        offset.x = (n % w) % 2;
        n = n % w;
        offset.x = (n % 2) ? - Math.ceil(n / 2) : n / 2;
        return offset;
    }
}

