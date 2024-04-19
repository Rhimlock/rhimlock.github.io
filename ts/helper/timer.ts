export class Timer {
  private func: Function;
  private tickTime: number;
  private delta = 0;

  constructor(functionToCall: Function, milliseconds: number = 0) {
    this.func = functionToCall;
    this.tickTime = milliseconds;
  }

  tick(delta: number) {
    this.delta += delta;
    if (this.delta > this.tickTime) {
      this.func.call(this, this.delta);
      this.delta = this.tickTime == 0 ? 0 : (this.delta % this.tickTime);
    }
  }
  stop() {
    const i = TIMERS.indexOf(this);
    if (i >= 0) {
      TIMERS.splice(i, 1);
    }
  }
  start() {
    if (TIMERS.indexOf(this) < 0) TIMERS.push(this);
  }

  toggle() {
    if (TIMERS.indexOf(this) < 0) {
      TIMERS.push(this);
    } else {
      this.stop();
    }
  }
}

let lastTimestamp = 0;
const TIMERS: Timer[] = [];

function frame(timestamp: number) {
  TIMERS.forEach((t) => t.tick(timestamp - lastTimestamp));
  lastTimestamp = timestamp;
  requestAnimationFrame(frame);
}
requestAnimationFrame((timestamp) => {
  lastTimestamp = timestamp;
  requestAnimationFrame(frame);
});
