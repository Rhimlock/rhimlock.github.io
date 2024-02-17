import { Point } from "../../helper/point.js";
import { ActiveObject } from "../gameObjects/activeObject.js";

export interface Squad {
  setLeader(leader: ActiveObject): void;
  addMember(m: ActiveObject): number;
  getGlobalPosition(n: number): Point;
  update(): void;
}
