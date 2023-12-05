// funcao para criar um tabuleiro 3x3

function createBoard(tableID) {
    var table = document.getElementById(tableID);

    for(var i = 0; i < 3; i++) {
        var row = table.insertRow(i);
        for(var j = 0; j < 3; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener("click", testCell);
        }
    }
}

// funcao placeholder enquanto nao tem a logica do jogo
function testCell() {
    this.textContent = this.textContent === "" ? "A" : "B";
}

document.addEventListener("DOMContentLoaded", function() {
    createBoard("player-table");
    createBoard("cpu-table")
});