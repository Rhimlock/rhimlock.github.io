import { dom } from "../helper/htmlElements.js";
import { terminal } from "./terminal.js";
import { KeyBinding } from "./keybindings.js";
class Input {
    constructor() {
        this._map = new Map();
        this._calls = new Map();
        this.keys = new KeyBinding();
    }
    get up() { return this._map.get(this.keys.up); }
    get down() { return this._map.get(this.keys.down); }
    get left() { return this._map.get(this.keys.left); }
    get right() { return this._map.get(this.keys.right); }
    get attack() { return this._map.get(this.keys.attack); }
    set(key, pressed) {
        if (Object.values(this.keys).includes(key)) {
            this._map.set(key, pressed);
        }
    }
    call(ev) {
        const f = this._calls.get(ev.key || "mouse" + ev.button);
        if (f && document.activeElement !== dom.commandLine) {
            f();
            ev.preventDefault();
        }
    }
    executeCommandline() {
        terminal.log(dom.commandLine.value);
        dom.commandLine.value = '';
    }
    bindKeys(keys) {
        this.keys = keys;
    }
    bindCall(functionToCall, key, context = null) {
        if (context) {
            this._calls.set(key, functionToCall.bind(context));
        }
        else {
            this._calls.set(key, functionToCall);
        }
    }
    onKeyDown(ev) {
        if (Object.values(this.keys).includes(ev.key)) {
            this._map.set(ev.key, true);
            this.call(ev);
            if (ev.target == document.body) {
                ev.preventDefault();
            }
        }
    }
    onKeyUp(ev) {
        if (Object.values(this.keys).includes(ev.key)) {
            this._map.set(ev.key, false);
        }
    }
}
export const input = new Input();
window.onkeydown = input.onKeyDown.bind(input);
window.onkeyup = input.onKeyUp.bind(input);
input.bindCall(terminal.show, input.keys.terminal, terminal);
input.bindCall(terminal.hide, input.keys.escape, terminal);
dom.commandLine.onkeydown = (ev) => {
    switch (ev.key) {
        case input.keys.escape:
            terminal.hide();
            ev.preventDefault();
            break;
        case input.keys.enter:
            input.executeCommandline();
            ev.preventDefault();
            break;
    }
    ev.stopPropagation();
};
//# sourceMappingURL=input.js.map