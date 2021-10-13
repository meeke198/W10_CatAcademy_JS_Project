let Cat = require('./cat')
let randomWords = require('random-words');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);
canvas.width = 3200; //kich thuoc that
canvas.height = 3200;
canvas.style.width = "800px"; //kich thuoc show trong html
canvas.style.height = "600px";
canvas.style.background = "#999999";

const boardImg = new Image(); // khong xai const se thanh global, khong can xai this vi khong can xai o cho khac
boardImg.src = "asset/icons/board.jpeg"
boardImg.onload = function () { //cho cai hinh load len het roi moi chay function nay
    ctx.drawImage(boardImg, 200, 200, 2800, 1200)
};

// let seconds= 5;
// let countdown = setInterval(function() {
//     document.getElementById("timer").innerHTML = seconds;
//     seconds = seconds - 1;
//     if (seconds < 0){
//         clearInterval(countdown);
//     }
// }, 1000);
// const timerImg = new Image(); // khong xai const se thanh global, khong can xai this vi khong can xai o cho khac
// timerImg.src = "asset/icons/timer3.jpg"
// timerImg.onload = function () { //cho cai hinh load len het roi moi chay function nay
// ctx.drawImage(timerImg, 500, 700, 200, 300)};
// const timerImg = new Image();
// timerImg.src = "./asset/timer3.jpg"
// timerImg.onload = function () {
//     ctx.clearRect(500, 700, 300, 300); //xoa truoc khi ve cai moi
//     ctx.drawImage(timerImg, 125, 600, 140, 180, 500, 700, 200, 300); //1
//     ctx.drawImage(timerImg, 285, 600, 140, 180, 500, 700, 200, 300); //2
//     ctx.drawImage(timerImg, 440, 600, 140, 180, 500, 700, 200, 300); //3
//     ctx.drawImage(timerImg, 600, 600, 140, 180, 500, 700, 200, 300); // 4
//     ctx.drawImage(timerImg, 755, 600, 140, 180, 500, 700, 200, 300); //5

class Timer {
    constructor(ctx) {
        this.timerImg = new Image(); //
        this.timerImg.src = "asset/icons/timer3.jpg";
        this.ctx = ctx; // gan ctx cua canvas cho ctx cua timer
        this.posInCanvas = [300, 350, 200, 300];
    }
    static tick = { //khong xai const/let/var phia ngoai constructor duoc
        "1": [125, 600],
        "2": [285, 600],
        "3": [440, 600],
        "4": [600, 600],
        "5": [755, 600]
    };
    init() { //nam trong class timer => ctx => Cat
        console.log("this trong init ne", this); // this = cat
        this.timerImg.onload = function () { //cho cai hinh load len het roi moi chay function nay // this.catImg.onload => ctx = new Image(); = image
            //             // ctx.drawImage(catImg, 60, 90, 250, 300, 1000, 2000, 700, 700); //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            //             // ctx.drawImage(catImg, 330, 450, 280, 320, 1000, 2000, 700, 700); //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            //             // ctx.drawImage(catImg, 330, 770, 280, 270, 1000, 2000, 700, 700); //4 tham so dau: vi tri tren hinh con meo, 4 tham so sau laf vi tri tren canvas
            console.log("this trong onload ne", this);
            this.drawTimer(Timer.tick["5"]);
        }.bind(this); // bind voi cat, vi cat moi co .catImg
    }

    drawTimer(posArray) {
        this.clearTimer();
        console.log(this);
        this.ctx.drawImage(this.timerImg, posArray[0], posArray[1], 140, 180, ...this.posInCanvas);
    }

    clearTimer() {
        this.ctx.clearRect(...this.posInCanvas);
    }

};


