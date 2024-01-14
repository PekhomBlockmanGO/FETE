// script.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus"],
        correctAnswer: "Mars"
    },
    
];

let currentQuestionIndex = 0;
let quizCompleted = false;
let userAnswered = false;

function initializeQuiz() {
    shuffleQuestions();
    showQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const questionElement = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionElement.textContent = questions[currentQuestionIndex].question;

    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;
        radio.disabled = quizCompleted || userAnswered; 
        const label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        optionsContainer.appendChild(label);
    });
}

function checkAnswer() {
    if (quizCompleted || userAnswered) {
        return; 
    }

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        const resultContainer = document.getElementById("result-container");

        if (userAnswer === correctAnswer) {
            resultContainer.textContent = "Your answer is correct! ☻";
            resultContainer.classList.remove("incorrect");
            resultContainer.classList.add("correct");
        } else {
            resultContainer.textContent = `Your answer is incorrect. Better luck next time ☠︎︎`;
            resultContainer.classList.remove("correct");
            resultContainer.classList.add("incorrect");
        }

        resultContainer.style.display = "block";
        userAnswered = true; 
    }
}

window.onload = initializeQuiz;
