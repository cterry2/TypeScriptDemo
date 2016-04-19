var Game = (function () {
    function Game() {
        var _this = this;
        this.LoadBoardEvents = function () {
            var self = _this;
            $("#Player1").off("blur").on("blur", function () {
                if (!self.DoesPlayerExist(1)) {
                    self.Players.push(new Player1($(this).val()));
                }
                else {
                    self.ChangePlayerName(1, $(this).val());
                }
            });
            $("#Player2").off("blur").on("blur", function () {
                if (!self.DoesPlayerExist(1)) {
                    self.Players.push(new Player2($(this).val()));
                }
                else {
                    self.ChangePlayerName(2, $(this).val());
                }
            });
            $(".board").off("click", ".tile:not(.selected)").on("click", ".tile:not(.selected)", function () {
                self.ActivePlayer.Draw($(this));
            });
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
    }
    return Game;
}());
//# sourceMappingURL=Game.js.map