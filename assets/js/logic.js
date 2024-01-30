
var score = 0;
var currentQuestionIndex = 0;
var isWin;
var isCorrect;
let timer;
let timerCount = questions.length * 5;

var startScreenEl = document.getElementById("start-screen")
var questionsEl = document.getElementById("questions")
var questionTitleEl = document.getElementById("question-title")
var questionOptions = document.getElementById("choices")
var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("next-button")
var resetButton = document.getElementById("reset-button")
var timeEl = document.getElementById("time")
var answerButtons = document.querySelectorAll(".btn");
var correctAudio = document.getElementById("correct-audio");
var incorrectAudio = document.getElementById("incorrect-audio")
var feedbackEl = document.getElementById("feedback")
var endScreenEl = document.getElementById("end-screen")
var submitButton = document.getElementById("submit")
var finalScoreEL = document.getElementById("final-score")


// Quiz start

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timer = setInterval(startTimer, 1000)
    renderQuestions();
}


// Multiple choice questions
function renderQuestions() {
    // Clear the screen before rendering a new question
    questionOptions.innerHTML = "";
    if (currentQuestionIndex === questions.length) {
        endGame();
        return;
    };

    var currentQuestion = questions[currentQuestionIndex];
    var questionNumber = currentQuestionIndex + 1;
    questionTitleEl.textContent = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.setAttribute("value", answer.correct);
        button.onclick = checkAnswer;
        questionOptions.appendChild(button);
    })
};

// log correct answer/ wrong answer and play sound
//check answer
function checkAnswer() {
    var selectedAnswer = this.textContent;
    var correctOption = questions[currentQuestionIndex].rightOption;
    var isCorrect = selectedAnswer === correctOption;

    if (isCorrect) {
        correctAnswer();
    } else {
        incorrectAnswer();
    };

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        console.log("quiz complete");
        endGame();  // Call endGame if the quiz is complete
    } else {
        renderQuestions();  // Otherwise, render the next question
    }
};


// timer 

function startTimer() {
    timerCount--;
    timeEl.textContent = timerCount;
    if (timerCount <= 0) {
        // Tests if win condition is met
        endGame();
    }
};
// play sound when the answer is given
function correctAnswer() {
    correctAudio.play();
    feedbackEl.textContent = "Correct!";
    showFeedback("correct")
    score += 10;
};

function incorrectAnswer() {
    incorrectAudio.play();
    timerCount -= 5;
    showFeedback("incorrect")
};

function showFeedback(message) {
    feedbackEl.textContent = message;
    feedbackEl.setAttribute("class", "feedback");
    feedbackEl.removeAttribute("class");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
}

function logHighScore() {
    var initials = document.getElementById("initials").value.trim();
    if (initials !== "" || initials.length < 4) {
        var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
        var newScore = {
            score: score,
            initials: initials
        };
        highScores.push(newScore);
        window.localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.href="highscore.html";
    }

}

// End game
function endGame() {
    clearInterval(timer);
    finalScoreEL.textContent = score;
    endScreenEl.removeAttribute("class");
    questionsEl.setAttribute("class", "hide");
}

function resetGame() {

    currentQuestionIndex = 0;
    isWin = false;
    isCorrect = true;

    startScreenEl.removeAttribute("class");
    questionTitleEl.setAttribute("class", "hide");
}

startButton.onclick = startQuiz;
submitButton.onclick = logHighScore;
resetButton.onclick = resetGame;