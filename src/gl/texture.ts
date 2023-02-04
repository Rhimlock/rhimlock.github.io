import { gl } from "./gl.js";
let counter = 0;
export class Texture {
    id: WebGLTexture
    no: number
    width: number
    height : number
    sizeInv : Float32Array

    constructor(image: HTMLImageElement) {
        this.id = gl.createTexture() as WebGLTexture;
        if (!this.id) throw 'gl.createTexture() failed';
        this.no = counter++;
        gl.activeTexture(gl.TEXTURE0 + this.no);
        gl.bindTexture(gl.TEXTURE_2D, this.id);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if(image.src)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        else
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, image.width, image.height, 0, gl.RGBA,  gl.UNSIGNED_BYTE, null );
        
        this.width = image.width;
        this.height = image.height;
        this.sizeInv = new Float32Array([1 / image.width, 1/ image.height]);
    }
}