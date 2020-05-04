import React from "react";

const Ask = ({ author, question, createPoll }) => (
  <div>
    <h1>{author} asks:</h1>
    <h2>Would you rather</h2>
    <h3>{question.optionOne.text}</h3>
    <h3>{question.optionTwo.text}</h3>
    <button onClick={(e) => createPoll(question)}>View Poll</button>
  </div>
);

export default Ask;
