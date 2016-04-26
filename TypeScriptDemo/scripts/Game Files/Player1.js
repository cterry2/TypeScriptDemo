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
        tile.setAttribute("BoardValue", BoardValue.X.toString());
        tile.innerHTML = "<span>X</span>";
        tile.classList.add("selected");
    };
    ;
    Player1.prototype.UpdateScore = function (amount) {
        _super.prototype.UpdateScore.call(this, amount);
        document.getElementById("player1points").textContent = this.Score.toString();
    };
    ;
    Player1.prototype.ResetPlayer = function () {
        this.Score = 0;
        this.UpdateScore(0);
    };
    ;
    return Player1;
}(Player));
//# sourceMappingURL=Player1.js.map