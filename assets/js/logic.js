var score = 0;
var currentQuestion = 0;
var isWin = false;


var questionEl = document.getElementById("questions")
var questionOptions = document.getElementById("choices")
var startButton = document.getElementById("startButton")
var nextButtoon = document.getElementById("next-button")

// Quiz start

function startQuiz() {
    isWin = false;
    timerCount = 15;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderQuestions()
    startTimer()
}
// Multiple choice questions
function renderQuestions() {
    var currentQuestion = questions[currentQuestion]
    questionEl.textContent = currentQuestion.questions;
}
// timer 
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isCorrect && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
    })
    };
    
// Total score function

// log correct answer/ wrong answer

//start button event listener function