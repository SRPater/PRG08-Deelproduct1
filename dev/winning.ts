class Winning implements State {
    public dog: Dog;

    constructor(d: Dog) {
        this.dog = d;
    }

    public update(): void {
        this.dog.x      = 472;
        this.dog.y      = 537;
        this.dog.speed  = 0;

        let g: Game = Game.getInstance();
        g.score += 50;
        g.gameOver("YOU WIN!");
    }
}