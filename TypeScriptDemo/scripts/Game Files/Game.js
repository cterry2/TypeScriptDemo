var Game = (function () {
    function Game() {
        var _this = this;
        this.UpdateOrCreatePlayer1 = function (event) {
            if (!_this.DoesPlayerExist(1)) {
                _this.Players.push(new Player1(event.target.value));
            }
            else {
                _this.ChangePlayerName(1, event.target.value);
            }
        };
        this.UpdateOrCreatePlayer2 = function (event) {
            if (!_this.DoesPlayerExist(2)) {
                _this.Players.push(new Player2(event.target.value));
            }
            else {
                _this.ChangePlayerName(2, event.target.value);
            }
        };
        this.StartGame = function () {
            if (_this.Players.length > 1) {
                _this.PlayGame();
            }
        };
        this.LoadBoardEvents = function () {
            var self = _this;
            document.getElementById("Player1").removeEventListener("blur", _this.UpdateOrCreatePlayer1, false);
            document.getElementById("Player1").addEventListener("blur", _this.UpdateOrCreatePlayer1, false);
            document.getElementById("Player2").removeEventListener("blur", _this.UpdateOrCreatePlayer2, false);
            document.getElementById("Player2").addEventListener("blur", _this.UpdateOrCreatePlayer2, false);
            document.querySelector("#start").removeEventListener("click", _this.StartGame, false);
            document.querySelector("#start").addEventListener("click", _this.StartGame, false);
            document.querySelector("#reset").removeEventListener("click", _this.ResetGame, false);
            document.querySelector("#reset").addEventListener("click", _this.ResetGame, false);
        };
        this.RemoveClick = function () {
            var tiles = document.getElementsByClassName("tile");
            for (var i = 0; i < tiles.length; i++) {
                tiles[i].removeEventListener("click", _this.SelectCell);
            }
        };
        this.ResetGame = function () {
            for (var i = 0; i < _this.Players.length; i++) {
                _this.Players[i].ResetPlayer();
            }
            var tiles = document.getElementsByClassName("tile");
            for (var i = 0; i < tiles.length; i++) {
                tiles[i].innerHTML = "";
            }
            _this.RemoveClick();
            _this.Board = new GameBoard();
            document.getElementsByClassName("player1winner")[0].textContent = "";
            document.getElementsByClassName("player2winner")[0].textContent = "";
            document.getElementById("start").style.display = "block";
            document.getElementById("reset").style.display = "none";
        };
        this.PlayGame = function () {
            var self = _this;
            _this.ActivePlayer = _this.Players[0];
            var tiles = document.getElementsByClassName("tile");
            for (var i = 0; i < tiles.length; i++) {
                tiles[i].addEventListener("click", _this.SelectCell);
            }
            document.getElementById("start").style.display = "none";
            document.getElementById("reset").style.display = "block";
        };
        this.SelectCell = function (event) {
            if (event.target.classList.contains("selected") || event.target.nodeName === "SPAN")
                return;
            _this.ActivePlayer.Draw(event.target);
            _this.ActivePlayer.UpdateScoreWithCorrectValue(event);
            var winner = _this.Board.ValidateWinner();
            if (winner) {
                _this.RemoveClick();
                if (winner !== 8) {
                    _this.ActivePlayer.UpdateScore(4);
                }
                document.getElementsByClassName("player1winner")[0].textContent = (_this.Players[0].Score > _this.Players[1].Score ? "WINNER!!" : "LOSER!!");
                document.getElementsByClassName("player2winner")[0].textContent = (_this.Players[0].Score < _this.Players[1].Score ? "WINNER!!" : "LOSER!!");
                if (_this.Players[0].Score === _this.Players[1].Score) {
                    document.getElementsByClassName("player1winner")[0].textContent = "True Tie!!";
                    document.getElementsByClassName("player2winner")[0].textContent = "True Tie!!";
                }
            }
            else {
                _this.SwitchPlayers();
            }
        };
        this.SwitchPlayers = function () {
            if (_this.ActivePlayer.Order === _this.Players.length) {
                _this.ActivePlayer = _this.Players[0];
            }
            else {
                _this.ActivePlayer = _this.Players[_this.ActivePlayer.Order];
            }
        };
        this.DoesPlayerExist = function (order) {
            for (var i = 0; i < _this.Players.length; i++) {
                if (_this.Players[i].Order == order)
                    return true;
            }
            return false;
        };
        this.ChangePlayerName = function (order, name) {
            for (var i = 0; i < _this.Players.length; i++) {
                if (_this.Players[i].Order == order && _this.Players[i].Name !== name)
                    _this.Players[i].Name = name;
            }
        };
        this.LoadBoardEvents();
        this.Board = new GameBoard();
        this.Players = [];
    }
    return Game;
}());
//# sourceMappingURL=Game.js.map