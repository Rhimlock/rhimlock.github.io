import { Sprite } from "../../gl/drawables/spriteBatch.js";
import { Animation, Frame } from "../../helper/animation.js";
import { Point } from "../../helper/point.js";
import { Squad } from "../squads/squad.js";
import { BaseObject } from "./baseObject.js";

export class ActiveObject extends BaseObject {
  direction = new Point(1, 0);
  destination: Point | null = null;
  flipped = false;
  speed = 4;
  squad: Squad | null = null;
  animation = new Animation();

  constructor(sprite: Sprite) {
    super(sprite);
    this.animation.addFrame(new Frame(0, 1));
    this.animation.addFrame(new Frame(1, 1));
    this.animation.addFrame(new Frame(2, 1));
    this.animation.addFrame(new Frame(3, 1));
    // this.animation.addFrame(new Frame(4,1));
    // this.animation.addFrame(new Frame(5,1));
    // this.animation.addFrame(new Frame(6,1));
    // this.animation.addFrame(new Frame(7,1));
  }

  update(elapsedTime: number) {
    this.animation.update(elapsedTime, this.sprite);
    if (this.destination) {
      const dir = this.getVectorTo(this.destination);
      const distance = dir.length;
      if (distance < 0.2) {
        this.direction = dir;
        this.destination = null;
      } else {
        dir.resize((this.speed / distance) * elapsedTime);
        this.direction = dir;
      }
      if (this.destination) {
        this.move(this.direction);
      }
    }
    if (Math.abs(this.direction.y) > Math.abs(this.direction.x)) {
      switch (Math.sign(this.direction.y)) {
        case -1:
          this.sprite.tex.y = 0;
          break;
        case 1:
          this.sprite.tex.y = 2;
          break;
      }
    } else {
      switch (Math.sign(this.direction.x)) {
        case -1:
          this.sprite.tex.y = 3;
          break;
        case 1:
          this.sprite.tex.y = 1;
          break;
      }
    }
    this.squad?.update();
  }
}
