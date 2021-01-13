export class Timer {
    constructor(functionToCall, tickTime) {
        this.running = false;
        this.lastTime = 0;
        this.elapsedTime = 0;
        this.func = functionToCall;
        this.tickTime = tickTime ? tickTime : 0;
    }
    start() {
        this.running = true;
        requestAnimationFrame(this.init.bind(this));
    }
    stop() {
        this.running = false;
    }
    toggle() {
        this.running ? this.stop() : this.start();
    }
    init(timestamp) {
        this.lastTime = timestamp;
        requestAnimationFrame(this.frame.bind(this));
    }
    frame(timestamp) {
        const elapsed = timestamp - this.lastTime;
        if (elapsed > this.tickTime) {
            this.elapsedTime += elapsed;
            this.lastTime = timestamp;
            this.func.call(this, elapsed);
        }
        if (this.running)
            requestAnimationFrame(this.frame.bind(this));
    }
}
//# sourceMappingURL=timer.js.map