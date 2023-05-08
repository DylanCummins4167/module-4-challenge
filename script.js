const questions = [
	{
		question: "What is the capital of France?",
		options: ["Paris", "London", "Madrid", "Rome"],
		answer: 0
	},
	{
		question: "What is the largest planet in our solar system?",
		options: ["Jupiter", "Saturn", "Mars", "Venus"],
		answer: 0
	},
	{
		question: "What is the smallest country in the world?",
		options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
		answer: 1
	},
	{
		question: "What is the tallest mountain in the world?",
		options: ["K2", "Makalu", "Everest", "Lhotse"],
		answer: 2
	},
	{
		question: "What is the chemical symbol for gold?",
		options: ["Au", "Ag", "Cu", "Fe"],
		answer: 0
	}
];

const container = document.querySelector(".container");
const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;

function startQuiz() {
	startBtn.classList.add("hide");
	questionContainer.classList.remove("hide");
	timer = setInterval(updateTimer, 1000);
	showQuestion();
}

function showQuestion() {
	resetOptions();
	const question = questions[currentQuestion];
	questionEl.innerText = question.question;
	for (let i = 0; i < question.options.length; i++) {
		optionsEl.children[i].innerText = question.options[i];
	}
}

function selectAnswer(index) {
	const question = questions[currentQuestion];
