let balance = 0;
let puzzle = "Game Of Thrones";
let displayedPuzzle = "---- -- -------";
let message = document.getElementById("message");
let balanceElement = document.getElementById("balance");
let puzzleElement = document.getElementById("puzzle");

document.getElementById("balance").innerText = `Balance: $${balance}`;
document.getElementById("puzzle").innerText = displayedPuzzle;

function spin() {
    let random1 = Math.floor(Math.random() * 10) + 1;
    switch(random1) {
        case 1:
            updateBalance(100);
            message.innerText = "Your spin landed on number 1, congrats. you won $100!";
            break;
        case 2:
            updateBalance(300);
            message.innerText = "Your spin landed on number 2, congrats. you won $300!";
            break;
        case 3:
            updateBalance(500);
            message.innerText = "Your spin landed on number 3, congrats. you won $500!";
            break;
        case 4:
            updateBalance(700);
            message.innerText = "Your spin landed on number 4, congrats. you won $700!";
            break;
        case 5:
            updateBalance(900);
            message.innerText = "Your spin landed on number 5, congrats. you won $900!";
            break;
        case 6:
            updateBalance(2000);
            message.innerText = "Your spin landed on number 6, congrats. you won $2000!";
            break;
        case 7:
            updateBalance(3000);
            message.innerText = "Your spin landed on number 7, congrats. you won $3000!";
            break;
        case 8:
            updateBalance(5000);
            message.innerText = "Your spin landed on number 8, congrats. you won $5000!";
            break;
        case 9:
            updateBalance(-1000);
            message.innerText = "Your spin landed on number 9, you lost $1000!";
            break;
        case 10:
            message.innerText = "Your spin landed on number 10. Your balance stays at $0.";
            break;
    }
}

function guess() {
    document.getElementById("guessInput").classList.remove("hidden");
    document.getElementById("guessButton").classList.remove("hidden");
}

function submitGuess() {
    let guessInput = document.getElementById("guessInput").value.toLowerCase();
    document.getElementById("guessInput").value = "";

    if (guessInput === puzzle.toLowerCase()) {
        balance += 1000000000;
        message.innerText = `THAT IS CORRECT! GREAT JOB. You've just won $1,000,000! Your balance is now $${balance}!`;
        document.getElementById("balance").innerText = `Balance: $${balance}`;
        return;
    }

    let correctGuess = false;
    for (let i = 0; i < puzzle.length; i++) {
        if (puzzle[i].toLowerCase() === guessInput) {
            displayedPuzzle = displayedPuzzle.substring(0, i) + puzzle[i] + displayedPuzzle.substring(i + 1);
            correctGuess = true;
        }
    }

    if (correctGuess) {
        message.innerText = `Correct! The movie is ${displayedPuzzle}`;
    } else {
        message.innerText = "That is incorrect. Please try again.";
    }

    puzzleElement.innerText = displayedPuzzle;
}

function updateBalance(amount) {
    balance += amount;
    balanceElement.innerText = `Balance: $${balance}`;
}
