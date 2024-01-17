// script.js

const questions = [
    {
        question: "Oracle as been renamed twice, its oldest name was Software Development Laboratories [SDL].After that it was renamed to?",
        options: ["Geophysical Service Inc", "Relational Software Inc", "Relational Service Inc"],
        correctAnswer: "Relational Service Inc"
    },
    {
        question: "Who is the founder of gmail?",
        options: ["Paul Bucheitt", "Paul Allen", "Ronald Wayne"],
        correctAnswer: "Paul Bucheitt"
    },
    {
        question: "Who is the founder of HCL Technologies?",
        options: ["Anant Gupta", "Shiv Nadar", "Sundar Pichai"],
        correctAnswer: "Shiv Nadar"
    },
    {
        question: "When was Airtel founded?",
        options: ["8 Sepetember,1997", "5 May,1995", "7 July, 1995"],
        correctAnswer: "7 July, 1995"
    },
    {
        question: "what is the tagline of the company Wipro?",
        options: ["Applying Thought", "Experience Certainity", "Next is What?"],
        correctAnswer: "Applying Thought"
    },
    {
        question: "What is the full form of RAM?",
        options: ["Paul Bucheitt", "Paul Allen", "Ronald Wayne"],
        correctAnswer: "Paul Bucheitt"
    },
    {
        question: "What is the full form of W.W.W?",
        options: ["World Wide Web", "Warnes Watch Wide", "Wand Wemb Will"],
        correctAnswer: "World Wide Web"
    },
    {
        question: "Who is the founder of google?",
        options: ["Larry Page", "Marie Curie", "Raven Koisang"],
        correctAnswer: "Larry Page"
    },
    {
        question: "Who is the current chairman of Tata?",
        options: ["Ratan Tata", "Jamsedhji Tata", "Mohan karam Tata"],
        correctAnswer: "Ratan Tata"
    },
    {
        question: "Who is the founder of apple?",
        options: ["Steve Jobs", "Sundar pichai", "Rammy Susan"],
        correctAnswer: "Paul Bucheitt"
    },
    {
        question: "What is the mother company og google?",
        options: ["Numbers", "Apple", "ALphabets"],
        correctAnswer: "ALphabets"
    },
    {
        question: "Which is the top it company in india?",
        options: ["Wipro", "Tata", "Ibm"],
        correctAnswer: "Tata"
    },
    {
        question: "Who is called the father of computer?",
        options: ["Paul Bucheitt", "Paul Allen", "Ronald Wayne"],
        correctAnswer: "Paul Bucheitt"
    },
    {
        question: "Who is the founder of facebook?",
        options: ["Mark Zuckerberg", "Rishit Bharwal", "Steve Wozniak"],
        correctAnswer: "Mark Zuckerberg"
    },
    {
        question: "What is the name of the upcoming IT project in bengal coming up in 2025 which have a total investment of 1 trillion?",
        options: ["Bengal Silicon Valley Tech Hub", "Silicon Valley Bengal Tech Hub", "Tech Hub Of Bengal"],
        correctAnswer: "Bengal Silicon Valley Tech Hub"
    },
    {
        question: "Which version of iphone was never released?",
        options: ["iphone 6", "iphone 9", "iphone 8"],
        correctAnswer: "iphone 9"
    },
    {
        question: "What was the first name of Google?",
        options: ["Backrub", "Realto", "Titans"],
        correctAnswer: "Backrub"
    },
    {
        question: "What is the new name of twitter?",
        options: ["X", "Twitch", "Discord"],
        correctAnswer: "X"
    },
    {
        question: "which company owns Facebook?",
        options: ["Meta", "Miscis", "Malbus"],
        correctAnswer: "Meta"
    },
    {
        question: "Who is the founder of IBM Company?",
        options: ["Thomas  J.Watson", "Herman Hollerith", "Both (a) and (b)"],
        correctAnswer: "Both (a) and (b)"
    },
    {
        question: "Who is the founder of Capgemini Company?",
        options: ["M.H. Hasham Premji", "Serge Kampf", "N.R.Narayana Murthy"],
        correctAnswer: "Serge Kampf"
    },
    {
        question: "Who is the founder of Deloitte Company?",
        options: ["William Welch Deloitte", "M.H. Hasham Premji", "J.R.D. Tata"],
        correctAnswer: "William Welch Deloitte"
    },
    {
        question: "Who is the founder of Wipro Company?",
        options: ["M.H. Hasham Premji", "Serge Kampf", "Herman Hollerith"],
        correctAnswer: "M.H. Hasham Premji"
    },
    {
        question: "Who is the Founder of Infosys Company?",
        options: ["M.H. Hasham Premji", "N.R.Narayana Murthy", "Both (a) and (b)"],
        correctAnswer: "N.R.Narayana Murthy"
    },
    {
        question: "How many bytes make a kilobyte?",
        options: ["109 bytes", "2000 bytes", "1024 bytes"],
        correctAnswer: "1024 bytes"
    },
    {
        question: "Who is the Chairman of Reliance?",
        options: ["Steve Jobs", "Mukesh Ambani", "Gautam Adani"],
        correctAnswer: "Mukesh Ambani"
    },
    {
        question: "Which of these is not an IT based company?",
        options: ["Infosys", "Capgemini", "Monte Carlo"],
        correctAnswer: "Monte Carlo"
    },
    {
        question: "What was the first computer virus ever invented?",
        options: ["Covid-19 virus", "Creeper virus", "Stuxnet virus"],
        correctAnswer: "Creeper virus"
    },
    {
        question: "Who was the founder of WWW (World Wide Web)?",
        options: ["Tim Berners-Lee", "Elon Musk", "Stephen Hawking"],
        correctAnswer: "Tim Berners-Lee"
    },
    {
        question: "Which scientist was present in the previous logo of Apple?",
        options: ["Isaac Newton", "Albert Einstein", "Joseph Priestly"],
        correctAnswer: "Isaac Newton"
    },
    {
        question: "The PS5 console contains four signs: circle, triangle, cross and which other shape?",
        options: ["Square", "Pentagon", "Cresent"],
        correctAnswer: "Square"
    },
    {
        question: "What is MS Access?",
        options: ["A database software", "A scanning software", "A presentation software, A publishing software"],
        correctAnswer: "A database software"
    },
];

let currentQuestionIndex = 0;
let quizCompleted = false;
let timerSeconds = 10; 
let timerInterval;

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

function startTimer() {
    timerInterval = setInterval(function () {
        if (timerSeconds > 0) {
            timerSeconds--;
            document.getElementById("timer").textContent = timerSeconds;
        } else {
            clearInterval(timerInterval);
            document.getElementById("result-container").textContent = "Time's up! Quiz completed.";
            document.getElementById("result-container").classList.remove("correct");
            document.getElementById("result-container").classList.add("incorrect");
            document.getElementById("result-container").style.display = "block";

            
            const radioButtons = document.querySelectorAll('input[name="answer"]');
            radioButtons.forEach((radioButton) => {
                radioButton.disabled = true;
            });
        }
    }, 1000);  
}

function checkAnswer() {
    if (quizCompleted || currentQuestionIndex > 0) {
        return; 
    }

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
        quizCompleted = true;

        
        const radioButtons = document.querySelectorAll('input[name="answer"]');
        radioButtons.forEach((radioButton) => {
            radioButton.disabled = true;
        });

        resultContainer.textContent += " Quiz completed!";
        clearInterval(timerInterval); 
    }
}
