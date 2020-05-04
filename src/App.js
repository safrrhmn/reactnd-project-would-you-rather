import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { loadUserDataFromFile, loadQsnAnswers } from "./app/thunk";
import Login from "./app/component/Login";
import { loadAuthedUser, logOutUser } from "./app/actions";
import LandingPage from "./app/component/LandingPage";
import Nav from "./app/component/Nav";

function App({
  users,
  authedUser,
  startLoadingUser,
  startLoadingQuestions,
  handleChange,
  logOut,
}) {
  useEffect(() => {
    startLoadingUser();
    startLoadingQuestions();
  }, []);
  return (
    <div className="App">
      {authedUser ? (
        [
          <Nav
            key={authedUser.name}
            authedUser={authedUser.name}
            onLogOut={logOut}
          />,
          <LandingPage />,
        ]
      ) : (
        <Login users={users} handleChange={handleChange} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser:
    state.authedUser === undefined ||
    state.authedUser === null ||
    state.authedUser.length === 0
      ? null
      : state.authedUser.authedUser,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingUser: () => dispatch(loadUserDataFromFile()),
  startLoadingQuestions: () => dispatch(loadQsnAnswers()),
  handleChange: (authedUser) => dispatch(loadAuthedUser(authedUser)),
  logOut: () => dispatch(logOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
