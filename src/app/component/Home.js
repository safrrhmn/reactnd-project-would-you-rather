import React from "react";
import Ask from "./Ask";
import { createPoll } from "../../app/actions";
import { connect } from "react-redux";
import Poll from "./Poll";
import { submitPoll } from "../thunk";

const Home = ({
  users,
  answeredQsn,
  unAnsweredQsn,
  createPoll,
  createPollQsn,
  submitPoll,
}) => {
  const ans = (
    <div>
      <div>
        {answeredQsn.map((q) => (
          <Ask
            author={users.find((u) => u.id === q.author).name}
            question={q}
            createPoll={createPoll}
          />
        ))}
      </div>
      <div>
        {unAnsweredQsn.map((q) => (
          <Ask
            author={users.find((u) => u.id === q.author).name}
            question={q}
            createPoll={createPoll}
          />
        ))}
      </div>
    </div>
  );
  const poll =
    createPollQsn === undefined ? null : (
      <Poll
        user={users.find((u) => u.id === createPollQsn.author).name}
        question={createPollQsn}
        submitPoll={submitPoll}
      />
    );
  return createPollQsn ? poll : ans;
};

const mapStateToProp = (state) => ({
  createPollQsn: state.createPollSuccess.question,
});
const mapDispatchToProp = (dispatch) => ({
  createPoll: (qsn) => dispatch(createPoll(qsn)),
  submitPoll: (qsn, vote) => dispatch(submitPoll(qsn, vote)),
});

export default connect(mapStateToProp, mapDispatchToProp)(Home);
