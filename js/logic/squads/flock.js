import { Point } from "../../helper/point.js";
export class Flock {
    constructor(leader) {
        this.boids = [];
        this.leader = leader;
        this.setLeader(leader);
    }
    setLeader(leader) {
        this.leader = leader;
    }
    addMember(m) {
        return this.boids.push(m);
    }
    getGlobalPosition(n) {
        const boid = this.boids[n];
        return boid?.getSum(boid?.direction) || new Point(0, 0);
    }
    update() {
        this.boids.forEach((boid) => {
            const collisions = this.boids.filter(b => {
                return (b !== boid && boid.getVectorTo(b).length < 1);
            });
            const separation = new Point(0, 0);
            const align = new Point(0, 0);
            const cohesion = new Point(0, 0);
            collisions.forEach(b => {
                separation.move(b.getVectorTo(boid).normalized);
                cohesion.move(b);
            });
            let dir = new Point(0, 0);
            if (boid.destination) {
                dir = boid.getVectorTo(boid?.destination).normalized;
            }
            dir.move(separation.normalized);
            dir.move(align.normalized);
            dir.move(cohesion.normalized);
            dir.move(boid.getVectorTo(this.leader).normalized);
            dir = dir.normalized;
            boid.destination = boid.getSum(dir);
            const distance = boid.getVectorTo(this.leader).length;
            if (distance < 1
                || boid.destination.getVectorTo(this.leader).length >= distance) {
                boid.destination = null;
            }
        });
    }
}
//# sourceMappingURL=flock.js.map