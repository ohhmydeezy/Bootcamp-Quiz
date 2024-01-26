const questions = [
    {
        question: "JavaScript File Has An Extension of:",
        rightOption: ".js",
        answers: [
            { text: ".Java"},
            { text: ".js" }, 
            { text: ".javascript" }, 
            { text: ".html"},
        ]
    },
    {
        question: "IsNaN() Evaluates And Argument To Determine if Given Value:",
        rightOption: "Is not a number",
        answers: [
            { text: "is not a NULL" },
            { text: "is not an object"},
            { text: "Is not a number" },
            { text: "none of the above"},
        ]
    },
    {
        question: "If Button is clicked .......Event Handler is invoked.",
        rightOption: "onClick",
        answers: [
            { text: "onSubmit()"},
            { text: "onLoad()"},
            { text: "isPostBack"},
            { text: "onClick" },
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        rightOption: "<script>",
        answers: [
            { text: "<script>"},
            { text: "H1"},
            { text: "footer"},
            { text: "a"},
        ]
    },
    {
        question: "Which of the following function of Array object calls a function for each element in the array?",
        rightOption: "forEach()",
        answers: [
            { text: "concat()"},
            { text: "every()"},
            { text: "filter()"},
            { text: "forEach()"},
        ]
    },
    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        rightOption: "toUpperCase",
        answers: [
            { text: "toUpperCase"},
            { text: "toUpper"},
            { text: "changeCase(case)"},
            { text: "None of the above."},
        ]
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        rightOption: "all of the above.",
        answers: [
            { text: "Javascript is a lightweight, interpreted programming language"},
            { text: "Javascript is designed for creating network-centric applications"},
            { text: "Javascript is complementary to and integrated with Java"},
            { text: "all of the above."},
        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        rightOption: "A & B",
        answers: [
            { text: "var"},
            { text: "let"},
            { text: "A & B"},
            { text: "None of the above" },
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        rightOption: "all of the above.",
        answers: [
            { text: "document.write()"},
            { text: "console.log()"},
            { text: "window.alert()"},
            { text: "all of the above."},
        ]
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        rightOption: "Object",
        answers: [
            { text: "boolean"},
            { text: "undefined"},
            { text: "Object"},
            { text: "int"},
        ]
    }
];

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
    }
    console.log(isCorrect)

    currentQuestionIndex++;
    renderQuestions();
}


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
    showFeedback()
        score++;
};

function incorrectAnswer() {
    incorrectAudio.play();
    feedbackEl.textContent = "Wrong!";
    timerCount -= 5;
    showFeedback()
};
//Finsihed Quiz function that logs the scorecard:

function logScore() {
    var scoreCard = document.getElementById("scoreCard");
    scoreCard.removeAttribute("class hide");
    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = score;
    questionTitleEl.setAttribute("class", "hide");
    clearInterval(timer);
    logHighScore();
    clearScreen();
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

function showFeedback() {
    feedbackEl.removeAttribute("class");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "hide");
    }, 1000);
}

// End game
function endGame() {
    clearInterval(timer);
    endScreenEl.removeAttribute("class");
    logScore();
    resetGame();
}

function resetGame() {

    currentQuestionIndex = 0;
    isWin = false;
    isCorrect = true;

    startScreenEl.removeAttribute("class");
    questionTitleEl.setAttribute("class", "hide");
}

startButton.onclick = startQuiz;
resetButton.onclick = resetGame;