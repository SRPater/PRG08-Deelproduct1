class GameObject {
    public      div:      HTMLElement;
    protected   _x:       number;
    protected   _y:       number;
    protected   _width:   number;
    protected   _height:  number;
    protected   _speed:   number = 0;

    // Getters and setters for protected properties
    public get speed(): number  { return this._speed; }
    public set speed(s: number) { this._speed = s; }

    public get x(): number  { return this._x; }
    public set x(x: number) { this._x = x; }

    public get y(): number  { return this._y; }
    public set y(y: number) { this._y = y; }

    public get width(): number  { return this._width; }
    public set width(w: number) { this._width = w; }

    public get height(): number     { return this._height; }
    public set height(h: number)    { this._height = h; }

    constructor(tag: string) {
        // Create an element and append it to the container
        let container: HTMLElement  = document.getElementById("container");
        this.div                    = document.createElement(tag);
        container.appendChild(this.div);
    }

    protected draw(): void {
        // Draw the object
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}