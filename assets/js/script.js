var timerEl = document.getElementById('timer');
var startButton = document.getElementById('start-button');
// May not need all of these, not sure yet
var q1A1Button = document.getElementById('q1a1');
var q1A2Button = document.getElementById('q1a2');
var q1A3Button = document.getElementById('q1a3');
var q1A4Button = document.getElementById('q1a4');
var q2A1Button = document.getElementById('q2a1');
var q2A2Button = document.getElementById('q2a2');
var q2A3Button = document.getElementById('q2a3');
var q2A4Button = document.getElementById('q2a4');
var q3A1Button = document.getElementById('q3a1');
var q3A2Button = document.getElementById('q3a2');
var q3A3Button = document.getElementById('q3a3');
var q3A4Button = document.getElementById('q3a4');
var q4A1Button = document.getElementById('q4a1');
var q4A2Button = document.getElementById('q4a2');
var q4A3Button = document.getElementById('q4a3');
var q4A4Button = document.getElementById('q4a4');
var q5A1Button = document.getElementById('q5a1');
var q5A2Button = document.getElementById('q5a2');
var q5A3Button = document.getElementById('q5a3');
var q5A4Button = document.getElementById('q5a4');
var goBackButton = document.getElementById('go-back');
var clearButton = document.getElementById('clear');

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

//decrease timer for each incorrectly selected question
//event listeners for all buttons
startButton.addEventListener('click', function(e) {
    //tell start button what to do when clicked
})

q1A1Button.addEventListener('click', function(e) {
    //tell each question button what to do when clicked?
})

q1A2Button.addEventListener('click', function(e) {
    
})

q1A3Button.addEventListener('click', function(e) {
    
})

q1A4Button.addEventListener('click', function(e) {
    
})

goBackButton.addEventListener('click', function(e) {
    //tell the go back button to go back to the beginning when clicked
})

clearButton.addEventListener('click', function(e) {
    //tell the clear button to clear the high scores in local storage when clicked
})
//store highscores in local storages
//need array to show highscores and initials
//score highscore from highest to lowest
//the form receives the submit event, NOT the submit button. submit is an event like 'click'
//clear highscores button should clear all values; look up documentation for how to delete