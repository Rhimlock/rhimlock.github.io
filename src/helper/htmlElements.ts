export const dom = {
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    world: document.getElementById("world") as HTMLDivElement,

    terminal: document.getElementById("terminal") as HTMLDivElement,
    log: document.getElementById("log") as HTMLDivElement,
    commandLine: document.getElementById("commandLine") as HTMLInputElement,
    orks: document.getElementById("orks") as HTMLImageElement,
    humans: document.getElementById("humans") as HTMLImageElement,    
    tiles: document.getElementById("tiles") as HTMLImageElement,

    worldTime: document.getElementById("worldTime") as HTMLSpanElement,
    mousePos: document.getElementById("mousePos") as HTMLSpanElement,
    playerPos: document.getElementById("playerPos") as HTMLSpanElement,
    worldPos: document.getElementById("worldPos") as HTMLSpanElement,
}

Object.keys(dom).forEach(key => {
    if(!document.getElementById(key)) {
        throw new Error (`HTMLElement '${key}' not found`);
    }
})