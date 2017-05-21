class Jumping implements State {
    public  dog:            Dog;
    private jumpDirection:  number;

    constructor(d: Dog) {
        this.dog            = d;
        this.jumpDirection  = -3;
    }

    public update(): void {
        this.dog.x += this.dog.speed;
        this.dog.y += this.jumpDirection;

        if (this.dog.y < 377) {
            this.jumpDirection = 3;
        }

        if (this.dog.y > 534) {
            this.dog.state = new Running(this.dog);
        }
    }
}