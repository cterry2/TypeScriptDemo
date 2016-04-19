class GameBoard implements IGameBoard {
    GroupsOfTiles: Array<Array<HTMLElement>>;

    constructor() {
        $(".tile").removeClass("selected").text("").attr("BoardValue", "0");
        this.DivideBoardForWinning();
    }

    public DivideBoardForWinning = () => {
        var tiles = $(".tile");

        var across1 = [tiles[0], tiles[1], tiles[2]];
        var across2 = [tiles[3], tiles[4], tiles[5]];
        var across3 = [tiles[6], tiles[7], tiles[8]];

        var down1 = [tiles[0], tiles[3], tiles[6]];
        var down2 = [tiles[1], tiles[4], tiles[7]];
        var down3 = [tiles[2], tiles[5], tiles[8]];

        var diagonal1 = [tiles[0], tiles[4], tiles[8]];
        var diagonal2 = [tiles[2], tiles[4], tiles[6]];

        this.GroupsOfTiles = [across1, across2, across3, down1, down2, down3, diagonal1, diagonal2];
    };

    public ValidateWinner = () => {
        var count = 0;
        for (var i = 0; i < this.GroupsOfTiles.length; i++) {
            var total = 0;
            for (var x = 0; x < this.GroupsOfTiles[i].length; x++) {
                total += parseInt($(this.GroupsOfTiles[i][x]).attr("BoardValue") || "0");
            }

            if (total > 11) count++;

            if (total === 3 || total === 30) return total;
        }
                
        return count == 8 ? 8 : 0;
    };
}