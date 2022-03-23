function populate() {
    if (Quiz.isEnded()) {
        showscores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choice[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = funtion(); {
        quiz.guess(guess)
        populate();
    }
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
};

function showscores() {
    var gameoverHTML = "<h1>Result</h1>";
    gameoverHTML += "<h2 id='score'>Your Scores:" + quiz.score + "</h2>"
    var element = document.getElementById("quiz");
    element.innerHTML = gameoverHTML;
};

var questions = [
    new Question("Green plants are called ________ .", ["Autotrophs", "Hetrotrophs", "Saprotrophs", "Parasite"], "Autotrophs")
];