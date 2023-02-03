export class Timer {

    public running = false;
    private callback: Function;
    private tickTime : number;

    private lastTime = 0;
    public elapsedTime = 0;

    constructor(callback: Function, tickTime : number | null) {
        this.callback = callback;
        this.tickTime = tickTime? tickTime : 0;
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

    private init(timestamp: number) {
        //first frame to get a decent timestamp
        this.lastTime = timestamp;
        requestAnimationFrame(this.frame.bind(this));
    }

    private frame(timestamp: number) {
        const elapsed = timestamp - this.lastTime;
        if (elapsed > this.tickTime) {
            this.elapsedTime += elapsed;
            this.lastTime = timestamp;
            this.callback.call(this, elapsed);
        }
        
        if (this.running) requestAnimationFrame(this.frame.bind(this));
    }
}