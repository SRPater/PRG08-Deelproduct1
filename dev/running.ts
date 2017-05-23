// Running state (Strategy pattern)
class Running implements State {
    public  dog:        Dog;
    private listener:   EventListener;

    constructor(d: Dog) {
        this.dog = d;

        // Add an event listener
        this.listener = (e: KeyboardEvent) => this.onKeyDown(e);
        window.addEventListener("keydown", this.listener);
    }

    public update(): void {
        // Update x so the dog moves
        this.dog.x += this.dog.speed;
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.key == ' ') {
            // Remove the initial message
            let message: HTMLElement    = document.getElementById("message");
            message.innerHTML           = "";

            // Remove the event listener and set state to jumping
            window.removeEventListener("keydown", this.listener);
            this.dog.state = new Jumping(this.dog);
        }
    }
}