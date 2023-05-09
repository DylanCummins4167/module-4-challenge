// Define quiz questions and answers
const questions = [
	{
		question: "What is the capital of France?",
		choices: ["Paris", "Berlin", "London", "Madrid"],
		answer: "Paris"
	},
	{
		question: "What is the tallest mammal?",
		choices: ["Elephant", "Giraffe", "Horse", "Rhino"],
		answer: "Giraffe"
	},
	{
		question: "What is the largest planet in our solar system?",
		choices: ["Mars", "Jupiter", "Earth", "Saturn"],
		answer: "Jupiter"
	},
	{
		question: "What is the smallest country in the world?",
		choices: ["China", "USA", "Vatican City", "Australia"],
		answer: "Vatican City"
	}
];

// Get HTML elements
const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");

let currentQuestion = 0;
let time = 60;

// Start quiz when start button is clicked
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
	// Hide start button and show quiz
	startBtn.style.display = "none";
	quiz.style.display = "block";

	// Start timer
	let countdown = setInterval(function() {
		time--;
		timerEl.innerHTML = time;

		if (time <= 0) {
			clearInterval(countdown);
			endQuiz();
		}
	}, 1000);

	// Show first question
	showQuestion();
}

function showQuestion() {
	// Get current question
	let q = questions[currentQuestion];

	// Update question and choices
	questionEl.innerHTML = q.question;
	choicesEl.innerHTML = "";

	for (let i = 0; i < q.choices.length; i++) {
		let choice = q.choices[i];
		let btn = document.createElement("button");
		btn.innerHTML = choice;
		btn.addEventListener("click", function() {
			if (choice === q.answer) {
				currentQuestion++;
				if (currentQuestion >= questions.length) {
					endQuiz();
				} else {
					showQuestion();
				}
			} else {
				time -= 10;
				if (time < 0)
