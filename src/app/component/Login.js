import React from "react";

const Login = ({ users, handleChange }) => (
  <div>
    <label>Login as: </label>
    <select value="select" onChange={(e) => handleChange(e.target.value)}>
      {users.map((key) => (
        <option key={key.id}>
          {key.name} ({key.id})
        </option>
      ))}
    </select>
  </div>
);
export default Login;
