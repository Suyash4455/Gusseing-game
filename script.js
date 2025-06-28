let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptDisplay = document.getElementById("attempts");

  attempts++;

  if (userGuess === secretNumber) {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    attemptDisplay.textContent = `You guessed it in ${attempts} attempts.`;
  } else if (userGuess > secretNumber) {
    feedback.textContent = "📈 Too high! Try a smaller number.";
  } else if (userGuess < secretNumber) {
    feedback.textContent = "📉 Too low! Try a larger number.";
  } else {
    feedback.textContent = "❌ Invalid input. Please enter a number.";
  }
}
