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
            break
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

console.log(getHumanChoice ())