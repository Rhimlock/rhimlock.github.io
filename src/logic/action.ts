export const enum ACTIONS {
    idle = 0,
    move = 10,
    moveTo = 11,
    moveAway = 12,
    follow = 13,
    attack = 20
}

export class Action {
    type : ACTIONS;
    target : any;
    constructor(type : ACTIONS, target : any) {
        this.type = type;
        this.target = target;
    }
}