let {clearUserInput, setScore} = require('./helper')
console.log(clearUserInput, setScore);
let randomWords = require('random-words');
let Cat = require('./cat')
module.exports = class Game {
    constructor(time, ctx, firstCat) { //rule cua class la khong duoc dung bien global (const = ctx = canvas)
        this.time = time;
        this.ctx = ctx;
        this.firstCat = firstCat;
        this.score = 0;
        this.text = (randomWords(2));
        this.boardImg = new Image(); // khong xai const se thanh global, khong can xai this vi khong can xai o cho khac
        this.boardImg.src = "asset/icons/board.jpeg"

    };

    static pos = { //pos cua text tren bang den
        0: [1000, 500, 1000],
        1: [1500, 1200, 1000],
        2: [2200, 800, 1000],
        3: [800, 1000, 1000]
    };


    draw() {
        this.ctx.drawImage(this.boardImg, 200, 200, 2800, 1200);
        this.generateText();
        this.firstCat.drawCat(Cat.type["Suzanne"]);
    };

    generateText() {
        this.ctx.font = "bold 150px Handlee cursive";
        this.ctx.fillStyle = "#FEFBF3";
        for (let i = 0; i < this.text.length; i++) {
            if (this.text[i] != undefined) {
                console.log(this.text[i]);
                this.ctx.fillText(`${this.text[i]}`, ...Game.pos[i]);
            }
        }
    };

    meow() {
        let sound = new Audio("asset/icons/meow2.m4a");
        sound.play();
    };


    // gameloop = (timeStamp) => {
    //     lastime = timeStamp;
    //     game.getUserInput();
    //     game.draw();
    //     requestAnimationFrame(gameloop);

    // }
    // requestAnimationFrame(gameloop);
    checkGame() {
        if (this.text.some(e => e)) {
            this.endGame();
        } else {
            this.nextLevel();
        }
    }

    timer() {
        let seconds = this.time;
        clearInterval(this.countdown);
        this.countdown = setInterval(function () {
            document.getElementById("timer").innerHTML = seconds;
            seconds = seconds - 1;
            if (seconds === 1) {
                this.firstCat.drawCat(Cat.type["Maddie"]);
            }
            if (seconds < 0) {
                clearInterval(this.countdown);
                this.checkGame();
            }
        }.bind(this), 1000);
    }

    nextLevel() {
        if (this.score < 2) {
            this.text = (randomWords(2));
        } else {
            this.firstCat.drawCat(Cat.type["Matt"]);
            // this.meow();
            this.text = (randomWords(3));
        };
        this.generateText();
        this.timer();
    }


    endGame() {
        console.log("end game");
        let popupEnd = document.getElementById("popupEnd")
        popupEnd.style.display = 'flex'; //flex to center both side
        let scores = document.getElementById("scoreEnd");
        scores.innerHTML = this.score; //this.score = updated scores in constructor
        let tryagainButton = document.getElementById("end")
        tryagainButton.addEventListener("click", function (event) {
            popupEnd.style.display = 'none'; //hide popup
            this.restartGame();
        }.bind(this));

    }
    start() {
        clearUserInput();
        this.boardImg.onload = function () { 
            this.ctx.drawImage(this.boardImg, 200, 200, 2800, 1200);
            this.firstCat.drawCat(Cat.type["Suzanne"]);
            this.score = 0;
            this.generateText();
            this.getUserInput();
            this.timer();
        }.bind(this);
    };

    restartGame() {  //restart score
        clearUserInput();
        this.text = this.text.map(e => undefined);
        this.score = 0;
        setScore(this.score);
        this.text = (randomWords(2));
        this.draw();
        this.timer();
    }

    getUserInput() {

        let userInput = document.getElementById("user-input");
        userInput.focus();
        userInput.addEventListener("keydown", function (event) {
            event.stopPropagation(); // stop bubbling out (line 29)
            if (event.key === "Enter") {
                console.log("event ne", event);
                for (let i = 0; i < this.text.length; i++) {
                    if (this.text[i] === userInput.value) {
                        this.score += 1;
                        // this.clearUserInput();
                        setScore(this.score);
                        console.log(this.score);
                        this.text[i] = undefined; //remove in this.text
                        console.log(this.text);
                        console.log("true")
                        userInput.value = '';
                        this.draw();
                    }
                }
                if (this.text.every(e => !e)) {
                    this.nextLevel();
                }
            }
        }.bind(this));
    };
};