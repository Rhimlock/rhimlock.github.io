"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const batch = new SpriteBatch(
//     document.getElementById("diam") as HTMLImageElement);
var loop = function (timestamp) {
    //batch.draw();
    window.requestAnimationFrame(loop);
};
