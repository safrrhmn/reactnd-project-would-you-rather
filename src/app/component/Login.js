import React from "react";

const Login = ({ users, handleChange }) => (
  <div>
    <label>Login as: </label>
    <select
      value="select"
      onChange={(e) =>
        handleChange(users.filter((u) => u.name === e.target.value)[0])
      }
    >
      {users.map((key) => (
        <option key={key.id}>{key.name}</option>
      ))}
    </select>
  </div>
);
export default Login;
