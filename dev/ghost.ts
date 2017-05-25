class Ghost extends GameObject {
    constructor() {
        super("ghost");

        this.x      = 1024;
        this.y      = 520;
        this.width  = 66;
        this.height = 80;
        this.speed  = -6;

        this.draw();
    }

    public update(): void {
        return this.move();
    }

    public move(): void {
        // Update x and draw again
        this.x += this.speed;
        this.draw();

        // Spawn a new ghost when a ghost leaves the screen
        let g: Game = Game.getInstance();
        if (this.x + this.width < 0) {
            g.score += 10;
            this.x = 1024;
        }
    }
}