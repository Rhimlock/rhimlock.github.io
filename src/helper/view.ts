import { Vec } from "../components/vec.js";

class View extends Vec{
  constructor() {
    super(new Float32Array(2));
  }
  zoom = 3;
  tileSize = 8;

  convertPos(clientX: number, clientY: number): Vec {
    return Vec.newF(
      (clientX + window.scrollX - this.tileSize * 0.5 * this.zoom) /
        (this.zoom * this.tileSize),
      (clientY + window.scrollY - this.tileSize * 0.5 * this.zoom) /
        (this.zoom * this.tileSize)
    );
  }
  updatePos() {
    const pos = this.convertPos(0, 0);
    this.x = pos.x;
    this.y = pos.y;
  }
}

export const view = new View();
