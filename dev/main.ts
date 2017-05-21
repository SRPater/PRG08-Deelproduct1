class Game {
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
        this.dog.move();
        this.ghost.move();

        this.scoreDiv.innerHTML = "Score: " + this.score;

        requestAnimationFrame(() => this.gameLoop());
    }

    public gameOver(m: string): void {
        this.scoreDiv.innerHTML = "Final score: " + this.score;

        this.ghost.div.remove();
        this.ghost = null;

        let sky: HTMLElement = document.getElementById("sky");
        sky.classList.add("stopanimation");

        let platform: HTMLElement = document.getElementById("platform");
        platform.classList.add("stopanimation");

        let container:  HTMLElement = document.getElementById("container");
        let message:    HTMLElement = document.createElement("message");
        message.innerHTML           = m;
        container.appendChild(message);
    }

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