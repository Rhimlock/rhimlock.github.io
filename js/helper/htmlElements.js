export const dom = {
    canvas: document.getElementById("canvas"),
    world: document.getElementById("world"),
    terminal: document.getElementById("terminal"),
    log: document.getElementById("log"),
    commandLine: document.getElementById("commandLine"),
    orks: document.getElementById("orks"),
    tiles: document.getElementById("tiles"),
    worldTime: document.getElementById("worldTime"),
    mousePos: document.getElementById("mousePos"),
    playerPos: document.getElementById("playerPos"),
    worldPos: document.getElementById("worldPos"),
};
Object.keys(dom).forEach(key => {
    if (!document.getElementById(key)) {
        throw new Error(`HTMLElement '${key}' not found`);
    }
});
//# sourceMappingURL=htmlElements.js.map