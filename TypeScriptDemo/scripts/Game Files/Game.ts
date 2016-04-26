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
            this.ChangePlayerName(1, event.target.value);
        }
    };

    private UpdateOrCreatePlayer2 = (event) => {
        if (!this.DoesPlayerExist(2)) {
            this.Players.push(new Player2(event.target.value));
        } else {
            this.ChangePlayerName(2, event.target.value);
        }
    }

    private StartGame = () => {
        if (this.Players.length > 1) {
            this.PlayGame();
        }
    }

    public LoadBoardEvents = () => {
        var self = this

        document.getElementById("Player1").removeEventListener("blur", this.UpdateOrCreatePlayer1, false);
        document.getElementById("Player1").addEventListener("blur", this.UpdateOrCreatePlayer1, false);
        
        document.getElementById("Player2").removeEventListener("blur", this.UpdateOrCreatePlayer2, false);
        document.getElementById("Player2").addEventListener("blur", this.UpdateOrCreatePlayer2, false);

        document.querySelector("#start").removeEventListener("click", this.StartGame, false);
        document.querySelector("#start").addEventListener("click", this.StartGame, false);

        document.querySelector("#reset").removeEventListener("click", this.ResetGame, false);
        document.querySelector("#reset").addEventListener("click", this.ResetGame, false);        
    };

    private RemoveClick = () => {
        var tiles = document.getElementsByClassName("tile");
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].removeEventListener("click", this.SelectCell);
        } 
    }

    public ResetGame = () => {
        for (var i = 0; i < this.Players.length; i++) {
            this.Players[i].ResetPlayer();
        }

        var tiles = document.getElementsByClassName("tile");
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
        }
        this.RemoveClick();

        this.Board = new GameBoard();
        document.getElementsByClassName("player1winner")[0].textContent = "";
        document.getElementsByClassName("player2winner")[0].textContent = "";
        
        document.getElementById("start").style.display = "block";
        document.getElementById("reset").style.display = "none";        
    };

    public PlayGame = () => {
        var self = this;

        this.ActivePlayer = this.Players[0];        

        var tiles = document.getElementsByClassName("tile");
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener("click", this.SelectCell);
        }
                
        document.getElementById("start").style.display = "none";
        document.getElementById("reset").style.display = "block";        
    };

    private SelectCell = (event) => {        
        if (event.target.classList.contains("selected") || event.target.nodeName === "SPAN") return;
        
        this.ActivePlayer.Draw(event.target);
        this.ActivePlayer.UpdateScoreWithCorrectValue(event);
        var winner = this.Board.ValidateWinner();

        if (winner) {
            this.RemoveClick();

            if (winner !== 8) {
                this.ActivePlayer.UpdateScore(4);
            }
            document.getElementsByClassName("player1winner")[0].textContent = (this.Players[0].Score > this.Players[1].Score ? "WINNER!!" : "LOSER!!");
            document.getElementsByClassName("player2winner")[0].textContent = (this.Players[0].Score < this.Players[1].Score ? "WINNER!!" : "LOSER!!");
            if (this.Players[0].Score === this.Players[1].Score) {
                document.getElementsByClassName("player1winner")[0].textContent = "True Tie!!";
                document.getElementsByClassName("player2winner")[0].textContent = "True Tie!!";                
            }
        } else {
            this.SwitchPlayers();
        }        
    }

    public SwitchPlayers = () => {
        if (this.ActivePlayer.Order === this.Players.length) {
            this.ActivePlayer = this.Players[0];
        } else {
            this.ActivePlayer = this.Players[this.ActivePlayer.Order];
        }        
    };

    public DoesPlayerExist = (order: number) => {        
        for (var i = 0; i < this.Players.length; i++) {
            if (this.Players[i].Order == order) return true;
        }

        return false;
    };
    
    public ChangePlayerName = (order: number, name: string) => {
        for (var i = 0; i < this.Players.length; i++) {
            if (this.Players[i].Order == order && this.Players[i].Name !== name) this.Players[i].Name = name;
        }
    };
}