import { Actor, Input, Vector } from "excalibur";
import { GameObject } from "./gameObject";

export class Fish extends GameObject {
  spriteToLeft;
  toRight;

  constructor(sprite) {
    super(sprite);

    this.toRight = true;

    this.spriteToLeft = this.sprite.clone();
    this.spriteToLeft.flipHorizontal = true;

    this.pos = new Vector(0, Math.random() * this.getGameHeight());
    this.flipMe();

    this.on("exitviewport", (event) => this.onExit(event));
  }

  flipMe() {
    if (!this.toRight) {
      this.toRight = true;
      this.graphics.use(this.sprite);
      this.vel = new Vector((Math.random() * 100 + 50), 0);
    } else {
      this.toRight = false;
      this.graphics.use(this.spriteToLeft);
      this.vel = new Vector((Math.random() * -100 - 50), 0);
    }
  }

  onExit(event) {
    this.pos = new Vector(this.pos.x, Math.random() * this.getGameHeight());
    this.flipMe();
  }
}
