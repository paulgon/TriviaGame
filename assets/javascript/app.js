var quand = $('.card');
var wins = 0;
var losses = 0;
var timer = 30;
var index = 0;
var interval = '';
var questions = [
    {
        question: 'How large is the Milky Way?',
        correctAnswer: "100, 000 light years in diameter",
        sandBoxofAnswers: ["100,000 light years in diameter.", "50,000 light years in diameter.", "60,000 light years in diameter."]
    },
    {
        question: 'How Many stars are in the Milky Way?',
        correctAnswer: "200 billion",
        sandBoxofAnswers: ["1 billion", "2 million", "200 billion"]
    },
    {
        question: 'How Many estimated galaxies are there in the observable Universe?',
        correctAnswer: "200 trillion",
        sandBoxofAnswers: ["180 thousand", "2 million", "2 trillion"]
    },
    {
        question: 'What is the mass of the largest black hole ever found?',
        correctAnswer: "37 billion solar masses",
        sandBoxofAnswers: ["1 million solar masses", "2 billion solar masses", "37 billion solar masses"]
    }
];


function question(index) {
    quand.empty();

    //create title for each question should be inside of an h1
    var title = $('<h1>');
    title.text(questions[index].question);
    quand.append(title);
    title.addClass('q1')

    //create element for each question should be inside of an button
    var sandBoxofAnswers = questions[index].sandBoxofAnswers;
    for (var i = 0; i < sandBoxofAnswers.length; i++) {
        var btn = $('<button>');
        btn.addClass('btn btn-primary');
        btn.attr('data-correctAnswer', questions[index].correctAnswer);
        btn.attr('data-userAnswer', sandBoxofAnswers[i]);
        btn.text(sandBoxofAnswers[i]);
        quand.append(btn);
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
        $("#win").text(wins);
        console.log('wins: ' + wins);
    } else {
        losses++;
        $("#loss").text(losses);
        console.log('losses: ' + losses);
    }
});
