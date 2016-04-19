var Player = (function () {
    function Player(name, order, baseScore) {
        var _this = this;
        this.LoadPlayerEvents = function () {
            var self = _this;
            $(".board").off("click", ".middle").on("click", ".middle", function () {
                self.UpdateScore(2);
            });
            $(".board").off("click", ".corner").on("click", ".corner", function () {
                self.UpdateScore(1);
            });
            $(".board").off("click", ".center").on("click", ".center", function () {
                self.UpdateScore(-2);
            });
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
    return Player;
}());
//# sourceMappingURL=Player.js.map