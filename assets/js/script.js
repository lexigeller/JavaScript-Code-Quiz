var timerEl = document.getElementById('timer');
// Timer that counts down from 75
function timer() {
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 0
      if (timeLeft > -1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Time: ' + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }

timer();

//set interval for the timer
//event listeners for all buttons
//store highscores in local storages
//need array to show highscores and initials
//score highscore from highest to lowest
//clear highscores button should clear all values; look up documentation for how to delete