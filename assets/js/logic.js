var score = 0;
var currentQuestionIndex = 0;
var isWin = false;
isCorrect = true


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
        questionEl.textContent = questionNumber + ". " + currentQuestion.question;

        answerButtons.forEach((answerButton, i) => {

            // If the element is found, proceed
            if (answerButton) {
                const answer = currentQuestion.answers[i];
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                button.onclick = function () {
                    checkAnswer(answer);
                    nextQuestion();
                }
                // Append the button to answerButton
                answerButton.appendChild(button);
            } else {
                console.error("Answer button not found:", ".answer-button:nth-child(" + (i + 1) + ")");
            }
        });
    }
}

// log correct answer/ wrong answer and play sound
//check answer
function checkAnswer() {
    isCorrect = answer.correct;
    if (answer.correct) {
        playCorrect
    }
    else(playIncorrect);
};

function nextQuestion() {
    currentQuestionIndex++;
    renderQuestions()
}
// timer 
function startTimer() {
    timer = setInterval(function () {
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


startButton.onclick = startQuiz;
nextButton.onclick = nextQuestion;