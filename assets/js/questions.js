// buttons that have event listeners
var startButton = document.querySelector("#start-button");
var buttonOne = document.querySelector("#btn1");
var buttonTwo = document.querySelector("#btn2");
var buttonThree = document.querySelector("#btn3");
var buttonFour = document.querySelector("#btn4");
var saveScore = document.querySelector("#save-score");

// divs that have their display property updated
var preQuizDiv = document.querySelector("#pre-quiz");
var quizDiv = document.querySelector("#quiz-questions");
var endScreenDiv = document.querySelector("#quiz-end-screen");
var checkAnswerDiv = document.querySelector("#check-answer");

// text that is dynamically updated
var questionText = document.querySelector("#question-text");
var checkAnsText = document.querySelector("#answer-text");

// span to display the time left on the quiz
var timeLeft = document.querySelector("#time-left");

// span to display score at the end of the game
var userScore = document.querySelector("#user-score");

// question array. Each question must have four possible answers. The right answer starts at an index of 1 to verify if the correct answer was clicked
var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    arr: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    rightAns: 3,
  },
  {
    question: "The condition in an if / else statment is enclosed within ___.",
    arr: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    rightAns: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    arr: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    rightAns: 4,
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables",
    arr: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    rightAns: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    arr: [
      "1. JavaScript",
      "2. terminal / bash",
      "3. for loops",
      "4. console log",
    ],
    rightAns: 4,
  },
];

// timer start value
var timer = 75;

// quiz counter to iterate through array
var quizCount = 0;

// score to store at the end of the game
var score = 0;

//Start Timer, function is called when the game starts
function startTimer() {
  quizFormat();
  quizNextQuestion();
  interval = setInterval(function () {
    timer--;
    timeLeft.textContent = timer;
    if (timer === 0) {
      clearInterval(interval);
      //If timer runs out end the quiz
      endQuiz();
    }
  }, 1000);
}

//Update the DOM to hide the initial page, and display the quiz questions and buttons
function quizFormat() {
  //update the display of the quiz
  preQuizDiv.setAttribute("style", "display:none;");
  quizDiv.setAttribute("style", "display:block;");
}

//confirm if button clicked was the correct answer or not
function correctAnswer(e) {
  var element = e.target;
  console.log(element);
  if (element.matches("button") === true) {
    //grab the data index of the user answer
    var questionAnswered = element.getAttribute("data-index");
    //compare the user answer to the array of questions object answer, using the previous quiz count to compare to the previous question
    if (questionAnswered != arrayOfQuestions[quizCount - 1].rightAns) {
      timer -= 10;
      //display incorrect message
      checkAnsText.textContent = "Wrong!";
    } else {
      //display correct message
      checkAnsText.textContent = "Correct!";
    }
    checkAnswerDiv.setAttribute("style", "display:block");
    setTimeout(function () {
      checkAnswerDiv.setAttribute("style", "display:none");
    }, 500);
    quizNextQuestion();
  }
}

//cycles through questions to display
function quizNextQuestion() {
  console.log("quizNextQuiestion called?");
  if (quizCount == arrayOfQuestions.length) {
    // end the quiz since the end of the array was reached
    endQuiz();
  } else {
    questionText.textContent = arrayOfQuestions[quizCount].question;
    buttonOne.textContent = arrayOfQuestions[quizCount].arr[0];
    buttonTwo.textContent = arrayOfQuestions[quizCount].arr[1];
    buttonThree.textContent = arrayOfQuestions[quizCount].arr[2];
    buttonFour.textContent = arrayOfQuestions[quizCount].arr[3];
    quizCount++;
  }
}

function endQuiz() {
  //stop the timer
  clearInterval(interval);
  //Called when the timer is 0 or when the last question is answered
  timeLeft.textContent = timer;
  //set score equal to the timer at the end of the game
  score = timer;
  // hide the quiz div, and display the end screen div
  quizDiv.setAttribute("style", "display:none;");
  endScreenDiv.setAttribute("style", "display:block;");

  userScore.textContent = score;
}

function saveHighScore() {
  //get initials from the input box
  var userInitials = document.querySelector("#initials").value.trim();
  if (userInitials !== "") {
    //array
    var storedData =
      JSON.parse(window.localStorage.getItem("highScores")) || [];
    console.log(storedData);
    //store updated data to the local storage//
    var newData = {
      savedInitials: userInitials,
      savedScore: score,
    };
    //add data to the array
    storedData.push(newData);
    //story the array in local storage
    window.localStorage.setItem("highScores", JSON.stringify(storedData));
    //redirect to the high score page
    window.location.href = "highscore.html";
  }
}

startButton.addEventListener("click", startTimer);
buttonOne.addEventListener("click", correctAnswer);
buttonTwo.addEventListener("click", correctAnswer);
buttonThree.addEventListener("click", correctAnswer);
buttonFour.addEventListener("click", correctAnswer);
saveScore.addEventListener("click", function (event) {
  event.preventDefault();
  saveHighScore();
});
