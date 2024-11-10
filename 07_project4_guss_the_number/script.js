document.addEventListener("DOMContentLoaded", () => {
  let randomeNumber = parseInt(Math.random() * 100 + 1); // Generate random number between 1 and 100
  const submit = document.querySelector("#subt");
  const userInput = document.querySelector("#guessField");
  const guessSlot = document.querySelector(".guesses");
  const remaining = document.querySelector(".lastResult");
  const lowOrHigh = document.querySelector(".lowOrHi");
  const startOver = document.querySelector(".resultParas");

  const p = document.createElement("p"); // Element to hold "Start New Game" message

  let preGuess = [];
  let numGuess = 1;
  let playGame = true;

  // Event listener for submit button
  if (playGame) {
    submit.addEventListener("click", function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    });
  }

  // Function to validate the user's guess
  function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100");
    } else {
      preGuess.push(guess);
      if (numGuess === 10 && guess !== randomeNumber) {
        displayGuess(guess);
        displayMessage(`Game Over! The random number was ${randomeNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

  // Function to check if the guess is correct, too low, or too high
  function checkGuess(guess) {
    if (guess === randomeNumber) {
      displayMessage(`Congratulations! Your guess is correct!`);
      endGame();
    } else if (guess < randomeNumber) {
      displayMessage(`Your guess is too low!`);
    } else {
      displayMessage(`Your guess is too high!`);
    }
  }

  // Function to display guesses and remaining attempts
  function displayGuess(guess) {
    userInput.value = ""; // Clear input field
    guessSlot.innerHTML += ` ${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`; // Update remaining attempts
  }

  // Function to display a message
  function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
  }

  // Function to end the game
  function endGame() {
    console.log("endGame called"); // Debugging to ensure function is executed
    userInput.value = ""; // Clear input field
    userInput.setAttribute("disabled", "true"); // Disable input field
    console.log(userInput); // Debugging to check if userInput is valid and disabled
    p.classList.add("button"); // Add button styling
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p); // Append "Start New Game" button
    playGame = false; // Stop the game
    setupNewGame(); // Set up a new game
  }

  // Function to set up a new game
  function setupNewGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function () {
      randomeNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
      preGuess = []; // Reset previous guesses
      numGuess = 1; // Reset guess count
      guessSlot.innerHTML = ""; // Clear guess display
      remaining.innerHTML = `${10 - numGuess}`; // Reset remaining attempts
      lowOrHigh.innerHTML = ""; // Clear feedback message
      userInput.removeAttribute("disabled"); // Enable input field
      startOver.removeChild(p); // Remove "Start New Game" button
      playGame = true; // Allow the game to be played again
    });
  }
});
