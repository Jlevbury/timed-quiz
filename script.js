/*GIVEN I am taking a code quiz
        WHEN I click the start button - button input needed
        THEN a timer starts and I am presented with a question- timer & question display needed
        WHEN I answer a question- user input needed
        THEN I am presented with another question- event listener needed
        WHEN I answer a question incorrectly- message display wrong answer needed to display correct answer
        THEN time is subtracted from the clock - interval needed
        WHEN all questions are answered or the timer reaches 0 - event listener needed
        THEN the game is over
        WHEN the game is over
        THEN I can save my initials and score - local storage necessary*/

var jsQuestions = [  "What is the difference between null and undefined in JavaScript?",  "What is the difference between == and === in JavaScript?",  "What is a closure in JavaScript?",  "What is hoisting in JavaScript?",  "What are the different types of scope in JavaScript?",  "What are the different types of data types in JavaScript?",  "What is the difference between let and var in JavaScript?",  "What is the difference between const and let in JavaScript?",  "What is the difference between synchronous and asynchronous programming in JavaScript?",  "What is an event loop in JavaScript?"];
var jsAnswers= []


function startQuiz() {
        var timeLeft = 10; // number of seconds for the countdown
        var questionArray = ["Question 1", "Question 2", "Question 3"]; // array of questions
        var selectedQuestion = questionArray[Math.floor(Math.random() * questionArray.length)]; // select a random question from the array
        
        // Display the selected question
        console.log("Question: " + selectedQuestion);
      
        // Start the countdown timer
        var countdown = setInterval(function() {
          if (timeLeft <= 0) {
            clearInterval(countdown);
            console.log("Time's up!");
          } else {
            console.log(timeLeft + " seconds left");
          }
          timeLeft -= 1;
        }, 1000);
      }
      
      // Add event listener to the start button
      document.getElementById("start").addEventListener("click", startQuiz);
      // Stopping the timer:
        stop.addEventListener('click', function() {
	clearInterval(timerId);
});
      