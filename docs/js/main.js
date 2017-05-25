var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(tag) {
        this._speed = 0;
        var container = document.getElementById("container");
        this.div = document.createElement(tag);
        this._tag = tag;
        container.appendChild(this.div);
    }
    Object.defineProperty(GameObject.prototype, "speed", {
        get: function () { return this._speed; },
        set: function (s) { this._speed = s; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () { return this._x; },
        set: function (x) { this._x = x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () { return this._y; },
        set: function (y) { this._y = y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "width", {
        get: function () { return this._width; },
        set: function (w) { this._width = w; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "height", {
        get: function () { return this._height; },
        set: function (h) { this._height = h; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "tag", {
        get: function () { return this._tag; },
        set: function (tag) { this._tag = tag; },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    GameObject.prototype.update = function () { };
    return GameObject;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this, "dog") || this;
        _this.x = 0;
        _this.y = 537;
        _this.width = 80;
        _this.height = 73;
        _this.speed = 1;
        _this.state = new Running(_this);
        _this.draw();
        return _this;
    }
    Dog.prototype.update = function () {
        return this.move();
    };
    Dog.prototype.move = function () {
        var g = Game.getInstance();
        if (Utils.checkCollision(this, Game.getInstance().findObjects("ghost", true)[0])) {
            this.state = new Losing(this);
        }
        this.state.update();
        this.draw();
        if (this.x + this.width > 1024) {
            this.state = new Winning(this);
        }
    };
    return Dog;
}(GameObject));
var Ghost = (function (_super) {
    __extends(Ghost, _super);
    function Ghost() {
        var _this = _super.call(this, "ghost") || this;
        _this.x = 1024;
        _this.y = 520;
        _this.width = 66;
        _this.height = 80;
        _this.speed = -6;
        _this.draw();
        return _this;
    }
    Ghost.prototype.update = function () {
        return this.move();
    };
    Ghost.prototype.move = function () {
        this.x += this.speed;
        this.draw();
        var g = Game.getInstance();
        if (this.x + this.width < 0) {
            g.score += 10;
            this.x = 1024;
        }
    };
    return Ghost;
}(GameObject));
var Jumping = (function () {
    function Jumping(d) {
        this.dog = d;
        this.jumpDirection = -3;
    }
    Jumping.prototype.update = function () {
        this.dog.x += this.dog.speed;
        this.dog.y += this.jumpDirection;
        if (this.dog.y < 377) {
            this.jumpDirection = 3;
        }
        if (this.dog.y > 534) {
            this.dog.state = new Running(this.dog);
        }
    };
    return Jumping;
}());
var Losing = (function () {
    function Losing(d) {
        this.dog = d;
    }
    Losing.prototype.update = function () {
        this.dog.x = 472;
        this.dog.y = 537;
        this.dog.speed = 0;
        var g = Game.getInstance();
        g.gameOver("YOU LOSE!");
    };
    return Losing;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.gameObjects = [];
        this.gameObjects.push(new Dog(), new Ghost());
        this.scoreDiv = document.getElementById("score");
        this.score = 0;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var g = _a[_i];
            g.update();
            g.draw();
        }
        this.scoreDiv.innerHTML = "Score: " + this.score;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.gameOver = function (m) {
        this.scoreDiv.innerHTML = "Final score: " + this.score;
        for (var _i = 0, _a = this.findObjects("ghost"); _i < _a.length; _i++) {
            var g = _a[_i];
            g.div.remove();
            g = null;
        }
        var sky = document.getElementById("sky");
        sky.classList.add("stopanimation");
        var platform = document.getElementById("platform");
        platform.classList.add("stopanimation");
        var message = document.getElementById("message");
        message.innerHTML = m;
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.findObjects = function (tag, onlyOne) {
        if (onlyOne === void 0) { onlyOne = false; }
        var fnd = [];
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var g = _a[_i];
            if (g.tag == tag) {
                fnd.push(g);
                if (onlyOne)
                    break;
            }
        }
        return fnd;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var Running = (function () {
    function Running(d) {
        var _this = this;
        this.dog = d;
        this.listener = function (e) { return _this.onKeyDown(e); };
        window.addEventListener("keydown", this.listener);
    }
    Running.prototype.update = function () {
        this.dog.x += this.dog.speed;
    };
    Running.prototype.onKeyDown = function (e) {
        if (e.key == ' ') {
            var message = document.getElementById("message");
            message.innerHTML = "";
            window.removeEventListener("keydown", this.listener);
            this.dog.state = new Jumping(this.dog);
        }
    };
    return Running;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.checkCollision = function (m, n) {
        return (m.x < n.x + n.width &&
            m.x + m.width > n.x &&
            m.y < n.y + n.height &&
            m.height + m.y > n.y);
    };
    return Utils;
}());
var Winning = (function () {
    function Winning(d) {
        this.dog = d;
    }
    Winning.prototype.update = function () {
        this.dog.x = 472;
        this.dog.y = 537;
        this.dog.speed = 0;
        var g = Game.getInstance();
        g.score += 50;
        g.gameOver("YOU WIN!");
    };
    return Winning;
}());
//# sourceMappingURL=main.js.map