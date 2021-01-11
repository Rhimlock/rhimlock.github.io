interface KeyBinding {
    up: string
    down : string
    left : string
    right : string
    attack : string
}

class Input {
    private _map = new Map();
    private keys : KeyBinding = {
        up: 'w',
        down: 's',
        left: 'a',
        right: 'd',
        attack: ' '
    } ;


    get up() : boolean {return this._map.get(this.keys.up)}
    get down() : boolean { return this._map.get(this.keys.down)}
    get left() : boolean { return this._map.get(this.keys.left)}
    get right() : boolean { return this._map.get(this.keys.right)}
    get attack() : boolean { return this._map.get(this.keys.attack)}

    set(key : string, pressed : boolean) {
        this._map.set(key,pressed);
    }
    bindKeys(keys : KeyBinding) {
        this.keys = keys;
    }
}


export const input = new Input();


window.onkeydown = (ev: KeyboardEvent) => {
    input.set(ev.key, true);
}

window.onkeyup = (ev: KeyboardEvent) => {
    input.set(ev.key, false);
}

window.onmousedown = (ev: MouseEvent) => {
    input.set("mouse" + ev.button, true);
}

window.onmouseup = (ev: MouseEvent) => {
    input.set("mouse" + ev.button, false);
}