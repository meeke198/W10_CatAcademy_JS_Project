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
    ctx.drawImage(boardImg, 200, 200, 2800, 1200)};

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


class Cat {
    constructor(ctx) {
        this.catImg = new Image(); //
        this.catImg.src = "asset/icons/cat.jpeg";
        this.ctx = ctx; // gan ctx cua canvas cho ctx cua Cat
        this.posInCanvas = [2200, 1800, 900, 1200];
    }
    static type = { //khong xai const/let/var phia ngoai constructor duoc
        "Maddie": [60, 90],
        "Matt": [330, 450],
        "Suzanne": [330, 750]
    };
    init() { //nam trong class CAt => ctx => Cat
        console.log("this inside init", this); // this = cat
        this.catImg.onload = function () { //cho cai hinh load len het roi moi chay function nay // this.catImg.onload => ctx = new Image(); = image
            // ctx.drawImage(catImg, 60, 90, 250, 300, 1000, 2000, 700, 700); //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            // ctx.drawImage(catImg, 330, 450, 280, 320, 1000, 2000, 700, 700); //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            // ctx.drawImage(catImg, 330, 770, 280, 270, 1000, 2000, 700, 700); //4 tham so dau: vi tri tren hinh con meo, 4 tham so sau laf vi tri tren canvas
            console.log("this trong onload ne", this);
            this.ctx.drawImage(this.catImg, 330, 770, 280, 270, ...this.posArray);
        }.bind(this); // bind voi cat, vi cat moi co .catImg
    }

    drawCat(posArray) {
        this.clearCat();
        this.ctx.drawImage(this.catImg, posArray[0], posArray[1], 250, 300, ...this.posInCanvas);
    }

    clearCat() {
        this.ctx.clearRect(...this.posInCanvas);
    }

};
const firstCat = new Cat(ctx);
// firstCat.init();
document.addEventListener("keydown", function (event) {
    // console.log(event);
    if (event.key === "1") {
        firstCat.drawCat(Cat.type["Maddie"]);
    } else if (event.key === "2") {
        firstCat.drawCat(Cat.type["Matt"]);
    } else if (event.key === "3") {
        firstCat.drawCat(Cat.type["Suzanne"]);
    } else {
        game.start(); //game start khi user nhan bat ky phim nao khac ngoai 123
    }
})




class Game {
    constructor(time, ctx) { //rule cua class la khong duoc dung bien global (const = ctx = canvas)
        this.time = time;
        this.ctx = ctx;
        this.text = ["text", "cat"];
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

    draw(){
        this.ctx.drawImage(this.boardImg, 200, 200, 2800, 1200);
        this.generateText();
        firstCat.drawCat(Cat.type["Suzanne"]);
    }; 

    generateText() {

        this.ctx.font = "bold 150px Handlee cursive";
        this.ctx.fillStyle = "#FEFBF3";
        for(let i = 0; i < this.text.length; i++){
            this.ctx.fillText(`${this.text[i]}`, ...Game.pos[i]);
            // ctx.fillText("another word", 1500, 1200, 1000);
        }  
    };

    beep() {
        let sound = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
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
   

    start() {
        this.generateText();
        this.getUserInput();
        // const timer = setInterval(() => {
        //     // console.log("timer ne")
        //     const count = this.time;
        //     this.count -= 1;
        //     // ctx.clearRect(500, 700, 200, 200);
        //     // ctx.restore();
        //     // this.getTimer();
        //     if (this.count === 4) {
        //         firstTimer.drawTimer(Timer.tick["4"]);
        //     } else if (this.count === 3) {
        //         firstTimer.drawTimer(Timer.tick["3"]);
        //     } else if (this.count === 2) {
        //         firstTimer.drawTimer(Timer.tick["2"]);
        //     } else if (this.count === 1){
        //         firstTimer.drawTimer(Timer.tick["1"]);
        //     } else if (this.count === 0){
        //         this.clearInterval(timer);
        //     }
        // }, 1000);
        // let seconds = 5;
        // let countdown = setInterval(function () {
        //     document.getElementById("timer").innerHTML = seconds;
        //     seconds = seconds - 1;
        //     if (seconds < 0) {
        //         clearInterval(countdown);
        //     }
        // }, 1000);

       
    };

    getUserInput() {
        let score = 0;
        let userInput = document.getElementById("user-input");
        userInput.addEventListener("keydown", function (event) {
            event.stopPropagation(); // stop bubbling out (line 29)
            if (event.key === "Enter") {
                console.log("event ne", event);
                for(let i = 0; i < this.text.length; i++){
                    if (this.text[i] === userInput.value) {
                        // score += 1;
                        console.log(this.score);
                        this.text.splice(i, 1); //remove in this.text
                        this.removeText(i); // remove tren UI
                        console.log(this.text);
                        console.log("true");
                        this.draw();
                    }
                }
            }
        }.bind(this));
    };


    // getUserInput() {
    //     let score = 0;
    //     let userInput = document.getElementById("user-input");
    //     userInput.addEventListener("keydown", function (event) {
    //         event.stopPropagation(); // stop bubbling out (line 29)
    //         console.log("event ne", event);
    //         for (let i = 0; i < this.text.length; i++) {
    //             for (let j = 0; j < this.text[i].length;) {
    //                 if (event.key === this.text[i][j]) {
    //                     j++
    //                 } else {
    //                     this.beep();
    //                 };
    //                 if (this.text[i] === userInput.value) {
    //                     score += 1;
    //                     console.log(this.score);
    //                     this.text.splice(i, 1); //remove in this.text
    //                     this.removeText(i); // remove tren UI
    //                     console.log(this.text);
    //                     console.log("true");
    //                     this.draw();
    //                 }
    //             };
    //         }
    //     }.bind(this));
    // };
};

// document.addEventListener("keydown", callback); 
// function callback(e){
// userInput.textContent = `e.value`;
// };
const game = new Game(5, ctx);