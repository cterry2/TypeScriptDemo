class Player2 extends Player implements IPlayer {
    constructor(name: string) {
        super(name, 2, 2);
        this.UpdateScore(0);
    }

    public Draw(tile: HTMLElement): void {        
        tile.setAttribute("BoardValue", BoardValue.O.toString());
        tile.innerHTML = "<span>O</span>";
        tile.classList.add("selected");
    };

    public UpdateScore(amount: number): void {
        super.UpdateScore(amount);
        document.getElementById("player2points").textContent = this.Score.toString();
    };

    public ResetPlayer(): void {
        this.Score = 2;
        this.UpdateScore(0);
    };
}