/// <reference path="gameObject.ts" />

class Dog extends GameObject {
    public state: State;

    constructor() {
        super("dog");

        this.x      = 0;
        this.y      = 537;
        this.width  = 80;
        this.height = 73;
        this.speed  = 1;

        this.state = new Running(this);

        this.draw();
    }

    public move(): void {
        let g: Game = Game.getInstance();
        if (Utils.checkCollision(this, g.ghost)) {
            this.state = new Losing(this);
        }

        this.state.update();
        this.draw();

        if (this.x + this.width > 1024) {
            this.state = new Winning(this);
        }
    }
}