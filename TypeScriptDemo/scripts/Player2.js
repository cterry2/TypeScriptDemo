var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player2 = (function (_super) {
    __extends(Player2, _super);
    function Player2(name) {
        _super.call(this, name, 2, 2);
        this.UpdateScore(0);
    }
    Player2.prototype.Draw = function (tile) {
        tile.attr("BoardValue", BoardValue.O);
        tile.text("O");
        tile.addClass("selected");
    };
    ;
    Player2.prototype.UpdateScore = function (amount) {
        _super.prototype.UpdateScore.call(this, amount);
        $("#player1points").text(this.Score);
    };
    ;
    return Player2;
}(Player));
//# sourceMappingURL=Player2.js.map