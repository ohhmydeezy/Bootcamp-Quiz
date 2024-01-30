var clearButton = document.getElementById("clear")


function printHighscore() {
    clearInterval(timer);
    logHighScore();
};

function clearHighscores() {
    window.localStorage.removeItem("highScores");
}

clearButton.onclick = clearHighscores