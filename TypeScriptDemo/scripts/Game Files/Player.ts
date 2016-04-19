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
    public Draw(tile: JQuery): void {
    };

    // This will be overloaded later
    public UpdateScore(amount: number): void {
        this.Score += amount;
    };

    // This will be overloaded later
    public ResetPlayer(): void {
    };

    public LoadPlayerEvents = () => {
        var self = this;

        $(".middle").off("click").on("click", function () {
            if ($(this).hasClass("selected")) return;
            self.UpdateScore(2);
        });

        $(".corner").off("click").on("click", function () {
            if ($(this).hasClass("selected")) return;
            self.UpdateScore(1);
        });

        $(".center").off("click").on("click", function () {
            if ($(this).hasClass("selected")) return;
            self.UpdateScore(-2);
        });
    };

    
}