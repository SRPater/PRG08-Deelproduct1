// Jumping state (Strategy pattern)
class Jumping implements State {
    public  dog:            Dog;
    private jumpDirection:  number;

    constructor(d: Dog) {
        this.dog            = d;
        this.jumpDirection  = -3;
    }

    public update(): void {
        // Update x and y so the dog jumps
        this.dog.x += this.dog.speed;
        this.dog.y += this.jumpDirection;

        // Reverse jump direction when dog reaches the top of the jump
        if (this.dog.y < 377) {
            this.jumpDirection = 3;
        }

        // Set the state back to running when the dog hits the platform
        if (this.dog.y > 534) {
            this.dog.state = new Running(this.dog);
        }
    }
}