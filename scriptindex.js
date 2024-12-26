const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
},
{
    question: "What was the name of Chhatrapati Shivaji Maharaj father?",
    options: ["Shahaji Bhonsle", "Sai Bhonsle", "Vyankoji Bhosale", "None of the above"],
    answer: "Shahaji Bhonsle"
},
{
    question: "Bangalore is around 900 metres above sea level.",
    options: ["True", "False"],
    answer: "True"
},

{
  question: "Which of the following river originates as well as ends in the territory of India?",
  options: ["Brahmaputra", "Indus", "Kosi", "Chambal"],
  answer: "Chambal"
},
{
  question: "Which of the following is one of the oldest and most popular classical dance forms of India?",
  options: ["Kathak", "Bhangra", "Bharatanatyam", "Garba"],
  answer: "Bharatanatyam"
}
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';

  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement('li');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => selectOption(option));
    optionsElement.appendChild(optionElement);
  });
}

let selectedOption = null;

function selectOption(option) {
  selectedOption = option;
  const allOptions = optionsElement.getElementsByTagName('li');
  Array.from(allOptions).forEach(option => option.style.backgroundColor = '104f83');
  
  event.target.style.backgroundColor = 'aqua';
}

function submitAnswer() {
  if (!selectedOption) return;

  if (selectedOption === questions[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = '';
  optionsElement.innerHTML = '';
  nextButton.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreElement.textContent = `You scored ${score} / ${questions.length}`;
}

restartButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add('hidden');
  nextButton.classList.remove('hidden');
  loadQuestion();
});

loadQuestion();
nextButton.addEventListener('click', submitAnswer);
