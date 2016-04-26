abstract class Player {
    public Order: number;
    public Name: string;
    public Score: number;
    
    constructor(name: string, order: number, baseScore:number) {
        this.Order = order;
        this.Name = name;
        this.Score = baseScore;        
    }

    // This will be overloaded later
    public Draw(tile: HTMLElement): void {
    };

    // This will be overloaded later
    public UpdateScore(amount: number): void {
        this.Score += amount;
    };

    // This will be overloaded later
    public ResetPlayer(): void {
    };    

    public UpdateScoreWithCorrectValue = (event) => {        
        if (event.target.classList.contains("middle")) {
            this.UpdateScore(2);
        }

        if (event.target.classList.contains("corner")) {
            this.UpdateScore(1);
        }

        if (event.target.classList.contains("center")) {
            this.UpdateScore(-2);
        }
    }    
}