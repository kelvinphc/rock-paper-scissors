function getRandomIntInclusive (min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled +1) + minCeiled);
}

function getComputerChoice () {
    const randomNumber = getRandomIntInclusive(1, 3);
    switch (randomNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice () {
    const humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    console.log("You chose " + humanChoice + ".");
    console.log("Computer chose " + computerChoice + ".");
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        return "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
    }
}

function playGame () {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log("Current Score - You: " + humanScore + ", Computer: " + computerScore);
    if (humanScore === 3) {
        console.log("Victory!");
    } else if (computerScore === 3) {
        console.log("Defeat!");
    } else {
        playGame();
    }
}

playGame();