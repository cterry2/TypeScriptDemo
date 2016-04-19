class Game {
    Players: Array<IPlayer>;
    ActivePlayer: IPlayer;
    Board: IGameBoard;

    constructor() {
        this.LoadBoardEvents();
        this.Board = new GameBoard();
        this.Players = [];
    }

    private UpdateOrCreatePlayer1 = (event) => {
        if (!this.DoesPlayerExist(1)) {
            this.Players.push(new Player1(event.target.value));
        } else {
            this.ChangePlayerName(1, event.target.val());
        }
    };

    public LoadBoardEvents = () => {
        var self = this

        document.getElementById("Player1").removeEventListener("blur", this.UpdateOrCreatePlayer1, false);
        document.getElementById("Player1").addEventListener("blur", this.UpdateOrCreatePlayer1, false);

        //$("#Player1").off("blur").on("blur", function () {
        //    if (!self.DoesPlayerExist(1)) {
        //        self.Players.push(new Player1($(this).val()));
        //    } else {
        //        self.ChangePlayerName(1, $(this).val());
        //    }
        //});

        $("#Player2").off("blur").on("blur", function () {
            if (!self.DoesPlayerExist(2)) {
                self.Players.push(new Player2($(this).val()));
            } else {
                self.ChangePlayerName(2, $(this).val());
            }
        });

        $(".stats").off("click", "#start:visible").on("click", "#start:visible", function () {
            if (self.Players.length > 1) {
                self.PlayGame();
            }
        });

        $(".stats").off("click", "#reset:visible").on("click", "#reset:visible", function () {
            self.ResetGame();
        });
    };

    public ResetGame = () => {
        for (var i = 0; i < this.Players.length; i++) {
            this.Players[i].ResetPlayer();
        }

        $(".board").off("click", ".tile:not(.selected)")

        this.Board = new GameBoard();
        $(".player1winner").text("");
        $(".player2winner").text("");
        //$("#start").show();
        document.getElementById("start").style.display = "block";
        document.getElementById("reset").style.display = "none";
        //$("#reset").hide();
    };

    public PlayGame = () => {
        var self = this;

        this.ActivePlayer = this.Players[0];
        this.ActivePlayer.LoadPlayerEvents();

        $(".board").off("click", ".tile:not(.selected)").on("click", ".tile:not(.selected)", function () {
            self.ActivePlayer.Draw($(this));
            var winner = self.Board.ValidateWinner();            

            if (winner) {
                $(".board").off("click", ".tile:not(.selected)");
                if (winner !== 8) {
                    self.ActivePlayer.UpdateScore(4);
                }
                $(".player1winner").text(self.Players[0].Score > self.Players[1].Score ? "WINNER!!" : "LOSER!!");
                $(".player2winner").text(self.Players[0].Score < self.Players[1].Score ? "WINNER!!" : "LOSER!!");
                if (self.Players[0].Score === self.Players[1].Score) {
                    $(".player1winner,.player2winner").text("True Tie!!")
                }
            } else {
                self.SwitchPlayers();
            }
        });

        //$("#start").hide();
        document.getElementById("start").style.display = "none";
        document.getElementById("reset").style.display = "block";
        //$("#reset").show();
    };

    public SwitchPlayers = () => {
        if (this.ActivePlayer.Order === this.Players.length) {
            this.ActivePlayer = this.Players[0];
        } else {
            this.ActivePlayer = this.Players[this.ActivePlayer.Order];
        }

        this.ActivePlayer.LoadPlayerEvents();
    };

    public DoesPlayerExist = (order: number) => {
        for (var i = 0; i < this.Players.length; i++) {
            if (this.Players[i].Order == order) return true;
        }

        return false;
    };

    private MyFunction(myVariable): void {

    };

    public ChangePlayerName = (order: number, name: string) => {
        for (var i = 0; i < this.Players.length; i++) {
            if (this.Players[i].Order == order && this.Players[i].Name !== name) this.Players[i].Name = name;
        }
    };
}