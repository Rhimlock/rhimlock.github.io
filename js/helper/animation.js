export class Animation {
    constructor() {
        this.frames = [];
        this.duration = 0;
        this.currentFrame = null;
        this.currentTime = 0;
        this.loop = true;
    }
    addFrame(frame) {
        this.frames.push(frame);
        this.duration += frame.duration;
    }
    update(elapsedTime, sprite) {
        this.currentTime += elapsedTime;
        if (this.loop) {
            this.currentTime = this.currentTime % 1;
        }
        let i = Math.floor(this.frames.length * this.currentTime);
        const frame = this.frames[i];
        if (frame && frame != this.currentFrame) {
            this.currentFrame = frame;
            sprite.tx = frame.x / 16;
        }
    }
}
export class Frame {
    constructor(x, duration = 0) {
        this.x = x;
        this.duration = duration;
    }
}
//# sourceMappingURL=animation.js.map