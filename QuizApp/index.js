const questions = [
  {
    question: "What is React.js?",
    answers: [
      {
        text: "A JavaScript library for building user interfaces",
        correct: true,
      },
      { text: "A CSS framework", correct: false },
      { text: "A database management tool", correct: false },
      { text: "A web server", correct: false },
    ],
  },
  {
    question: "What is a component in React?",
    answers: [
      { text: "A part of the UI", correct: true },
      { text: "A JavaScript file", correct: false },
      { text: "A CSS class", correct: false },
      { text: "A package manager", correct: false },
    ],
  },
  {
    question: "What is JSX?",
    answers: [
      { text: "A syntax extension for JavaScript", correct: true },
      { text: "A database query language", correct: false },
      { text: "A programming language", correct: false },
      { text: "A web browser", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById("result-container").classList.add("hide");
  document.getElementById("quiz").classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("li");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  const answerButtonsElement = document.getElementById("answer-buttons");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  document.getElementById("next-btn").classList.add("hide");
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  Array.from(document.getElementById("answer-buttons").children).forEach(
    (button) => {
      setStatusClass(button, button.dataset.correct);
    }
  );
  if (questions.length > currentQuestionIndex + 1) {
    document.getElementById("next-btn").classList.remove("hide");
  } else {
    showResult();
  }
}

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

function showResult() {
  document.getElementById("quiz").classList.add("hide");
  document.getElementById("result-container").classList.remove("hide");
  document.getElementById("score").innerText = score;
}

function restartQuiz() {
  startQuiz();
}

startQuiz();
