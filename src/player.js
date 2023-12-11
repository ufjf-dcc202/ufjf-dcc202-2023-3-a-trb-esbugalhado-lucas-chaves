export default class Player {
    constructor(board, dice, isPlayer) {
        this.board = board;
        this.dice = dice;
        this.isPlayer = isPlayer;
    }

    placeDiceNum(col) {
        if(this.board.checkCol(col)){
            this.board.updateBoardData(this.dice.currNum);
        }
    }

}