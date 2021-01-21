import { mousePos } from "../../controls/mouse.js";
import { Point } from "../../helper/point.js";

export class Boid {
    position: Point
    direction: Point
    speed: number

    constructor(position: Point) {
        this.position = position;
        this.direction = new Point(0, 0);
        this.speed = 5;
    }
    run(boids: Boid[], elapsedTime : number) {
        const sep = this.separate(boids).scale(5);
        //const ali = this.align(boids);
        const coh = this.cohesion(boids);
        const dir = (sep).add(this.direction.normalized).add(coh).add(this.position.diff(mousePos).normalized).normalized;

        this.direction = dir.scale(this.speed);
        this.position = this.position.add(this.direction.scale(elapsedTime*0.001));
    }

    separate(boids: Boid[]): Point {
        let dir = new Point(0, 0);
        boids.forEach(b => {
            let diff = b.position.diff(this.position);
            if (diff.length < 1 && b !== this) {
                dir = dir.add(diff.normalized);
            }
        })
        return dir.normalized;
    }

    align(boids: Boid[]): Point {
        let dir = new Point(0, 0);
        boids.forEach(b => {
            let diff = b.position.diff(this.position);
            if (this !== b && diff.length < 10) {
                dir = dir.add(b.direction.normalized);
            }
        })
        return dir.normalized;
    }

    cohesion(boids: Boid[]): Point {
        let dir = new Point(0, 0);
        boids.forEach(b => {
            dir = dir.add(b.position);
        })
        dir = dir.scale(1 / boids.length);
        dir = this.position.diff(dir);
        return dir.normalized;
    }
}
