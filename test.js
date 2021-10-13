let getUserInput = document.getElementById("userInput");
let text = ["cat", "text", "testing"];

const characters = text.map((char) => {

    const span = document.createElement("span");
    span.innerText = char;
    getUserInput.appendChild(span)
    return span;

});
let indexHighlight = 0
let charHightlight = characters[indexHighlight]
charHightlight.classList.add("highlight")
document.addEventListener('keydown', (key) => {
if (key === firstCharacter.innerText) {
    charHightlight.classList.remove("highlight");
    charHightlight.classList.add("done");
    charHightlight = characters[++indexHighlight];
    charHightlight.classList.add("highlight");
}

if (indexHighlight >= characters.length) {
    //delete the word and draw the board again
}
});

getUserInput() {
    let score = 0;
    let userInput = document.getElementById("user-input");
    userInput.addEventListener("keydown", function (event) {
        event.stopPropagation(); // stop bubbling out (line 29)
            console.log("event ne", event);
            for (let i = 0; i < this.text.length; i++) {
                for (let j = 0; j < this.text[i].length;) {
                    if (event.key === this.text[i][j]) {
                        j++
                    } else {
                        beep();
                    };
                    if (this.text[i] === userInput.value) {
                        score += 1;
                        console.log(this.score);
                        this.text.splice(i, 1); //remove in this.text
                        this.removeText(i); // remove tren UI
                        console.log(this.text);
                        console.log("true");
                        this.draw();
                    }
                };
            }
    }.bind(this));
};

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input')

btnClear.addEventListener("click", () => {
    inputs.forEach(input => input.value = '');
})