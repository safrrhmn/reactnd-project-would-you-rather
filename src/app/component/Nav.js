import React from "react";
const Nav = ({ authedUser, onLogOut }) => (
  <div>
    <p>Hello {authedUser}</p>
    <button onClick={onLogOut}>Logout</button>
  </div>
);
export default Nav;
