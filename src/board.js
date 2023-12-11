export default class Board {
    constructor(tableElement) {
        this.tableElement = tableElement;
        this.boardData = [[0,0,0],[0,0,0],[0,0,0]];
    }

    //TODO: check the available cols' cells
    checkCol(index) {
        if(this.boardData[index].find(0)) {
            return true;
        } else {
            return false;
        }
    }

    updateBoardData(diceNum) {
        if(!this.boardData[index].find(0)) {
            this.boardData[index] = diceNum;
        }
    }

}

/*

const maxRows = 3, maxCols = 3;

// funcao para criar um tabuleiro 3x3
function createBoard(tableID) {
    var table = document.getElementById(tableID);
    
    for(var i = 0; i < maxRows; i++) {
        var row = table.insertRow(i);
        for(var j = 0; j < maxCols; j++) {
            var cell = row.insertCell(j);
            cell.id = `cpu-${i}-${j}`;
            cell.addEventListener("click", updateTableCell);
        }
    }   
}

//TODO: checks the cells ids to know their col
function emptyCol(cell) {
    if(cell.id) {
        //TODO: is the cell empty?
    }
}

function updateTableCell(isPlayer) {
    const playerDiceNum = document.getElementById("player-dice").textContent;
    if(!this.textContent) {
        this.textContent = playerDiceNum;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    createBoard("player-table");
    createBoard("cpu-table")
});

*/