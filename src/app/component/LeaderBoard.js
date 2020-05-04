import React from "react";
const LeaderBoard = ({ username, answeredQsnCount, createdQsnCount }) => (
  <div>
    <h2>{username}</h2>
    <h3>Answered Questions: {answeredQsnCount}</h3>
    <h3>Created Questions: {createdQsnCount}</h3>
    <h3>Score: {createdQsnCount + answeredQsnCount}</h3>
  </div>
);
export default LeaderBoard;
