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
ctx.drawImage(boardImg, 400, 600, 2400, 1400)};


const timerImg = new Image(); // khong xai const se thanh global, khong can xai this vi khong can xai o cho khac
timerImg.src = "asset/icons/timer3.jpg"
timerImg.onload = function () { //cho cai hinh load len het roi moi chay function nay
ctx.drawImage(timerImg, 500, 700, 200, 300)};

class Timer {
    constructor(ctx) {
        this.timerImg = new Image(); //
        this.timerImg.src = "asset/icons/timer3.jpg";
        this.ctx = ctx; // gan ctx cua canvas cho ctx cua timer
        this.posInCanvas = [500, 700, 200, 300];
    }
    static tick = { //khong xai const/let/var phia ngoai constructor duoc
        "5": [125, 600],
        "4": [285, 600],
        "3": [440, 600],
        "2": [600, 600],
        "1": [755, 600]
    };
    init() { //nam trong class timer => ctx => Cat
        console.log("this trong init ne", this); // this = cat
        this.TimerImg.onload = function () { //cho cai hinh load len het roi moi chay function nay // this.catImg.onload => ctx = new Image(); = image
//             // ctx.drawImage(catImg, 60, 90, 250, 300, 1000, 2000, 700, 700); //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//             // ctx.drawImage(catImg, 330, 450, 280, 320, 1000, 2000, 700, 700); //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//             // ctx.drawImage(catImg, 330, 770, 280, 270, 1000, 2000, 700, 700); //4 tham so dau: vi tri tren hinh con meo, 4 tham so sau laf vi tri tren canvas
            console.log("this trong onload ne", this);
            this.ctx.drawImage(this.timerImg, 330, 770, 280, 270, ...this.posArray);
        }.bind(this); // bind voi cat, vi cat moi co .catImg
    }

    drawTimer(posArray) {
        this.clearTimer();
        this.ctx.drawImage(this.timerImg, posArray[0], posArray[1], 140, 180, ...this.posInCanvas);
    }

    clearTimer() {
        this.ctx.clearRect(...this.posInCanvas);
    }

};
const firstTimer = new Timer(ctx);

class Cat {
    constructor(ctx) {
        this.catImg = new Image(); //
        this.catImg.src = "asset/icons/cat.jpeg";
        this.ctx = ctx; // gan ctx cua canvas cho ctx cua Cat
        this.posInCanvas = [2400, 2000, 700, 700];
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
    constructor(time) {
        this.time = time;
        this.text = ["text", "cat"];
        let that = this;
        const boardImg = new Image(); // khong xai const se thanh global, khong can xai this vi khong can xai o cho khac
        boardImg.src = "asset/icons/board.jpeg"
        boardImg.onload = function () { //cho cai hinh load len het roi moi chay function nay
            ctx.drawImage(boardImg, 400, 600, 2400, 1400);
            // that.getTimer(time);
            // ctx.save();
        };
        // const timerImg = new Image(); // khong xai const se thanh global, khong can xai this vi khong can xai o cho khac
        // timerImg.src = "asset/icons/timer3.jpeg"
        // timerImg.onload = function () {
        //     ctx.drawImage(timerImg, 500, 700, 200, 300);
        // }
    };


    start() {
        this.getUserInput();
        const timer = setInterval(() => {
            // console.log("timer ne")
            const count = this.time;
            this.count -= 1;
            // ctx.clearRect(500, 700, 200, 200);
            // ctx.restore();
            // this.getTimer();
            if (this.count === 4) {
                firstTimer.drawTimer(Timer.tick["4"]);
            } else if (this.count === 3) {
                firstTimer.drawTimer(Timer.tick["3"]);
            } else if (this.count === 2) {
                firstTimer.drawTimer(Timer.tick["2"]);
            } else if (this.count === 1){
                firstTimer.drawTimer(Timer.tick["1"]);
            } else if (this.count === 0){
                this.clearInterval(timer);
            }
        }, 1000);

        ctx.font = "bold 150px Handlee cursive";
        ctx.fillStyle = "#FEFBF3";
        ctx.fillText("firstword", 1000, 1000, 1000);
        ctx.fillText("another word", 1800, 1500, 1000);
    };

    getUserInput() {
        const userInput = document.getElementById("user-input");
        userInput.addEventListener("keydown", function (event) {
            event.stopPropagation(); // stop bubbling out (line 29)
            if (event.key === "Enter") {
                alert("hello, it works!!!")
            }
        })
    };
};

const game = new Game(5);