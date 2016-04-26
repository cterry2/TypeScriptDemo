interface IPlayer {
    Name: string;
    Order: number;
    Score: number;
    Draw(tile: HTMLElement): void;
    UpdateScoreWithCorrectValue(event: EventListener): void;
    UpdateScore(amount: number): void;
    ResetPlayer(): void;
    
}