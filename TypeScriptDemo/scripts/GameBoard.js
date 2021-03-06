var GameBoard = (function () {
    function GameBoard() {
        var _this = this;
        this.DivideBoardForWinning = function () {
            var tiles = $(".tile");
            var across1 = [tiles[0], tiles[1], tiles[2]];
            var across2 = [tiles[3], tiles[4], tiles[5]];
            var across3 = [tiles[6], tiles[7], tiles[8]];
            var down1 = [tiles[0], tiles[3], tiles[6]];
            var down2 = [tiles[1], tiles[4], tiles[7]];
            var down3 = [tiles[2], tiles[5], tiles[8]];
            var diagonal1 = [tiles[0], tiles[4], tiles[8]];
            var diagonal2 = [tiles[2], tiles[4], tiles[6]];
            _this.GroupsOfTiles = [across1, across2, across3, down1, down2, down3, diagonal1, diagonal2];
        };
        this.ValidateWinner = function () {
            for (var i = 0; i < _this.GroupsOfTiles.length; i++) {
                var total = 0;
                for (var x = 0; x < _this.GroupsOfTiles[i].length; x++) {
                    total += parseInt($(_this.GroupsOfTiles[i][x]).attr("BoardValue") || "0");
                }
                if (total === 3 || total === 30)
                    return total;
            }
            return 0;
        };
        $(".tile").removeClass("selected").text("");
        this.DivideBoardForWinning();
    }
    return GameBoard;
}());
//# sourceMappingURL=GameBoard.js.map