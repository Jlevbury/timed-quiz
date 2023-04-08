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

var questDisplay = document.getElementById("quest");
console.log(questDisplay);



//create an array of the questions to select from
var questARR=[  {
  question: "What does DOM stand for?",
  answer: "Document Object Model"
},
{
  question: "How do you declare a function?",
  answer: "Using the function keyword"
},
{
  question: "How do you store multiple values in a variable?",
  answer: "with an array"
},
{
  question: "What is a type of mouse event",
  answer: "CLICK"
}];
/*questARR[0]="question 1";
questARR[1]="question 2";
questARR[2]="question 3";
questARR[3]="question 4";
console.log(questARR);*/
// Loop through the questions array and create HTML elements for each question
for (var i = 0; i < questARR.length; i++) {
  // Create a div element for the question
  var questionDiv = document.createElement("div");
  questionDiv.innerHTML = questARR[i].questARR};

// select a random question from the array
var selectedQuestion = questARR[Math.floor(Math.random() * questARR.length)];
console.log(selectedQuestion);




// function needed to associate buttons with answer choice
var choices = [0,1,2,3];
choices[0]="choice 1";
choices[1]="choice 2";
choices[2]="choice 3";
choices[3]="choice 4";
console.log(choices);

document.getElementById("choice0").innerHTML= choices[0];
document.getElementById("choice1").innerHTML= choices[1];
document.getElementById("choice2").innerHTML= choices[2];
document.getElementById("choice3").innerHTML= choices[3];

var button = document.getElementsByTagName('button');
console.log(button);


var response = document.getElementById(choices);
console.log(response)

// function for button clicks
function selectAnswer(){
  console.log("it worked")
};

function displayScores(currentScore) {
  // Get the previous high score from local storage
  let highScore = localStorage.getItem('quizHighScore');
  // If there is no previous high score, set it to 0
  if (!highScore) {
    highScore = 0;
  }
  // If the current score is higher than the previous high score, update the high score
  if (currentScore > highScore) {
    highScore = currentScore;
    localStorage.setItem('quizHighScore', highScore);
  }
  // Display the current score and the high score
  console.log(`Current score: ${currentScore}`);
  console.log(`High score: ${highScore}`);
}







// Create an array of choices for the question
var choices = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];

// Loop through the choices array and create HTML elements for each choice
for (var j = 0; j < choices.length; j++) {
  // Create a button element for the choice
var choiceButton = document.createElement("button");
choiceButton.innerHTML = choices[j]};

// Add an event listener to the button to check if the choice is correct
choiceButton.addEventListener("click", function() {
  if (this.innerHTML === questions[i].answer) {
    alert("Correct!");
  } else {
    alert("Incorrect.");
  }
});
  questionDiv.appendChild(choiceButton);


  

// function needed to tally up correct answers
// function needed to display score to field
// function needed for local storage of highschool
//function needed to randomize question order
