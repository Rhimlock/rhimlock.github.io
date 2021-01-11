import { inputCommandline } from "./htmlElements.js";
import { terminal } from "./terminal.js";

interface KeyBinding {
    up: string
    down : string
    left : string
    right : string
    attack : string
    terminal : string
    enter : string
    escape : string
}

class Input {
    private _map = new Map();
    private _calls = new Map();
    public keys : KeyBinding = {
        up: 'w',
        down: 's',
        left: 'a',
        right: 'd',
        attack: ' ',
        terminal: '#',
        enter: 'Enter',
        escape : 'Escape'

    } ;

    get up() : boolean {return this._map.get(this.keys.up)}
    get down() : boolean { return this._map.get(this.keys.down)}
    get left() : boolean { return this._map.get(this.keys.left)}
    get right() : boolean { return this._map.get(this.keys.right)}
    get attack() : boolean { return this._map.get(this.keys.attack)}

    set(key : string, pressed : boolean) {
        this._map.set(key,pressed);        
    }
    call(key : string) {
        const f = this._calls.get(key) as Function;
        if(f && document.activeElement !== inputCommandline) {
            f();
        }
    }

    executeCommandline() {
        terminal.log(inputCommandline.value);
        inputCommandline.value = '';
    }

    bindKeys(keys : KeyBinding) {
        this.keys = keys;
    }

    bindCall(functionToCall : Function, key : string, context : any | null) {
        if (context) {
            this._calls.set(key,functionToCall.bind(context));
        } else {

            this._calls.set(key,functionToCall);
        }
    }
}


export const input = new Input();
input.bindCall(terminal.toggleDisplay,input.keys.terminal, terminal);

window.onkeydown = (ev: KeyboardEvent) => {
    input.set(ev.key, true);
}

window.onkeyup = (ev: KeyboardEvent) => {
    input.set(ev.key, false);
}

window.onkeypress = (ev: KeyboardEvent) => {
    input.call(ev.key);
    ev.stopPropagation();
}
window.onmousedown = (ev: MouseEvent) => {
    input.set("mouse" + ev.button, true);
}

window.onmouseup = (ev: MouseEvent) => {
    input.set("mouse" + ev.button, false);
}


inputCommandline.onkeydown = (ev: KeyboardEvent) => {
    switch(ev.key) {
        case input.keys.escape: terminal.hide(); break;
        case input.keys.enter: input.executeCommandline(); break;
    }
    ev.stopPropagation();
}