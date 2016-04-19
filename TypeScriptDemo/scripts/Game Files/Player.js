var Player = (function () {
    function Player(name, order, baseScore) {
        var _this = this;
        this.LoadPlayerEvents = function () {
            var self = _this;
            $(".middle").off("click").on("click", function () {
                if ($(this).hasClass("selected"))
                    return;
                self.UpdateScore(2);
            });
            $(".corner").off("click").on("click", function () {
                if ($(this).hasClass("selected"))
                    return;
                self.UpdateScore(1);
            });
            $(".center").off("click").on("click", function () {
                if ($(this).hasClass("selected"))
                    return;
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
    // This will be overloaded later
    Player.prototype.ResetPlayer = function () {
    };
    ;
    return Player;
}());
