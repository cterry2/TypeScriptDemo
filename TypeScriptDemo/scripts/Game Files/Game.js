var Game = (function () {
    function Game() {
        var _this = this;
        this.UpdateOrCreatePlayer1 = function (event) {
            if (!_this.DoesPlayerExist(1)) {
                _this.Players.push(new Player1(event.target.value));
            }
            else {
                _this.ChangePlayerName(1, event.target.val());
            }
        };
        this.LoadBoardEvents = function () {
            var self = _this;
            document.getElementById("Player1").removeEventListener("blur", _this.UpdateOrCreatePlayer1, false);
            document.getElementById("Player1").addEventListener("blur", _this.UpdateOrCreatePlayer1, false);
            //$("#Player1").off("blur").on("blur", function () {
            //    if (!self.DoesPlayerExist(1)) {
            //        self.Players.push(new Player1($(this).val()));
            //    } else {
            //        self.ChangePlayerName(1, $(this).val());
            //    }
            //});
            $("#Player2").off("blur").on("blur", function () {
                if (!self.DoesPlayerExist(2)) {
                    self.Players.push(new Player2($(this).val()));
                }
                else {
                    self.ChangePlayerName(2, $(this).val());
                }
            });
            $(".stats").off("click", "#start:visible").on("click", "#start:visible", function () {
                if (self.Players.length > 1) {
                    self.PlayGame();
                }
            });
            $(".stats").off("click", "#reset:visible").on("click", "#reset:visible", function () {
                self.ResetGame();
            });
        };
        this.ResetGame = function () {
            for (var i = 0; i < _this.Players.length; i++) {
                _this.Players[i].ResetPlayer();
            }
            $(".board").off("click", ".tile:not(.selected)");
            _this.Board = new GameBoard();
            $(".player1winner").text("");
            $(".player2winner").text("");
            //$("#start").show();
            document.getElementById("start").style.display = "block";
            document.getElementById("reset").style.display = "none";
            //$("#reset").hide();
        };
        this.PlayGame = function () {
            var self = _this;
            _this.ActivePlayer = _this.Players[0];
            _this.ActivePlayer.LoadPlayerEvents();
            $(".board").off("click", ".tile:not(.selected)").on("click", ".tile:not(.selected)", function () {
                self.ActivePlayer.Draw($(this));
                var winner = self.Board.ValidateWinner();
                if (winner) {
                    $(".board").off("click", ".tile:not(.selected)");
                    if (winner !== 8) {
                        self.ActivePlayer.UpdateScore(4);
                    }
                    $(".player1winner").text(self.Players[0].Score > self.Players[1].Score ? "WINNER!!" : "LOSER!!");
                    $(".player2winner").text(self.Players[0].Score < self.Players[1].Score ? "WINNER!!" : "LOSER!!");
                    if (self.Players[0].Score === self.Players[1].Score) {
                        $(".player1winner,.player2winner").text("True Tie!!");
                    }
                }
                else {
                    self.SwitchPlayers();
                }
            });
            //$("#start").hide();
            document.getElementById("start").style.display = "none";
            document.getElementById("reset").style.display = "block";
            //$("#reset").show();
        };
        this.SwitchPlayers = function () {
            if (_this.ActivePlayer.Order === _this.Players.length) {
                _this.ActivePlayer = _this.Players[0];
            }
            else {
                _this.ActivePlayer = _this.Players[_this.ActivePlayer.Order];
            }
            _this.ActivePlayer.LoadPlayerEvents();
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
    Game.prototype.MyFunction = function (myVariable) {
    };
    ;
    return Game;
}());