class Game {
    constructor(time, ctx) { //rule cua class la khong duoc dung bien global (const = ctx = canvas)
        this.time = time;
        this.ctx = ctx;
        this.score = 0;
        this.text = (randomWords(2));
        this.boardImg = new Image(); // khong xai const se thanh global, khong can xai this vi khong can xai o cho khac
        this.boardImg.src = "asset/icons/board.jpeg"
        this.boardImg.onload = function () { //cho cai hinh load len het roi moi chay function nay
            this.ctx.drawImage(this.boardImg, 200, 200, 2800, 1200);
            firstCat.drawCat(Cat.type["Suzanne"]);
            // const firstTimer = new Timer(ctx);
            // firstTimer.init();
        }.bind(this);
    };

    static pos = { //pos cua text tren bang den
        0: [800, 800, 1000],
        1: [1500, 1200, 1000],
        2: [1300, 1000, 1000],
        3: [1800, 700, 1000]
    };

    // randomPos() {
    //     return pos[Object.keys(pos)[Math.floor(Math.random() * Object.keys(pos).length)]];
    // };

    draw() {
        this.ctx.drawImage(this.boardImg, 200, 200, 2800, 1200);
        this.generateText();
        firstCat.drawCat(Cat.type["Suzanne"]);
    };

    generateText() {
        this.ctx.font = "bold 150px Handlee cursive";
        this.ctx.fillStyle = "#FEFBF3";
        for (let i = 0; i < this.text.length; i++) {
            // console.log(this.text[i]);
            if (this.text[i] != undefined) {
                console.log(this.text[i]);
                this.ctx.fillText(`${this.text[i]}`, ...Game.pos[i]);
                // ctx.fillText("another word", 1500, 1200, 1000);
            }
        }
    };

    backgroundMusic() {
        let sound = new Audio("asset/icons/Monkeys-Spinning-Monkeys.mp3");
        sound.play();
    };

    removeText(i) {
        // this.ctx.clearRect(Game.pos[i][0], Game.context.beginPath();
        this.ctx.beginPath();
        this.ctx.moveTo(Game.pos[i][0], Game.pos[i][1] - 40);
        this.ctx.lineTo(Game.pos[i][0] + 215, Game.pos[i][1] - 40);
        this.ctx.lineWidth = 10;

        // set line color
        this.ctx.strokeStyle = '#ff0000';
        this.ctx.stroke();
    }

    // gameloop = (timeStamp) => {
    //     lastime = timeStamp;
    //     game.getUserInput();
    //     game.draw();
    //     requestAnimationFrame(gameloop);

    // }
    // requestAnimationFrame(gameloop);
    checkGame(){
        if (this.text.some(e => e)) {
            this.endGame();
        } else {
            this.nextLevel();
        }
    }

    timer(){
        let seconds = this.time;
        this.countdown = setInterval(function () {
            document.getElementById("timer").innerHTML = seconds;
            seconds = seconds - 1;
            if (seconds < 0) {
                clearInterval(this.countdown);
                this.checkGame();
            }
        }.bind(this), 1000);
    }
    nextLevel(){
        this.text = (randomWords(2));
        clearInterval(this.countdown);
        this.start();
    }
    endGame(){
        console.log("end game");
    }
    start() {
        this.generateText();
        this.getUserInput();
        this.timer();
    };

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
                        setScore(this.score);
                        console.log(this.score);
                        this.text[i] = undefined; //remove in this.text
                        // this.removeText(i); // remove tren UI
                        console.log(this.text);
                        console.log("true")
                        userInput.value = '';
                        this.draw();
                    }
                }
                if (this.text.every(e => !e)){
                    this.nextLevel();
                }
            }
        }.bind(this));
    };
};

function setScore(score){
    let scores = document.getElementById("score");
    scores.innerHTML = score;
};
// let userInput = document.getElementById("user-input");
// userInput.addEventListener("keydown", function (event) {
//     console.log("this ne", this)
//     if (event.key = "Enter") {
//         return userInput.forEach(input => input.value = '');
//     }
// });

// document.addEventListener("keydown", callback); 
// function callback(e){
// userInput.textContent = `e.value`;
// };
const firstCat = new Cat(ctx);
console.log(firstCat);
const game = new Game(5, ctx);

document.addEventListener("keydown", function() {
    game.start();
})