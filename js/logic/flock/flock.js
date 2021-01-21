import { Point } from "../../helper/point.js";
import { Boid } from "./boid.js";
export class Flock {
    constructor() {
        this.boids = [];
    }
    run(elapsedTime) {
        this.boids.forEach(boid => boid.run(this.boids, elapsedTime));
    }
    addBoid(x, y) {
        const b = new Boid(new Point(x, y));
        this.boids.push(b);
        return b;
    }
}
//# sourceMappingURL=flock.js.map