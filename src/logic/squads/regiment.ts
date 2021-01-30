import { Point } from "../../helper/point.js";
import { ActiveObject } from "../gameObjects/activeObject.js";
import { Squad } from "./squad.js";

export class Regiment implements Squad {
    leader : ActiveObject | null = null;
    members : ActiveObject [] = [];
    offsets : Point[] = [];
    width: number = 5;

    update(): void {
        this.members.forEach((m,i) => {
            m.destination = this.getGlobalPosition(i) || m.destination;
        })
    }

    setLeader(m : ActiveObject) {
        if (this.leader !== m) {
            this.leader = m;
            let i = this.members.indexOf(m);
            if (i < 0) {
                i = this.addMember(m) -1;
            }
            if (i > 0) {
                this.swapPositions(0,i);
            } 
        }
    }
    addMember(m : ActiveObject) : number {
        const n = this.members.push(m);
        if (n > this.offsets.length) {
            this.offsets.push(this.calcMemberOffset(n));
        }
        return n;
    }
   
    swapPositions(i1: number, i2: number) {
        if (this.members[i1] && this.members[i2]) {
            const tmp1 = this.members[i1];
            const tmp2 = this.members[i2];
            if (tmp1 && tmp2) {
                this.members[i1] = tmp2;
                this.members[i2] = tmp1;
            }
        }                
    }

    refreshOffsets() {
        this.offsets = [];
        for (let i = 0; i < this.members.length; ++i) {
            this.offsets.push(this.calcMemberOffset(i));
        }
    }

    getGlobalPosition(n : number) : Point {
        let offset = this.offsets[n];
        if (this.leader && offset) {
            let dir = this.leader.direction.normalized;
            offset =  dir.rotatedLeft.resize(offset.x).getSum(
                dir.inverted.resize(offset.y)
            )
            return this.leader.getSum(offset);
        } 
        const m = this.members[n];
        if (m) {
            return m;
        }
        return new Point (-1,-1);
         
    }

    calcMemberOffset(n : number) {
        const offset = new Point(0, 0);
        offset.y = Math.floor(n / this.width);
        offset.x = (n % this.width) % 2;
        n = n % this.width;
        offset.x = (n % 2) ? - Math.ceil(n / 2) : n / 2;
        return offset;
    }
}