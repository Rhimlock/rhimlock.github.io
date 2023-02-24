import { FrameBuffer } from "../basics/framebuffer.js";

export class Tilemap extends FrameBuffer {
    constructor(width: number, height: number) {
        super(width, height);
    }
}