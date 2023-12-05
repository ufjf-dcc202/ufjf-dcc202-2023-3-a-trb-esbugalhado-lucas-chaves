function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceDisplay(elementID) {
    var diceElement = document.getElementById(elementID);
    var randomNumber = rollDice();
    diceElement.textContent = " " + randomNumber;
}

document.getElementById("player-dice").addEventListener("click", function () {
    updateDiceDisplay("player-dice");
})


document.getElementById("cpu-dice").addEventListener("click", function () {
    updateDiceDisplay("cpu-dice");
})