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

var questARR=[0,1,2,3];
console.log(questARR);

// select a random question from the array
var selectedQuestion = questARR[Math.floor(Math.random() * questARR.length)];
console.log(selectedQuestion);

 // function needed to display the question in html page

var choices = [0,1,2,3];
console.log(choices)
choice[0]="choice 1";
choice[1]="choice 2";
choice[2]="choice 3";
choice[3]="choice 4";




var button = document.getElementsByTagName('button');
console.log(button);

var start = document.getElementById('begin');
console.log(start);

var response = document.getElementById("choice");
console.log(response)


function selectAnswer(){
  console.log("it worked")
};


  /*var startTimer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      console.log("Time's up!");
    } else {
      console.log(timeLeft + " seconds left");
    }
    timeLeft -= 1;
  }, 1000);
console.log(startTimer)*/

// function needed to tally up correct answers
// function needed to display score to field
// function needed for local storage of highschool
//function needed to randomize question order


