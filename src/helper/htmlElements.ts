export const dom = {
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    humans: document.getElementById("humans") as HTMLImageElement,    
    orks: document.getElementById("orks") as HTMLImageElement,    
}

Object.keys(dom).forEach(key => {
    if(!document.getElementById(key)) {
        throw new Error (`HTMLElement '${key}' not found`);
    }
})
