// buttons
var goBack = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-score");

// high score list div to store the generated paragraphs
var highScoreList = document.querySelector("#score-list");

renderScores();

function renderScores() {
  highScoreList.innerHTML = "";
  var storedScores = JSON.parse(window.localStorage.getItem("highScores"));
  console.log(storedScores);
  // Render a new paragraph element for each high score in the list
  for (var i = 0; i < storedScores.length; i++) {
    var scoreText =
      storedScores[i].savedInitials + " " + storedScores[i].savedScore;
    // Create a new paragraph element
    var paragraph = document.createElement("p");
    // add the paragraph text of the initials and score
    paragraph.textContent = scoreText;
    // append the paragraph to the div High Score List
    highScoreList.appendChild(paragraph);
  }
}

function clearScoreList() {
  // clear the high scores that are stored in local storage
  window.localStorage.setItem("highScores", "[]");
  // rerender the list of scores to clear the paragraphs displayed
  renderScores();
}

goBack.addEventListener("click", function () {
    // go back to index page
  window.location.href = "index.html";
});
clearScores.addEventListener("click", clearScoreList);
