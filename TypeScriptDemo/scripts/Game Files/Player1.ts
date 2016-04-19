class Player1 extends Player implements IPlayer {
    constructor(name: string) {
        super(name, 1, 0);
        this.UpdateScore(0);
    }

    public Draw(tile: JQuery): void {
        tile.attr("BoardValue", BoardValue.X);
        tile.append("<span>X</span>");
        tile.addClass("selected");
    };

    public UpdateScore(amount: number): void {
        super.UpdateScore(amount);
        $("#player1points").text(this.Score);
    };

    public ResetPlayer(): void {
        this.Score = 0;
        this.UpdateScore(0);
    };
}