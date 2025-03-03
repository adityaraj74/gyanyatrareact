import React from "react";
import { Link } from "react-router-dom";
import "../quizzes.css"; // Import the CSS for styling

const Quizzes = () => {
  // Sample quiz data
  const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Test your knowledge of JavaScript fundamentals.",
      link: "/quiz/javascript",
    },
    {
      id: 2,
      title: "Python Programming",
      description: "Take this quiz to assess your Python skills.",
      link: "/quiz/python",
    },
    {
      id: 3,
      title: "React.js Fundamentals",
      description: "How well do you know React.js? Find out here!",
      link: "/quiz/react",
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      description: "Challenge yourself with this DSA quiz.",
      link: "/quiz/dsa",
    },
    {
      id: 5,
      title: "HTML and CSS",
      description: "Test your front-end development skills.",
      link: "/quiz/html-css",
    },
  ];

  return (
    <div className="quizzes-page">
      <h1>Tech Quizzes</h1>
      <p>Choose a quiz to test your knowledge and improve your skills.</p>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-card">
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
            <Link to={quiz.link} className="start-quiz-btn">
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;