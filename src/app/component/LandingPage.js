import React from "react";
import { connect } from "react-redux";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
const LandingPage = ({ users, questions, answeredQsn, unAnsweredQsn }) => (
  <div>
    {console.log()}
    {
      <Home
        users={users}
        answeredQsn={answeredQsn}
        unAnsweredQsn={unAnsweredQsn}
      />
    }
    <p>_______________</p>
    {users.map((user, key) => (
      <LeaderBoard
        key={key}
        username={user.name}
        answeredQsnCount={
          questions.filter(
            (q) =>
              q.optionOne.votes.includes(user.id) ||
              q.optionTwo.votes.includes(user.id)
          ).length
        }
        createdQsnCount={questions.filter((q) => q.author === user.id).length}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  users: state.users,
  questions: state.questions,
  answeredQsn: state.questions.filter(
    (q) =>
      q.optionOne.votes.includes(state.authedUser.authedUser.id) ||
      q.optionTwo.votes.includes(state.authedUser.authedUser.id)
  ),
  unAnsweredQsn: state.questions.filter(
    (q) =>
      !q.optionOne.votes.includes(state.authedUser.authedUser.id) &&
      !q.optionTwo.votes.includes(state.authedUser.authedUser.id)
  ),
});

export default connect(mapStateToProps)(LandingPage);
