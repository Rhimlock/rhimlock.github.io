import { Point } from "../../helper/point.js";
import { ActiveObject } from "../gameObjects/activeObject.js";
import { Squad } from "./squad.js";

export class Flock implements Squad {
    leader : ActiveObject;
    boids : ActiveObject[] = [];
    constructor(leader: ActiveObject) {
        this.leader = leader;
        this.setLeader(leader);
    }
    setLeader(leader: ActiveObject): void {
        this.leader = leader;
    }
    addMember(m: ActiveObject): number {
      return this.boids.push(m);
    }
    getGlobalPosition(n: number): Point {
        const boid = this.boids[n];
        return boid?.getSum(boid?.direction) || new Point(0,0);
    }

    update(): void {
        this.boids.forEach((boid) => {
            const collisions : ActiveObject[] = this.boids.filter(b => {
                return (b !== boid && boid.getVectorTo(b).length < 1) 
            });
            const separation = new Point(0,0);
            const align = new Point(0,0);
            const cohesion = new Point(0,0);
            collisions.forEach(b => {
                separation.move(b.getVectorTo(boid).normalized);
                //align.move(b.direction.normalized);
                cohesion.move(b);
            });
            let dir = new Point(0,0);
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