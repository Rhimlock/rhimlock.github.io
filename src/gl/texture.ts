import { gl } from "./gl.js";
let counter = 0;
export class Texture {
    id: WebGLTexture | null;
    no: number = counter++;
    sizeInv = new Float32Array([1, 1]);

    constructor(img?: HTMLImageElement, width?: number, height?: number) {
        this.id = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0 + this.no);
        gl.bindTexture(gl.TEXTURE_2D, this.id);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            this.sizeInv = new Float32Array([1 / img.width, 1 / img.height]);

        } else {
            // define size and format of level 0
            const level = 0;
            const internalFormat = gl.RGBA;
            const border = 0;
            const format = gl.RGBA;
            const type = gl.UNSIGNED_BYTE;
            const data = null;
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width as number, height as number, border,
                format, type, data);

        }

    }
}