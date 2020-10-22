//On "start quiz click"
var startButton = document.querySelector("#start-button");
var buttonOne = document.querySelector("#btn1");
var buttonTwo = document.querySelector("#btn2");
var buttonThree = document.querySelector("#btn3");
var buttonFour = document.querySelector("#btn4");
var timeLeft = document.querySelector("#time-left");
var questionText= document.querySelector("#question-text");
var quizRules= document.querySelector("#quiz-rules");
var arrayOfQuestions = [
    {
      question: "question 1",
      arr: ["answer1", "answer2", "answer3", "answer4"],
      rightAns: "answer1",
    },
    {
      question: "question 2",
      arr: ["answer1", "answer2", "answer3", "answer4"],
      rightAns: "answer3",
    },
    {
      question: "question 3",
      arr: ["answer1", "answer2", "answer3", "answer4"],
      rightAns: "answer3",
    },
    {
      question: "question 4",
      arr: ["answer1", "answer2", "answer3", "answer4"],
      rightAns: "answer4",
    },
  ];
var timer = 75;
var quizCount = 0;

//Start Timer
function startTimer(){
    console.log("start timer called")
    interval = setInterval(function () {
        timer--;
        timeLeft.textContent=timer;
        console.log(timer);
        if(timer === 0){
            clearInterval(interval);
        }
      }, 1000);
}

//If timer ends () Change DOM to enter High Score



function quizNextQuestion(){
    //update the display of the quiz
    quizRules.setAttribute("style","display:none;");
    startButton.setAttribute("style","display:none;");
    buttonOne.setAttribute("style","display:block;");
    buttonTwo.setAttribute("style","display:block;");
    buttonThree.setAttribute("style","display:block;");
    buttonFour.setAttribute("style","display:block;");

    questionText.textContent = arrayOfQuestions[quizCount].question;
    buttonOne.textContent =arrayOfQuestions[quizCount].arr[0];
    buttonTwo.textContent =arrayOfQuestions[quizCount].arr[1];
    buttonThree.textContent =arrayOfQuestions[quizCount].arr[2];
    buttonFour.textContent =arrayOfQuestions[quizCount].arr[3];
    quizCount++;

}



//if user answer is not equal to right answer then secondsElapsed = secondsElapsed - 10;

//if run out of questions go to high score page. questions are displayed from the array, and if i>=arr.length then go to highscore page
// for(i=0;i<=arrayOfQuestions;i++){

// }

//keep track of score => store in local storage, so it can be referenced in highscore page



//go to highscore page is own function since it will be referenced in display questions function, and timer function

startButton.addEventListener("click", () => {    
    startTimer();
    quizNextQuestion();    
});
buttonOne.addEventListener("click", quizNextQuestion);
buttonTwo.addEventListener("click", quizNextQuestion);
buttonThree.addEventListener("click", quizNextQuestion);
buttonFour.addEventListener("click", quizNextQuestion);