var questions = [
    {
        question: "HTML Stands for ______",
        options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "CSS Stands for ______",
        options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
        correctAnswer: "Cascading Style Sheet",
    },
    {
        question: "JS Stands for ______",
        options: ["JS", "JS", "JavaScript", "JS"],
        correctAnswer: "JavaScript",
    },
    {
        question: "RAM Stands for ______",
        options: ["RAM", "RAM", "Random Access Memory", "RAM"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "SQL Stands for ______",
        options: ["SQL", "SQL", "Structured Query Language", "SQL"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "Is HTML a Programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO",
    },
];

var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var optionsParent = document.getElementById("optionsParent");

var indexVal = 0;
var marks = 0;

function renderQuestion() {
    var que = questions[indexVal];
    displayQuestion.innerHTML = que.question;
    totalQuestionNumber.innerHTML = questions.length;
    currentQuestionNumber.innerHTML = indexVal + 1;

    optionsParent.innerHTML = "";

    for (var i = 0; i < que.options.length; i++) {
        optionsParent.innerHTML += `<div class="col-md-6 my-3">
    <button onclick="checkAnswer('${que.correctAnswer}', '${que.options[i]}')" class="btn btn-outline-dark text-black-icon-link icon-link-hover-text-white w-100 py-2">${que.options[i]}</button>
</div>`;
    }
}

function nextQue() {
    indexVal++;
    renderQuestion();
}

function checkAnswer(correctAnswer, selectedOption) {
    console.log(correctAnswer, selectedOption);
    if (correctAnswer === selectedOption) {
        marks = marks + 1;
    }
    console.log(marks)
    nextQue();
}

renderQuestion();