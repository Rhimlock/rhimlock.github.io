import { inputCommandline } from "./htmlElements.js";
import { terminal } from "./terminal.js";
class Input {
    constructor() {
        this._map = new Map();
        this._calls = new Map();
        this.keys = {
            up: 'w',
            down: 's',
            left: 'a',
            right: 'd',
            attack: ' ',
            terminal: '#',
            enter: 'Enter',
            escape: 'Escape'
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
    call(key) {
        const f = this._calls.get(key);
        if (f && document.activeElement !== inputCommandline) {
            f();
        }
    }
    executeCommandline() {
        terminal.log(inputCommandline.value);
        inputCommandline.value = '';
    }
    bindKeys(keys) {
        this.keys = keys;
    }
    bindCall(functionToCall, key, context) {
        if (context) {
            this._calls.set(key, functionToCall.bind(context));
        }
        else {
            this._calls.set(key, functionToCall);
        }
    }
}
export const input = new Input();
input.bindCall(terminal.toggleDisplay, input.keys.terminal, terminal);
window.onkeydown = (ev) => {
    input.set(ev.key, true);
};
window.onkeyup = (ev) => {
    input.set(ev.key, false);
};
window.onkeypress = (ev) => {
    input.call(ev.key);
    ev.stopPropagation();
};
window.onmousedown = (ev) => {
    input.set("mouse" + ev.button, true);
};
window.onmouseup = (ev) => {
    input.set("mouse" + ev.button, false);
};
inputCommandline.onkeydown = (ev) => {
    switch (ev.key) {
        case input.keys.escape:
            terminal.hide();
            break;
        case input.keys.enter:
            input.executeCommandline();
            break;
    }
    ev.stopPropagation();
};
//# sourceMappingURL=input.js.map