import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { loadUserDataFromFile } from "./app/thunk";
import Login from "./app/component/Login";
import { loadAuthedUser } from "./app/actions";
import Questions from "./app/component/Questions";

function App({ users, authedUser, startLoadingUser, handleChange }) {
  useEffect(() => {
    startLoadingUser();
  }, []);
  return (
    <div className="App">
      {authedUser ? (
        <Questions />
      ) : (
        <Login users={users} handleChange={handleChange} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser.authedUser,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingUser: () => dispatch(loadUserDataFromFile()),
  handleChange: (authedUser) => dispatch(loadAuthedUser(authedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
