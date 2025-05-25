function getRandomIntInclusive (min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled +1) + minCeiled);
};

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
    };
};

function playRound (humanChoice, computerChoice) {
    let roundResult = "";
    
    if (humanChoice === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult = "You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        roundResult = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
    };

    results.textContent = `You chose ${humanChoice}.
    Computer chose ${computerChoice}.
    ${roundResult}`;

    score.textContent = `Current Score - You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    };
};

function endGame() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;

    const endMessage = document.createElement("div");
    endMessage.setAttribute("id", "endMessage");
    const resetButton = document.createElement("button");
    resetButton.setAttribute("id", "resetButton");

    if (humanScore > computerScore) {
        endMessage.textContent = "Victory!";
    } else {
        endMessage.textContent = "Defeat!";
    };

    document.body.appendChild(endMessage);

    resetButton.textContent = "Play Again";
    resetButton.addEventListener("click", resetGame);

    document.body.appendChild(resetButton);
};

function resetGame() {
    location.reload();
};

const container = document.querySelector("#container")
const results = document.querySelector("#results");
const score = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;

container.addEventListener("click", (e) => {
    const target = e.target;
    let humanChoice

    switch(target.id) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
    };

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});