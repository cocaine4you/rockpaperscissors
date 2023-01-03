const choices = ["rock", "paper", "scissor"];


function getComputerSelection() {
    return choices[Math.floor(Math.random() * choices.length)];
}
let roundCount = 0;

function playRound(pSelection, getComputerSelection) {
    

    if ((pSelection === choices[0] && getComputerSelection === choices[2]) ||
        pSelection === choices[1] && getComputerSelection === choices[0] ||
        pSelection === choices[2] && getComputerSelection === choices[1]) {
        console.log("\nYOU WIN!!!");
        ++playerPoints;

    }
    else if (pSelection === getComputerSelection) {
        console.log("\nIT'S A TIE");
    }
    else {
        console.log("\nYou LOSE!!! ");
        ++computerPoints;
    }
    let msg = console.log("Computer: " + computerPoints + "\nYour Points: " + playerPoints);

    computerResults.textContent = "Computer: " + computerPoints;
    playerResults.textContent = "Your Points: " + playerPoints;
    resultsDiv.appendChild(playerResults);
    resultsDiv.appendChild(computerResults);
    
    ++roundCount;
    if (roundCount === 5 && playerPoints > computerPoints) {
        alert("YOU WIN!");
        return;
    }
    else if (roundCount === 5 && computerPoints > playerPoints) {
        alert("YOU LOSE!");
        return;
    }
    else if (roundCount === 5 && computerPoints === playerPoints) {
        alert("OOPS! IT'S A TIE, TRY AGAIN");
        return;
    }
}




const resultsDiv = document.createElement('div');
resultsDiv.classList.add("results");
const computerResults = document.createElement('h5');
const playerResults = document.createElement('h5');

const buttons = document.createElement('div');
const body = document.querySelector('body');

const playerChoices = [];
let playerSelection;
let playerPoints = 0;
let computerPoints = 0;


for (let i = 0; i < 3; i++) {
    const selectedBtn = document.createElement('button');
    buttons.appendChild(selectedBtn);
    selectedBtn.classList.add(`${choices[i]}`);
    selectedBtn.textContent = `${choices[i].toUpperCase()}`;

    playerSelection = selectedBtn.classList.value;
    playerChoices[i] = playerSelection;

    selectedBtn.addEventListener('click', () => {
        let computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection)
    });

}



body.appendChild(buttons);
body.appendChild(resultsDiv);



