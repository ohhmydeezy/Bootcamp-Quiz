var BackButton = document.querySelector("#back");
var clearButton = document.querySelector("#clear");



//back to start screen

function goBack() {
    window.location.href = "index.html";
}

function clearHighScores() {
    localStorage.clear();
    location.reload();
}

BackButton.onclick = goBack;
clearButton.onclick = clearHighScores;