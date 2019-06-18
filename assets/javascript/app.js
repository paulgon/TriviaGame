var emptyDiv = $('#empty-div');
var wins = 0;
var losses = 0;
var timer = 30;
var index = 0;
var interval = '';
var questions = [
    {
        question: 'how old is Armando?',
        correctAnswer: 29,
        sandBoxofAnswers: [29, 28, 40]
    },
    {
        question: 'how old is Paul?',
        correctAnswer: 32,
        sandBoxofAnswers: [60, 35, 32]
    }
];

//2
//2

function question(index) {
    emptyDiv.empty();

    //create title for each question should be inside of an h1
    var title = $('<h1>');
    title.text(questions[index].question);
    emptyDiv.append(title);

    //create element for each question should be inside of an button
    var sandBoxofAnswers = questions[index].sandBoxofAnswers;
    for (var i = 0; i < sandBoxofAnswers.length; i++) {
        var btn = $('<button>');
        btn.addClass('btn btn-primary');
        btn.attr('data-correctAnswer', questions[index].correctAnswer);
        btn.attr('data-userAnswer', sandBoxofAnswers[i]);
        btn.text(sandBoxofAnswers[i]);
        emptyDiv.append(btn);
    }
}

var clock = 10;
question(index);
var interval2 = setInterval(function () {
    clock--;
    console.log(clock);
    if (clock === 5) {
        stopInterval();
    }
}, 2000)
function stopInterval() {
    clearInterval(interval2)
}


$(document).on('click', '.btn', function () {
    var correctAnswer = $(this).attr('data-correctAnswer');
    var userAnswer = $(this).attr('data-userAnswer');
    if (correctAnswer === userAnswer) {
        wins++;
        console.log('wins: ' + wins);
    } else {
        losses++;
        console.log('losses: ' + losses);
    }
});
