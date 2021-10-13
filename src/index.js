let Cat = require('./cat')
let Game = require('./game')
// console.log(startGame);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);
canvas.width = 3200; //kich thuoc that
canvas.height = 3200;
canvas.style.width = "800px"; //kich thuoc show trong html
canvas.style.height = "600px";
canvas.style.background = "#999999";

let startButton = document.getElementById("start");
startButton.addEventListener("click", function (event) {
    startGame(ctx);
});

function startGame(ctx) {
    const firstCat = new Cat(ctx);
    console.log(firstCat);
    const game = new Game(5, ctx, firstCat);
    game.start();
    let popupStart = document.getElementById('popupStart');
    popupStart.style.display = 'none';
};



