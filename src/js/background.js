import { Actor, Input, Vector } from "excalibur";
import { GameObject } from "./gameObject";

export class Background extends GameObject{
    constructor(sprite){
        super(sprite);
        this.pos = new Vector(0,0);
    }
}