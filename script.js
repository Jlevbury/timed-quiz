var quizData=[
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Document Order Manipulation",
    c: "Doesn't Overall Matter",
    d: "Don't Order Menus",
    correct: "a",
  },
  {
    question: "How do you declare a function",
    a: "by stating, I DO DECLARE!",
    b: "using the function keyword",
    c: "the computer should know what I want it to do",
    d: "point at it with a wand",
    correct: "b",
  },
  {
    question: "How do you store multiple values in a variable?",
    a: "Jam them in there, it will work",
    b: "write several variables and add them up",
    c: "by using an ARRAY",
    d: "make a for loop ",
    correct: "c",
  },
  {
    question: "What is a type of mouse event",
    a: "when it steals your cheese",
    b: "CLICK",
    c: "keyUP",
    d: "ctrl+z ",
    correct: "b",
  }
];

console.log(quizData.length);

var totalTime=60;
var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');            
var ansA = document.getElementById('ansA');
var ansB = document.getElementById('ansB');
var ansC = document.getElementById('ansC');
var ansD = document.getElementById('ansD');
var submitBtn = document.getElementById('submit');
var timerInterval;

var currentQuiz = 0;
var score = 0;

 
  var timerEl = document.getElementById('timer');
  timerInterval = setInterval(function() {
    totalTime--;
    timerEl.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);


startQuiz();

function startQuiz() {
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  ansA.innerText = currentQuizData.a;
  ansB.innerText = currentQuizData.b;
  ansC.innerText = currentQuizData.c;
  ansD.innerText = currentQuizData.d;  
       
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  var answer = null;
  answerEls.forEach(function(answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function endQuiz() {
  clearInterval(timerInterval);
  var initials = prompt("Enter your initials:");
  var scoreEl = document.getElementById('score');
  scoreEl.innerHTML= `You scored ${score} out of ${quizData.length}.`;
  quiz.innerHTML = ` Time's up! <button onclick="location.reload()">Reload</button>`;

  // get the high score from local storage or set it to 

var timeLeft = 10;
var timerId;

function resetTimer() {
        clearInterval(timerId);
        timeLeft = 10; // add this line to reset the timer
        var timeSpan = document.getElementById("time-left");
        timeSpan.innerHTML = timeLeft;
      }

// get the high score from local storage or set it to 0 if it doesn't exist
var highScore = localStorage.getItem("highscore") || 0;

   // check if the user's score is higher than the current high score
   var highScoreData = JSON.parse(localStorage.getItem("highScoreData")) || [];
   var highScore = 0;
   highScoreData.forEach(function(data) {
     if (data.score > highScore) {
       highScore = data.score;
     }
   });
   if (score > highScore) {
     // add the new high score to the highScoreData array
     highScoreData.push({initials: initials, score: score});
     // store the highScoreData in local storage
     localStorage.setItem("highScoreData", JSON.stringify(highScoreData));
   }
  // display the high scores
  var highScoreEl = document.getElementById("highscore");
  highScoreEl.innerHTML ="Highscore";
  highScoreData.forEach(function(data) {
    var scoreEl = document.createElement("div");
    scoreEl.innerHTML = `${data.initials}: ${data.score}`;
    highScoreEl.appendChild(scoreEl);
  });
}



submitBtn.addEventListener('click', function() {
  console.log('click');
  var selectedAnswer = getSelected();
  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      score++;
    } else {
      totalTime -= 10; // deduct 10 seconds for a wrong answer
    }
    //updateScore(); // display the updated score
      
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      startQuiz();
    } else {
      endQuiz();
    }
  }
  
});