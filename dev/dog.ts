/// <reference path="gameObject.ts" />

class Dog extends GameObject {
    // Property to keep track of the state (Strategy pattern)
    public state: State;

    constructor() {
        super("dog");

        this.x      = 0;
        this.y      = 537;
        this.width  = 80;
        this.height = 73;
        this.speed  = 1;

        // Set the initial state (Strategy pattern)
        this.state = new Running(this);

        this.draw();
    }

    public move(): void {
        // Set state to losing if collision with a ghost is detected
        let g: Game = Game.getInstance();
        if (Utils.checkCollision(this, g.ghost)) {
            this.state = new Losing(this);
        }

        // Update the state and draw again
        this.state.update();
        this.draw();

        // Set state to winning if the right edge of the container is reached
        if (this.x + this.width > 1024) {
            this.state = new Winning(this);
        }
    }
}