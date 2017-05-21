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

    public move(): void {
        this.x += this.speed;
        this.draw();

        let g: Game = Game.getInstance();
        if (this.x + this.width < 0) {
            g.score += 10;
            g.ghost = new Ghost();
        }
    }
}