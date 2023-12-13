export default class Player {
    constructor(board, dice, isPlayer) {
        this.board = board;
        this.dice = dice;
        this.isPlayer = isPlayer;
        this.points = 0;
    }

    placeDiceNum(col) {
        if(this.board.checkCol(col)){
            this.board.updateBoardData(this.dice.currNum);
        }
    }

    placeOnRandCol() {
        let randCol = Math.floor(Math.random() * 3);
        this.placeDiceNum(randCol);
    }

    updatePoints(points) {
        this.points += points;
    }

}