import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish'
import { Background } from './background'

export class Game extends Engine {
    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        let background = new Background(Resources.Background.toSprite());
        this.add(background);

        let fishSprites = [
            Resources.SkeletonFish.toSprite(),
            Resources.GreenFish.toSprite(),
            Resources.PurpleFish.toSprite(),
            Resources.RedFish.toSprite(),
            Resources.YellowFish.toSprite(),
            Resources.GreenFish.toSprite(),
            Resources.PurpleFish.toSprite(),
            Resources.RedFish.toSprite(),
            Resources.YellowFish.toSprite()
        ];

        for(let sprite of fishSprites){
            let fish = new Fish(sprite);
            this.add(fish);
        }
    }
}

new Game()
