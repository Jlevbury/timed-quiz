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
      
      var currentQuiz = 0;
      var score = 0;

      function startTimer() {
        var timerEl = document.getElementById('timer');
        var timerInterval = setInterval(function() {
          totalTime--;
          timerEl.textContent = totalTime;
          if (totalTime <= 0) {
            clearInterval(timerInterval);
            endQuiz();
          }
        }, 1000);
      }
      
      startQuiz();
      
      function startQuiz() {
        deselectAnswers();
        var currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        ansA.innerText = currentQuizData.a;
        ansB.innerText = currentQuizData.b;
        ansC.innerText = currentQuizData.c;
        ansD.innerText = currentQuizData.d;  
        startTimer();        
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
        var scoreEl = document.getElementById('score');
        scoreEl.innerHTML= `You scored ${score} out of ${quizData.length}.`;
        quiz.innerHTML = ` Time's up! <button onclick="location.reload()">Reload</button>
  `;
}
var timeLeft = 10;
var timerId;

function resetTimer() {
        clearInterval(timerId);
        timeLeft = 10; // add this line to reset the timer
        var timeSpan = document.getElementById("time-left");
        timeSpan.innerHTML = timeLeft;
      }

// get the high score from local storage or set it to 0 if it doesn't exist
var highScore = localStorage.getItem("highScore") || 0;

// check if the user's score is higher than the current high score
if (score > highScore) {
  // update the high score and store it in local storage
  highScore = score;
  localStorage.setItem("highScore", highScore);
}

// display the high score to the user
var highScoreSpan = document.getElementById("highscore");
highScoreSpan.innerHTML = score;


submitBtn.addEventListener('click', function() {
        var selectedAnswer = getSelected();
        if (selectedAnswer) {
          if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
          } else {
            totalTime -= 10; // deduct 10 seconds for a wrong answer
          }
          currentQuiz++;
          if (currentQuiz < quizData.length) {
            startQuiz();
          } else {
            endQuiz();
          }
        }
      });
      