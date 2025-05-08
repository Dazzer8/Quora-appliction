import { useState } from "react";

const QuestionBox = ({ onAsk }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (question.trim()) {
      onAsk(question);
      setQuestion("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={handleSubmit}>Ask</button>
    </div>
  );
};

export default QuestionBox;
