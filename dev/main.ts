class Game {
    // Static instance variable (Singleton pattern)
    private static instance: Game;

    public  score:      number;
    private scoreDiv:   HTMLElement;

    private gameObjects: GameObject[] = [];

    private constructor() {
        this.gameObjects.push(new Dog(), new Ghost());
        this.scoreDiv   = document.getElementById("score");
        this.score      = 0;

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(): void {
        // Move the dog and the ghost
        for(let g of this.gameObjects)
        {
            g.update();
            g.draw();
        }

        // Update the score
        this.scoreDiv.innerHTML = "Score: " + this.score;

        requestAnimationFrame(() => this.gameLoop());
    }

    public gameOver(m: string): void {
        // Show the final score
        this.scoreDiv.innerHTML = "Final score: " + this.score;

        // Remove any remaining ghosts
        for(let g of this.findObjects("ghost"))
        {
            g.div.remove();
            g = null;
        }

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

    public findObjects(tag: string, onlyOne=false): GameObject[]
    {
        let fnd: GameObject[] = [];
        for(let g of this.gameObjects)
        {
            if(g.tag == tag)
            {
                fnd.push(g);

                if(onlyOne) // escape the loop if we only want one returned result.
                    break;
            }
        }

        return fnd;
    }
}

window.addEventListener("load", function() {
    let g: Game = Game.getInstance();
});