class Player2 extends Player implements IPlayer {
    constructor(name: string) {
        super(name, 2, 2);
        this.UpdateScore(0);
    }

    public Draw(tile: JQuery): void {
        tile.attr("BoardValue", BoardValue.O);
        tile.append("<span>O</span>");
        tile.addClass("selected");
    };

    public UpdateScore(amount: number): void {
        super.UpdateScore(amount);
        $("#player2points").text(this.Score);
    };

    public ResetPlayer(): void {
        this.Score = 2;
        this.UpdateScore(0);
    };
}