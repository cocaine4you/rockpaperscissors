const choices = ["rock", "paper", "scissor"];

        let getplayerChoice = (+prompt("0 = Rock, 1 = Paper, 2 = Scissor"));
        let playerSelection = choices[getplayerChoice];

        let playerPoints = 0;
        let computerPoints = 0;

        function getComputerSelection() {
            return choices[Math.floor(Math.random() * choices.length)];
        }

        function playRound(playerSelection, getComputerSelection) {
            if ((playerSelection === choices[0] && getComputerSelection === choices[2]) ||
                playerSelection === choices[1] && getComputerSelection === choices[0] ||
                playerSelection === choices[2] && getComputerSelection === choices[1]) {
                console.log("\nYOU WIN!!! " + playerSelection.toUpperCase() + " beats " + getComputerSelection.toUpperCase());
                ++playerPoints;
            }
            else if (playerSelection === getComputerSelection) {
                console.log("\nIt's a TIE! You both chose " + playerSelection.toUpperCase() + "\n0 points awarded")
            }
            else {
                console.log("\nYou LOSE!!! " + getComputerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase());
                ++computerPoints;
            }
        }

        function game() {
            for (let i = 1; i <= 5; i++) {
                getPlayerChoice = (+prompt("0 = Rock, 1 = Paper, 2 = Scissor"));
                playRound(playerSelection, getComputerSelection());
                console.log("Your Points: " + playerPoints + "\nComputer Player Points: " + computerPoints);

            }
            if (playerPoints >= computerPoints) {
                console.log("\n\nCONGRATULATIONS. You are the winner with: " + playerPoints + " Points");
            }
            else if (computerPoints >= playerPoints) {
                console.log("\n\nBETTER LUCK NEXT TIME! You lost");
            }
            else {
                console.log("\n\nNOT BAD. IT'S A TIE");
            }
        }

