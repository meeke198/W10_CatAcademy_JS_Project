

function setScore(score) {
    let scores = document.getElementById("score");
    scores.innerHTML = score;
};

function clearUserInput() {
    let userInput = document.getElementById("user-input");
    userInput.value = '';
    userInput.focus();
}


module.exports = {
    setScore, clearUserInput
}