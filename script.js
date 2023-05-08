// Set the time limit for the quiz (in seconds)
const timeLimit = 60;

// Define an array to store the correct answers
const correctAnswers = ['a', 'c', 'b'];

// Define an array to store the user's answers
let userAnswers = [];

// Define a variable to store the remaining time
let remainingTime = timeLimit;

// Define a variable to store the timer interval
let timerInterval;

// Display the remaining time in the timer div
function displayTimer() {
    const timerDiv = document.getElementById('timer');
    timerDiv.innerHTML = `Time Remaining: ${remainingTime}`;
}

// Start the timer
function startTimer() {
    displayTimer();
    timerInterval = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            checkAnswers();
        } else {
            displayTimer();
        }
    }, 1000);
}

// Check the user's answers
function checkAnswers() {
    clearInterval(timerInterval);
    const form = document.getElementById('quiz-form');
    const inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            userAnswers[i] = inputs[i].value;
        }
    }
    let numCorrect = 0;
    let numIncorrect = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            numCorrect++;
        } else {
            numIncorrect++;
            remainingTime -= 10;
        }
    }
