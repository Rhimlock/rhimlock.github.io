import { input } from '../../controls/input.js';
import { mousePos } from '../../controls/mouse.js';
import { Point } from '../../helper/point.js';
import { Entity } from '../entity/entity.js';
import { Flock } from '../flock/flock.js';
import { World } from '../world.js';
import { Controller } from './controller.js';
class Player implements Controller{
    world : World | null = null;
    entities: Entity[] = [];
    flock : Flock = new Flock();
    constructor() {
    }
    addEntity(entity: Entity): void {
        this.entities.push(entity);
    }
    get x() : number {return this.entities[0]?.x || -1};
    get y() : number {return this.entities[0]?.y || -1};

    mouseClick() {
        if (this.entities.length > 0) {
            const pos = new Point(mousePos.x, mousePos.y);
                this.entities[0]?.moveTo(pos);
        }
    }

    update(elapsedTime : number) {
        this.flock.run(elapsedTime);
        this.flock.boids.forEach((b,i) => {
            const ent = this.entities[i+1];
            if (ent) {
                ent.setTarget(b.position,0);
                // ent.x = b.position.x;
                // ent.y = b.position.y;
            }
        })
        if (this.entities.length > 0) {
            const diff = new Point(
                input.left ? -1 : 0,
                input.up ? -1 : 0
            );
            diff.x = input.right ? 1 : diff.x;
            diff.y = input.down ? 1 : diff.y;
            if (diff.x !== 0 || diff.y !== 0) {

                this.entities[0]?.moveTo(this.entities[0]?.add(diff));
            }
            this.entities.forEach(e => e.update(elapsedTime, this.world));
        }
    }
    
    createEnt() {
        const ent = this.world?.createEntity(mousePos.x,mousePos.y,this);
        this.flock.addBoid(ent?.x || 0, ent?.y || 0);
        if (this.entities.length > 1) {
            if (this.entities[0] && ent) {
                ent.setTarget(this.entities[0],2);
            }
        }
        
    }
}

export const player = new Player();
input.bindCall(player.mouseClick,input.keys.click,player);
input.bindCall(player.createEnt,input.keys.middleClick,player);