interface IPlayer {
    Name: string;
    Order: number;
    Score: number;
    Draw(tile: JQuery): void;
    LoadPlayerEvents(): void;
    UpdateScore(amount: number): void;
    ResetPlayer(): void;
}