class Running implements State {
    public  dog:        Dog;
    private listener:   EventListener;

    constructor(d: Dog) {
        this.dog = d;

        this.listener = (e: KeyboardEvent) => this.onKeyDown(e);
        window.addEventListener("keydown", this.listener);
    }

    public update(): void {
        this.dog.x += this.dog.speed;
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.key == ' ') {
            let message: HTMLElement    = document.getElementById("message");
            message.innerHTML           = "";
            
            window.removeEventListener("keydown", this.listener);
            this.dog.state = new Jumping(this.dog);
        }
    }
}