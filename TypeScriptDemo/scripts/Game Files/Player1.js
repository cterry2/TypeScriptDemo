var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player1 = (function (_super) {
    __extends(Player1, _super);
    function Player1(name) {
        _super.call(this, name, 1, 0);
        this.UpdateScore(0);
    }
    Player1.prototype.Draw = function (tile) {
        tile.attr("BoardValue", BoardValue.X);
        tile.append("<span>X</span>");
        tile.addClass("selected");
    };
    ;
    Player1.prototype.UpdateScore = function (amount) {
        _super.prototype.UpdateScore.call(this, amount);
        $("#player1points").text(this.Score);
    };
    ;
    Player1.prototype.ResetPlayer = function () {
        this.Score = 0;
        this.UpdateScore(0);
    };
    ;
    return Player1;
}(Player));
