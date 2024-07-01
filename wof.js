let balance = 0;
let movieTitles = ["Game Of Thrones", "House of Dragons", "Snowfall", "Powerbook II: Ghost"];
let puzzle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
let displayedPuzzle = puzzle.replace(/[A-Za-z]/g, '-');
let guessedLetters = new Set();
let hasGuessedLetter = false; // Flag to track if user has guessed at least one letter
let canSpin = false; // Flag to track if user can spin

document.getElementById("balance").innerText = `Balance: $${balance}`;
updatePuzzleBoard();
disableSpinButton(); // Disable spin button initially

function spin() {
    if (!canSpin) {
        return; // Exit function if spin is not allowed
    }

    let random1 = Math.floor(Math.random() * 10) + 1;
    let resultMessage = "";

    switch(random1) {
        case 1:
            updateBalance(100);
            resultMessage = "Your spin landed on number 1, congrats. you won $100!";
            break;
        case 2:
            updateBalance(300);
            resultMessage = "Your spin landed on number 2, congrats. you won $300!";
            break;
        case 3:
            updateBalance(500);
            resultMessage = "Your spin landed on number 3, congrats. you won $500!";
            break;
        case 4:
            updateBalance(700);
            resultMessage = "Your spin landed on number 4, congrats. you won $700!";
            break;
        case 5:
            updateBalance(900);
            resultMessage = "Your spin landed on number 5, congrats. you won $900!";
            break;
        case 6:
            updateBalance(2000);
            resultMessage = "Your spin landed on number 6, congrats. you won $2000!";
            break;
        case 7:
            updateBalance(3000);
            resultMessage = "Your spin landed on number 7, congrats. you won $3000!";
            break;
        case 8:
            updateBalance(5000);
            resultMessage = "Your spin landed on number 8, congrats. you won $5000!";
            break;
        case 9:
            updateBalance(-1000);
            resultMessage = "Your spin landed on number 9, you lost $1000!";
            break;
        case 10:
            resultMessage = "Your spin landed on number 10. Your balance stays at $0.";
            break;
    }
    document.getElementById("message").innerText = resultMessage;
    canSpin = false; // Disable spinning after using it
    disableSpinButton(); // Disable spin button after spinning
}

function guess() {
    document.getElementById("guessInput").classList.remove("hidden");
    document.getElementById("guessButton").classList.remove("hidden");
}

function submitGuess() {
    let guessInput = document.getElementById("guessInput").value.trim().toLowerCase();
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").classList.add("hidden");
    document.getElementById("guessButton").classList.add("hidden");

    if (guessInput === puzzle.toLowerCase()) {
        balance += 1000000000;
        document.getElementById("message").innerText = `THAT IS CORRECT! GREAT JOB. You've just won $1,000,000! Your balance is now $${balance}!`;
        document.getElementById("balance").innerText = `Balance: $${balance}`;
        displayedPuzzle = puzzle; // Reveal entire puzzle
        updatePuzzleBoard();
        enableSpinButton(); // Enable spin button after solving puzzle
        return;
    }

    let correctGuess = false;
    for (let i = 0; i < puzzle.length; i++) {
        if (puzzle[i].toLowerCase() === guessInput && displayedPuzzle[i] === '-') {
            displayedPuzzle = displayedPuzzle.substring(0, i) + puzzle[i] + displayedPuzzle.substring(i + 1);
            correctGuess = true;
        }
    }

    guessedLetters.add(guessInput);

    if (correctGuess) {
        updatePuzzleBoard();
        if (displayedPuzzle === puzzle.toLowerCase()) {
            document.getElementById("message").innerText = `Correct! The movie is ${displayedPuzzle}`;
        }
    } else {
        document.getElementById("message").innerText = "That is incorrect. Please try again.";
    }
}



function updateBalance(amount) {
    balance += amount;
    document.getElementById("balance").innerText = `Balance: $${balance}`;
}

function updatePuzzleBoard() {
    const puzzleBoard = document.getElementById("puzzle-board");
    puzzleBoard.innerHTML = "";

    for (let char of displayedPuzzle) {
        const cell = document.createElement("div");
        cell.classList.add("letter");
        
        if (/[A-Za-z]/.test(char) || char === ' ') {
            if (guessedLetters.has(char.toLowerCase())) {
                cell.innerText = char;
            } else {
                cell.innerText = '_';
            }
        } else {
            cell.innerText = char;
        }

        puzzleBoard.appendChild(cell);
    }
}

function disableSpinButton() {
    document.getElementById("spin-button").disabled = true;
}

function enableSpinButton() {
    document.getElementById("spin-button").disabled = false;
}
