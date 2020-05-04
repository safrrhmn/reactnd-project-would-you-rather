import React, { useState } from "react";
const Poll = ({ user, question, submitPoll }) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  return (
    <div>
      <h2>{user} asks:</h2>
      <div>
        <input
          type="radio"
          value="one"
          checked={checkedOne}
          onClick={() =>
            checkedOne ? setCheckedOne(false) : setCheckedOne(true)
          }
        ></input>
        <label>{question.optionOne.text}</label>
      </div>
      <div>
        <input
          type="radio"
          value="two"
          checked={checkedTwo}
          onClick={() =>
            checkedTwo ? setCheckedTwo(false) : setCheckedTwo(true)
          }
        ></input>
        <label>{question.optionTwo.text}</label>
      </div>
      <button
        onClick={() =>
          submitPoll(question, checkedOne ? "optionOne" : "optionTwo")
        }
      >
        Submit
      </button>
    </div>
  );
};
export default Poll;
