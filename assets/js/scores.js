var clearButton = document.getElementById("clear")



function printHighscore() {

    var highscores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    highscores.sort(function(a, b){
        return 
    })

    for (var i = 0; i < highscores.length; i++) {
        var liTag = document.createElement("li");
        liTag.textContent = `
            initials: ${highscores[i]["initials"]} 
            score: ${highscores[i]["score"]}
            `;
        var scoreStorage = document.getElementById("highscores");
        scoreStorage.appendChild(liTag);
    }
};


function clearHighscores() {
    window.localStorage.removeItem("highScores");
}

clearButton.onclick = clearHighscores
printHighscore();