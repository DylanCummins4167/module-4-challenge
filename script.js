const questions = [
	{
		question: "What is the capital of France?",
		options: ["Paris", "London", "Berlin", "Madrid"],
		answer: "Paris"
	},
	{
		question: "What is the largest continent?",
		options: ["Africa", "Asia", "Europe", "North America"],
		answer: "Asia"
	},
	{
		question: "What is the currency of Japan?",
		options: ["Yuan", "Dollar", "Euro", "Yen"],
		answer: "Yen"
	},
	{
		question: "What is the tallest mammal?",
		options: ["Elephant", "Giraffe", "Horse", "Lion"],
		answer: "Giraffe"
	},
	{
		question: "What is the largest planet in our solar system?",
		options: ["Venus", "Saturn", "Jupiter", "Neptune"],
		answer: "Jupiter"
	}
];

const container = document.querySelector(".container");
const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const questionDiv = document.querySelector("#question");
const optionsDiv = document.querySelector("#options");
const scoreForm = document.querySelector("#score-form");
const initialsInput = document.querySelector("#initials");

let currentQuestion = 0;
let score = 0;
let time = 60;
let timerInterval;

function startQuiz() {
    startBtn.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    updateQuestion();
}

startBtn.addEventListener("click", startQuiz);

function updateTimer() {
    time--;
    timer.textContent = time;
    if (time === 0) {
        endQuiz("Time is Up");
    }
}

function updateQuestion() {
    questionDiv.textContent = questions[currentQuestion].question;
    optionsDiv.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.textContent = option;
        optionDiv.addEventListener("click", () => {
            if (option === questions[currentQuestion].answer) {
                score++;
                currentQuestion++;
                if (currentQuestion === questions.length) {
                    endQuiz();
                } else {
                    updateQuestion();
                }
            } else {
                time -= 10;
            }
        });
        optionsDiv.appendChild(optionDiv);
    });
}

function endQuiz() {
    clearInterval(timerInterval);
    questionDiv.textContent = "Thank You for Your Submission";
    optionsDiv.innerHTML = `<p>Your score is ${score} out of ${questions.length}</p>
                            <form id="score-form">
                                <label for="initials">Enter Your Initials: </label>
                                <input type="text" id="initials" name="initials">
                                <button type="submit">Submit Score</button>
                            </form>`;
    scoreForm.addEventListener("submit", submitScore);
}

function submitScore(event) {
    event.preventDefault();
    const initials = initialsInput.value;
    const scoreData = { initials, score };
    console.log(scoreData);
    // TODO: Send score data to server or store locally
}
