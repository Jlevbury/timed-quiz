/*var questDisplay = document.getElementById("quest");
console.log(questDisplay);
var currentQuestion =0;
var score=0;

function displayQuestion(){
  var questDisplay = document.getElementsByName("label");
  questDisplay.innerText = questions;
}
displayQuestion();


var questions = ["What does DOM stand for?","How do you declare a function?","How do you store multiple values in a variable?","What is a type of mouse event"];
console.log(questions);

var answers =["Document Object Model","Using the function keyword","with an array","CLICK"];
console.log(answers);

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
console.log(questARR);




/*questARR[0]="question 1";
questARR[1]="question 2";
questARR[2]="question 3";
questARR[3]="question 4";
console.log(questARR);*/

//Loop through the questions array and create HTML elements for each question
for (var i = 0; i < questARR.length; i++) {
    // Create a div element for the question
    var questionDiv = document.createElement("div");
    questionDiv.innerHTML = questARR[i].questARR};
  
   //select a random question from the array
  var selectedQuestion = questARR[Math.floor(Math.random() * questARR.length)];
  console.log(selectedQuestion);
  
  function checkAnswer() {
    var selectedAnswer = document.getElementById("answer").value;
    var correctAnswer = questARR[currentQuestion].answer;
    
    if (selectedAnswer === correctAnswer) {
      alert("Correct!");// change alert to html display
      score++; // increment the user's score if the answer is correct
    } else {
      alert("Incorrect.");// change alert to html display and deduct time
    }}
  
  
  
   /*function needed to associate buttons with answer choice
  var choices = [0,1,2,3];
  choices[0]="choice 1";
  choices[1]="choice 2";
  choices[2]="choice 3";
  choices[3]="choice 4";
  console.log(choices);*/
  
  /*document.getElementById("choice0").innerHTML= choices[0];
  document.getElementById("choice1").innerHTML= choices[1];
  document.getElementById("choice2").innerHTML= choices[2];
  document.getElementById("choice3").innerHTML= choices[3];*/
  
  var button = document.getElementsByTagName('button');
  console.log(button);
  
  
  /*var response = document.getElementById(choices);
  console.log(response)*/
  
   //function for button clicks
  function selectAnswer(){
   console.log("it worked")
  };
  
  
  