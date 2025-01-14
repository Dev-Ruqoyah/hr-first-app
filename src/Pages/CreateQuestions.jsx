import { useState } from "react";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [questionnaire, setQuestionnaire] = useState([]);

  const submitQuestion = () => {
    const newQuestion = {
      question: question,
      options: [option1, option2, option3, option4],
    };
    console.log(newQuestion);
    setQuestionnaire((prev) => [...prev, newQuestion]);
    //   console.log(questionnaire);
  };

  return (
    <>
      <textarea
        name=""
        id=""
        onInput={(e) => setQuestion(e.target.value)}
        cols="30"
      ></textarea>
      <input type="text" onInput={(e) => setOption1(e.target.value)} />
      <input type="text" onInput={(e) => setOption2(e.target.value)} />
      <input type="text" onInput={(e) => setOption3(e.target.value)} />
      <input type="text" onInput={(e) => setOption4(e.target.value)} />
      <select name="" id="">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>

      <button onClick={submitQuestion}>Submit</button>
      {questionnaire.map((question) => (
        <div key={question.index}>
          <h4>{question.question}</h4>
          {question.options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </div>
      ))}
    </>
  );
};

export default CreateQuestion;
