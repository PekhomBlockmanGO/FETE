// script.js

const questions = [
    {
        question: "Who is the current president of LMNTRIX?",
        options: ["Aritro Shome", "Sreejita Chakroborty", "Shreyan Banerjee"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus"],
        correctAnswer: "Mars"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

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

        const label = document.createElement("label");
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        optionsContainer.appendChild(label);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        const resultContainer = document.getElementById("result-container");

        if (userAnswer === correctAnswer) {
            resultContainer.textContent = "Your answer is correct!";
            resultContainer.classList.remove("incorrect");
            resultContainer.classList.add("correct");
        } else {
            resultContainer.textContent = `Your answer is incorrect. The correct answer is ${correctAnswer}.`;
            resultContainer.classList.remove("correct");
            resultContainer.classList.add("incorrect");
        }

        resultContainer.style.display = "block";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            resultContainer.textContent += " Quiz completed!";
        }
    }
}

window.onload = initializeQuiz;
