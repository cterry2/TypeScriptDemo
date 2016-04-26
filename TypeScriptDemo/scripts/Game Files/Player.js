var Player = (function () {
    function Player(name, order, baseScore) {
        var _this = this;
        this.UpdateScoreWithCorrectValue = function (event) {
            if (event.target.classList.contains("middle")) {
                _this.UpdateScore(BoardLayout.Middle);
            }
            if (event.target.classList.contains("corner")) {
                _this.UpdateScore(BoardLayout.Corner);
            }
            if (event.target.classList.contains("center")) {
                _this.UpdateScore(BoardLayout.Center);
            }
        };
        this.Order = order;
        this.Name = name;
        this.Score = baseScore;
    }
    // This will be overloaded later
    Player.prototype.Draw = function (tile) {
    };
    ;
    // This will be overloaded later
    Player.prototype.UpdateScore = function (amount) {
        this.Score += amount;
    };
    ;
    // This will be overloaded later
    Player.prototype.ResetPlayer = function () {
    };
    ;
    return Player;
}());
//# sourceMappingURL=Player.js.map