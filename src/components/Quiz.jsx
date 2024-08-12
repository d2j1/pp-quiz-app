import { useState } from "react";
import Questions from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";

function Quiz() {
  const [answers, setAnswers] = useState([]);

  const activeQuestionIndex = answers.length;

  const isQuizCompleted = activeQuestionIndex === Questions.length;
  function handleSelectAnswer(selectedAnswer) {
    setAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...Questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
