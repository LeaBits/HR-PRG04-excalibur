import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        console.log(Resources);

        const fish = new Actor()
        let fishSprite = Resources.Fish.toSprite();
        fishSprite.flipHorizontal = true;
        fish.graphics.use(fishSprite)
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)

        const guineaPig = new Actor();
        guineaPig.graphics.use(Resources.GuineaPig.toSprite());
        guineaPig.pos = new Vector(100,100);
        guineaPig.z = 1000;
        this.add(guineaPig);

        const sword = new Actor();
        sword.graphics.use(Resources.Sword.toSprite());
        sword.pos = new Vector(200, 100);
        this.add(sword);
    }
}

new Game()
