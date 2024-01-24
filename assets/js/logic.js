var score = 0;
var currentQuestionIndex = 0;
var isWin = false;
var isCorrect = true


var startScreenEl = document.getElementById("start-screen")
var questionEl = document.getElementById("questions")
var questionOptions = document.getElementById("choices")
var startButton = document.getElementById("startButton")
var nextButton = document.getElementById("next-button")
var timeEl = document.getElementById("time")
var answerButtons = document.querySelectorAll(".answer-button");
var correctAudio = document.getElementById("correct-audio");
var incorrectAudio = document.getElementById("incorrect-audio")


// Quiz start

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionEl.removeAttribute("class");

    renderQuestions();
    startTimer();

    nextButton.style.display = "block";
}


// Multiple choice questions
function renderQuestions() {
    // Clear the screen before rendering a new question
    clearScreen();
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        var questionNumber = currentQuestionIndex + 1;
        questionEl.innerHTML = questionNumber + ". " + currentQuestion.question;
        answerButtons.forEach((answerButton, i) => {

            // If the element is found, proceed
            if (answerButton) {
                const answer = currentQuestion.answers[i];
                const button = document.createElement("button");
                button.textContent = answer.text;
                button.classList.add("btn");
                button.onclick = function () {
                    checkAnswer(answer);
                    nextQuestion();
                }
                console.log(answer)
                // Append the button to answerButton
                answerButton.appendChild(button);
            } else {
                console.error("Answer button not found:", ".answer-button:nth-child(" + (i + 1) + ")");
            }
        });
    }
};

// log correct answer/ wrong answer and play sound
//check answer
function checkAnswer(answer) {
    isCorrect = answer.correct;
    if (answer.correct) {
        playCorrect();
        score++;
    } else {
        playIncorrect();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    renderQuestions()
    resetTimer();
}


// timer 
function startTimer() {
    var timer = setInterval(function () {
        timerCount = timer--;
        timeEl.textContent = timerCount;
        if (timerCount <= 0) {
            // Tests if win condition is met
            if (isCorrect && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
    }, 1000);
};
//reset timer after every question

function resetTimer() {
    timer = 30;
    timeEl.textContent = timer;
};

// play sound when the answer is given
function playCorrect() {
    correctAudio.play();
};

function playIncorrect() {
    incorrectAudio.play();
};

// Total score function
function clearScreen() {
    // Clear the question text
    questionEl.textContent = "";

    // Clear the options
    questionOptions.innerHTML = "";
}
//Finsihed Quiz function that logs the scorecard:

function logScore() {
    var scoreCard = document.getElementById("scoreCard");
    scoreCard.removeAttribute("class");
    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = score;
    questionEl.setAttribute("class", "hide");
    nextButton.setAttribute("class", "hide");
    clearInterval(timer);
    logHighScore();
}

function logHighScore() {
    var initials = document.getElementById("initials").value;
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var newScore = {
        score: score,
        initials: initials
    };
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "highscores.html"
}

// End game
function winGame() {
    isWin = true;
    logScore();
    clearScreen();
    resetGame();
}

function resetGame() {

    currentQuestionIndex = 0;
    isWin = false;
    isCorrect = true;

    startScreenEl.removeAttribute("class");
    questionEl.setAttribute("class", "hide");
    nextButton.style.display = "none";
}

startButton.onclick = startQuiz;
nextButton.onclick = nextQuestion;