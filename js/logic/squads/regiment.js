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
            if (i >= 0) {
                this.swapPositions(this.members.length - 1, i);
                this.members.pop();
            }
        }
    }
    addMember(m) {
        const n = this.members.push(m);
        if (n > this.offsets.length) {
            this.offsets.push(this.calcMemberOffset(n - 1));
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
        this.width = Math.ceil(Math.sqrt(this.members.length));
        this.offsets = [];
        for (let i = 0; i < this.members.length; ++i) {
            this.offsets.push(this.calcMemberOffset(i + 1));
        }
    }
    getGlobalPosition(n) {
        let offset = this.offsets[n];
        if (this.leader && offset) {
            let dir = this.leader.direction.normalized;
            offset = dir.rotatedLeft.resize(offset.x).getSum(dir.inverted.resize(offset.y));
            return this.leader.getSum(offset);
        }
        const m = this.members[n];
        if (m) {
            console.log(n, m.toString());
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
        return offset;
    }
}
//# sourceMappingURL=regiment.js.map