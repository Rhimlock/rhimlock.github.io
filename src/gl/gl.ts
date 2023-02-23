const canvas = document.createElement("canvas") as HTMLCanvasElement;
export const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
if (!gl) {
    throw new Error("webgl2 context could not be initialized");
}
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.DST_ALPHA);
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0, 0, 0, 1.0);
