import { dom } from "./htmlElements.js";
import { Point } from "./point.js";
import { terminal } from "./terminal.js";
import { view } from "./view.js";

interface KeyBinding {
    up: string
    down : string
    left : string
    right : string
    attack : string
    terminal : string
    enter : string
    escape : string
    click : string,
    middleClick: string,
    rightClick : string,
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
        escape : 'Escape',
        click : 'mouse0',
        middleClick : 'mouse1',
        rightClick : 'mouse2'

    } ;

    get up() : boolean {return this._map.get(this.keys.up)}
    get down() : boolean { return this._map.get(this.keys.down)}
    get left() : boolean { return this._map.get(this.keys.left)}
    get right() : boolean { return this._map.get(this.keys.right)}
    get attack() : boolean { return this._map.get(this.keys.attack)}

    set(key : string, pressed : boolean) {
        if (Object.values(this.keys).includes(key)) {
            this._map.set(key,pressed);
        }
                
    }
    call(ev: KeyboardEvent | MouseEvent) {
        const f = this._calls.get((ev as KeyboardEvent).key || "mouse" + (ev as MouseEvent).button) as Function;
        if(f && document.activeElement !== dom.commandLine) {
            f();
            ev.preventDefault();
        }
    }

    executeCommandline() {
        terminal.log(dom.commandLine.value);
        dom.commandLine.value = '';
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

    onKeyDown(ev: KeyboardEvent) {
        if (Object.values(this.keys).includes(ev.key)) {
            this._map.set(ev.key,true);
            this.call(ev);

            if (ev.target == document.body) {
                ev.preventDefault();
              }
        }

    }
    onKeyUp(ev: KeyboardEvent) {
        if (Object.values(this.keys).includes(ev.key)) {
            this._map.set(ev.key,false);
        }
    }
}


export const input = new Input();
export const mousePos = new Point(0,0);

input.bindCall(terminal.show,input.keys.terminal, terminal);
input.bindCall(terminal.hide,input.keys.escape, terminal);

window.onkeydown = input.onKeyDown.bind(input);
window.onkeyup = input.onKeyUp.bind(input);

window.onmousedown = (ev: MouseEvent) => {
    input.set("mouse" + ev.button, true);
    input.call(ev);
}

window.onmouseup = (ev: MouseEvent) => {
    input.set("mouse" + ev.button, false);
}

window.onmousemove = (ev: MouseEvent) => {
    const pos = view.convertPos(ev.clientX, ev.clientY);
    mousePos.x = pos.x;
    mousePos.y = pos.y;
}

dom.commandLine.onkeydown = (ev: KeyboardEvent) => {
    switch(ev.key) {
        case input.keys.escape: terminal.hide(); ev.preventDefault();  break;
        case input.keys.enter: input.executeCommandline();ev.preventDefault(); break;
    }
    ev.stopPropagation();
}
dom.world.onmousedown =  () => {
    terminal.hide();
}