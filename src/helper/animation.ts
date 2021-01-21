import { Sprite } from "../gl/drawables/sprite";

export class Animation {
    frames: Frame[] = [];
    duration: number = 0;
    currentFrame: Frame | null = null;
    currentTime: number = 0;
    loop: boolean = true;

    addFrame(frame: Frame) {
        this.frames.push(frame);
        this.duration += frame.duration;
    }

    update(elapsedTime: number, sprite: Sprite) {
        this.currentTime += elapsedTime;
        if (this.loop) {
            this.currentTime = this.currentTime % 1;
        }
        let i = Math.floor(this.frames.length * this.currentTime);
        const frame = this.frames[i];
        if (frame && frame != this.currentFrame) {
            this.currentFrame = frame;
            sprite.tx = frame.x;
        }
    }
}


export class Frame {
    x: number
    duration: number
    constructor(x: number,duration: number = 0) {
        this.x = x;
        this.duration = duration;
    }
}