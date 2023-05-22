import { Actor, Engine } from "excalibur";

// TODO: get game width and height from engine

export class GameObject extends Actor {
    #gameWidth;
    #gameHeight;
    sprite;

    constructor(sprite) {
        super();

        this.#gameWidth = 800;
        this.#gameHeight = 600;
        this.sprite = sprite;
        this.graphics.use(this.sprite);
    }

    getGameWidth(){
        return this.#gameWidth;
    }

    getGameHeight(){
        return this.#gameHeight;
    }
}
