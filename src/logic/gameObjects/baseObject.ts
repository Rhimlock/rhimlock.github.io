import { Sprite } from "../../gl/drawables/spriteBatch.js";
import { Point } from "../../helper/point.js";

export class BaseObject extends Point {
  sprite: Sprite;
  constructor(sprite: Sprite) {
    super(0, 0);
    this.sprite = sprite;
  }
  get x() {
    return this.sprite.pos.x;
  }
  set x(v) {
    this.sprite.pos.x = v;
  }
  get y() {
    return this.sprite.pos.y;
  }
  set y(v) {
    this.sprite.pos.y = v;
  }
  get size() {
    return this.sprite.tex.z / 2;
  }
  set size(s) {
    this.sprite.tex.z = s * 2;
  }
}
