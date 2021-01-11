class Input {
    constructor() {
        this._map = new Map();
        this.keys = {
            up: 'w',
            down: 's',
            left: 'a',
            right: 'd',
            attack: ' '
        };
    }
    get up() { return this._map.get(this.keys.up); }
    get down() { return this._map.get(this.keys.down); }
    get left() { return this._map.get(this.keys.left); }
    get right() { return this._map.get(this.keys.right); }
    get attack() { return this._map.get(this.keys.attack); }
    set(key, pressed) {
        this._map.set(key, pressed);
    }
    bindKeys(keys) {
        this.keys = keys;
    }
}
export const input = new Input();
window.onkeydown = (ev) => {
    input.set(ev.key, true);
};
window.onkeyup = (ev) => {
    input.set(ev.key, false);
};
window.onmousedown = (ev) => {
    input.set("mouse" + ev.button, true);
};
window.onmouseup = (ev) => {
    input.set("mouse" + ev.button, false);
};
//# sourceMappingURL=input.js.map