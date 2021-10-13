module.exports = class Cat {
    constructor(ctx) {
        this.catImg = new Image(); //
        this.catImg.src = "asset/icons/cat.jpeg";
        this.ctx = ctx; // gan ctx cua canvas cho ctx cua Cat
        this.posInCanvas = [2000, 1400, 900, 1200];
    }
    static type = { //khong xai const/let/var phia ngoai constructor duoc
        "Maddie": [60, 90],
        "Matt": [330, 450],
        "Suzanne": [330, 750]
    };
    init() { //nam trong class CAt => ctx => Cat
        console.log("this inside init", this); // this = cat
        this.catImg.onload = function () { //cho cai hinh load len het roi moi chay function nay // this.catImg.onload => ctx = new Image(); = image
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



