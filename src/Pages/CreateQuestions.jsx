import { useState } from "react";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const[answer,setAnswer] = useState("")
  const [questionnaire, setQuestionnaire] = useState([]);

  const submitQuestion = () => {
    const newQuestion = {
      question: question,
      options: [option1, option2, option3, option4],
      answer:answer
    };
    
    setQuestionnaire((prev)=>[...prev,newQuestion])
    setQuestion("")
    setOption1("")
    setOption2("")
    setOption3("")
    setOption4("")
    setAnswer("")
    alert("Question Added Successfully")
    // setQuestionnaire((prev) => [...prev, newQuestion]);
    // setQuestionnaire([...questionnaire,newQuestion])
    //   console.log(questionnaire);
  };

  return (
    <>
      <textarea
        name=""
        id=""
        onInput={(e) => setQuestion(e.target.value)}
        cols="30"
        value={question}
      ></textarea>
      <input  value={option1} type="text" onInput={(e) => setOption1(e.target.value)} />
      <input value={option2} type="text" onInput={(e) => setOption2(e.target.value)} />
      <input value={option3} type="text" onInput={(e) => setOption3(e.target.value)} />
      <input value={option4} type="text" onInput={(e) => setOption4(e.target.value)} />
      <select name="" id="" onChange={(e)=>setAnswer(e.target.value)}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>

      <button onClick={submitQuestion}>Submit</button>
      {questionnaire.map((question) => (
        <div key={question.index}>
          <h4>{question.question}</h4>
          {question.options.map((option) => (
            <li key={option.index}>{option}</li>
          ))}
          <p>{question.answer}</p>
        </div>
      ))}
    </>
  );
};

export default CreateQuestion;
