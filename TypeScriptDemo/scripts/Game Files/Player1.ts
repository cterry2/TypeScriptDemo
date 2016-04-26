class Player1 extends Player implements IPlayer {
    constructor(name: string) {
        super(name, 1, 0);
        this.UpdateScore(0);
    }

    public Draw(tile: HTMLElement): void {
        tile.setAttribute("BoardValue", BoardValue.X.toString());
        tile.innerHTML = "<span>X</span>";
        tile.classList.add("selected");
    };

    public UpdateScore(amount: number): void {
        super.UpdateScore(amount);
        document.getElementById("player1points").textContent = this.Score.toString();
    };

    public ResetPlayer(): void {
        this.Score = 0;
        this.UpdateScore(0);
    };
}