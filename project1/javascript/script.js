function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().iscorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = funtion(); {
    return this.questionIndex ===
        this.questions.length;

}