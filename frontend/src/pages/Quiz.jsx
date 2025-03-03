import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../quiz.css"; // Import the CSS for styling

const Quiz = () => {
  const { quizTopic } = useParams(); // Get the quiz topic from the URL
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Quiz data for each course
  const quizData = {
    javascript: [
      {
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["object", "null", "undefined", "boolean"],
        correctAnswer: "object",
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "all of the above"],
        correctAnswer: "all of the above",
      },
      {
        question: "What does `===` operator do in JavaScript?",
        options: [
          "Checks for equality without type conversion",
          "Checks for equality with type conversion",
          "Assigns a value",
          "None of the above",
        ],
        correctAnswer: "Checks for equality without type conversion",
      },
    ],
    python: [
      {
        question: "What is the correct syntax to create a function in Python?",
        options: [
          "function myFunc():",
          "def myFunc():",
          "create myFunc():",
          "func myFunc():",
        ],
        correctAnswer: "def myFunc():",
      },
      {
        question: "Which of the following is NOT a Python data type?",
        options: ["int", "str", "float", "double"],
        correctAnswer: "double",
      },
      {
        question: "What does the `len()` function do in Python?",
        options: [
          "Returns the length of a string",
          "Returns the length of a list",
          "Returns the length of a tuple",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
    ],
    react: [
      {
        question: "What is React.js primarily used for?",
        options: [
          "Backend development",
          "Frontend development",
          "Database management",
          "None of the above",
        ],
        correctAnswer: "Frontend development",
      },
      {
        question: "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: "useState",
      },
      {
        question: "What is the purpose of `props` in React?",
        options: [
          "To pass data between components",
          "To manage state",
          "To handle events",
          "To render JSX",
        ],
        correctAnswer: "To pass data between components",
      },
    ],
    dsa: [
      {
        question: "What is the time complexity of a binary search algorithm?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctAnswer: "O(log n)",
      },
      {
        question: "Which data structure uses LIFO (Last In, First Out) principle?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correctAnswer: "Stack",
      },
      {
        question: "What is the worst-case time complexity of Quick Sort?",
        options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
        correctAnswer: "O(n^2)",
      },
    ],
    "html-css": [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HyperText Machine Language",
          "HyperText Markup Links",
          "None of the above",
        ],
        correctAnswer: "HyperText Markup Language",
      },
      {
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "color", "font-color", "background-color"],
        correctAnswer: "color",
      },
      {
        question: "What is the purpose of the `<div>` tag in HTML?",
        options: [
          "To create a hyperlink",
          "To define a section or container",
          "To insert an image",
          "To create a list",
        ],
        correctAnswer: "To define a section or container",
      },
    ],
  };

  const questions = quizData[quizTopic] || [];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-page">
      <h1>{quizTopic.toUpperCase()} Quiz</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={() => window.location.reload()}>Retry Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;