import { Vec } from "./components/vec.js"

type Iconfig = {
    tileSize: number,
    frameSize: Vec,
    mapSize: Vec,
    WorldTime: number
}
export const CONFIG : Iconfig  = {
    tileSize: 8,
    frameSize: Vec.newU16(512,512),
    mapSize: Vec.newU16(64,64),
    WorldTime: 0,
}