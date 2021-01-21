import { mousePos } from "../../controls/mouse.js";
import { Point } from "../../helper/point.js";
export class Boid {
    constructor(position) {
        this.position = position;
        this.direction = new Point(0, 0);
        this.speed = 5;
    }
    run(boids, elapsedTime) {
        const sep = this.separate(boids).scale(5);
        const coh = this.cohesion(boids);
        const dir = (sep).add(this.direction.normalized).add(coh).add(this.position.diff(mousePos).normalized).normalized;
        this.direction = dir.scale(this.speed);
        this.position = this.position.add(this.direction.scale(elapsedTime * 0.001));
    }
    separate(boids) {
        let dir = new Point(0, 0);
        boids.forEach(b => {
            let diff = b.position.diff(this.position);
            if (diff.length < 1 && b !== this) {
                dir = dir.add(diff.normalized);
            }
        });
        return dir.normalized;
    }
    align(boids) {
        let dir = new Point(0, 0);
        boids.forEach(b => {
            let diff = b.position.diff(this.position);
            if (this !== b && diff.length < 10) {
                dir = dir.add(b.direction.normalized);
            }
        });
        return dir.normalized;
    }
    cohesion(boids) {
        let dir = new Point(0, 0);
        boids.forEach(b => {
            dir = dir.add(b.position);
        });
        dir = dir.scale(1 / boids.length);
        dir = this.position.diff(dir);
        return dir.normalized;
    }
}
//# sourceMappingURL=boid.js.map