class Game {
    // Static instance variable (Singleton pattern)
    private static instance: Game;

    public  score:      number;
    private scoreDiv:   HTMLElement;
    private dog:        Dog;
    public  ghost:      Ghost;

    private constructor() {
        this.dog        = new Dog();
        this.ghost      = new Ghost();
        this.scoreDiv   = document.getElementById("score");
        this.score      = 0;

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(): void {
        // Move the dog and the ghost
        this.dog.move();
        this.ghost.move();

        // Update the score
        this.scoreDiv.innerHTML = "Score: " + this.score;

        requestAnimationFrame(() => this.gameLoop());
    }

    public gameOver(m: string): void {
        // Show the final score
        this.scoreDiv.innerHTML = "Final score: " + this.score;

        // Remove any remaining ghosts
        this.ghost.div.remove();
        this.ghost = null;

        // Pause the animations
        let sky: HTMLElement = document.getElementById("sky");
        sky.classList.add("stopanimation");

        let platform: HTMLElement = document.getElementById("platform");
        platform.classList.add("stopanimation");

        // Show the correct message
        let message:    HTMLElement = document.getElementById("message");
        message.innerHTML           = m;
    }

    // Method for retrieving the static instance (Singleton pattern)
    public static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }

        return Game.instance;
    }
}

window.addEventListener("load", function() {
    let g: Game = Game.getInstance();
});