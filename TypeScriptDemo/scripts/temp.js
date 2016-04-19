var Game = (function () {
    function Game() {

    }
    this.LoadBoardEvents();
    this.Board = new GameBoard();
    this.Players = [];

    return Game;
}());

