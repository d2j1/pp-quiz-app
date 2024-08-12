import { useState } from "react";

function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  return <p> Currently active question </p>;
}

export default Quiz;
