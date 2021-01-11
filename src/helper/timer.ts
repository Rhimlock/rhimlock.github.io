export class Timer {

    public running = false;
    private func: Function;
    private tickTime : number;

    private lastTime = 0;
    public elapsedTime = 0;

    constructor(functionToCall: Function, tickTime : number | null) {
        this.func = functionToCall;
        this.tickTime = tickTime? tickTime : 0;
    }

    start() {
        this.running = true;
        requestAnimationFrame(this.init.bind(this));
    }

    stop() {
        this.running = false;
    }

    private init(timestamp: number) {
        this.lastTime = timestamp;
        requestAnimationFrame(this.frame.bind(this));
    }

    private frame(timestamp: number) {
        const elapsed = timestamp - this.lastTime;
        if (elapsed > this.tickTime) {
            this.elapsedTime += elapsed;
            this.lastTime = timestamp;
            this.func.call(this, elapsed);
        }
        
        if (this.running) requestAnimationFrame(this.frame.bind(this));
    }
}