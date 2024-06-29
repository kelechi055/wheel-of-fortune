Wheel of Fortune Game

This Java program is a simple text-based game inspired by the popular game show "Wheel of Fortune." Players can either spin the wheel to earn money or guess letters in the puzzle, which is a movie title.

How to Play

1. Welcome Screen: The game starts with a welcome message and the puzzle category (a movie).
2. Player Choice: Each turn, the player decides whether to spin the wheel or guess a letter/phrase.

  • Spin (S):
    • The player spins the wheel to earn or lose money.
    • The wheel has various outcomes, ranging from winning money to losing money or landing on zero.
    
  • Guess (G):
    • The player can guess either the entire movie title or individual letters.
    • Correct guesses reveal letters in the puzzle.
    • The game ends if the player correctly guesses the full movie title, winning a large sum of money.
    
3. Balance: The player's balance is updated based on the outcomes of spins and correct guesses.
  
4. Winning: If the player correctly guesses the full movie title, they win the game with a grand prize.

Setup

1. Requirements: Ensure you have Java installed on your system.

2. Compile: Use the command javac Main.java to compile the program.

3. Run: Use the command java Main to start the game.

Notes
  • The game currently features a fixed puzzle ("Game of Thrones").
  • The outcomes of the spins and the amount won or lost are randomized.
  • The program responds to both uppercase and lowercase inputs for choices and guesses.

Future Enhancements
  •Adding more puzzles and categories.
  •Implementing multiple players and turns.
  •Improving the display of the puzzle state dynamically based on correct guesses.
