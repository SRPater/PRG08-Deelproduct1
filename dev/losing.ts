// Losing state (Strategy pattern)
class Losing implements State {
    public dog: Dog;

    constructor(d: Dog) {
        this.dog = d;
    }

    public update(): void {
        // Set the dog in the middle of the platform and stop it's movement
        this.dog.x      = 472;
        this.dog.y      = 537;
        this.dog.speed  = 0;

        // Send the "lose" message to the Game instance
        let g: Game = Game.getInstance();
        g.gameOver("YOU LOSE!");
    }
}