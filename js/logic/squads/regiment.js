import { Point } from "../../helper/point.js";
export class Regiment {
    constructor(leader) {
        this.members = [];
        this.offsets = [];
        this.width = 5;
        this.leader = leader;
    }
    update() {
        this.refreshOffsets();
        this.members.forEach((m, i) => {
            m.destination = this.getGlobalPosition(i) || m.destination;
        });
    }
    setLeader(m) {
        if (this.leader !== m) {
            this.leader = m;
            let i = this.members.indexOf(m);
            if (i < 0) {
                i = this.addMember(m) - 1;
            }
            if (i > 0) {
                this.swapPositions(0, i);
            }
        }
    }
    addMember(m) {
        const n = this.members.push(m);
        if (n > this.offsets.length) {
            this.offsets.push(this.calcMemberOffset(n));
        }
        return n;
    }
    swapPositions(i1, i2) {
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
            this.offsets.push(this.calcMemberOffset(i + 1));
        }
    }
    getGlobalPosition(n) {
        let offset = this.offsets[n];
        console.log(offset?.toString());
        if (this.leader && offset) {
            let dir = this.leader.direction.normalized;
            offset = dir.rotatedLeft.resize(offset.x).getSum(dir.inverted.resize(offset.y));
            return this.leader.getSum(offset);
        }
        const m = this.members[n];
        if (m) {
            return m;
        }
        return new Point(-1, -1);
    }
    calcMemberOffset(n) {
        const offset = new Point(0, 0);
        offset.y = Math.floor(n / this.width);
        offset.x = (n % this.width) % 2;
        n = n % this.width;
        offset.x = (n % 2) ? -Math.ceil(n / 2) : n / 2;
        if (this.leader.direction.x < 0) {
            offset.x *= -1;
        }
        return offset;
    }
}
//# sourceMappingURL=regiment.js.map