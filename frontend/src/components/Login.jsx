import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  
  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  function IsLogin(e) {
    e.preventDefault();
    props.onLogin(user);
  }
  return (
    <div>
      <br />
      <br />
      <br /><br/>
      <form className="addData"><br/>
        <h3>Login</h3>
        <br />
        
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter User Name *"
          name="username"
          value={user.username}
          required
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password *"
          name="password"
          value={user.password}
          required
        />
        <br />
        <br />
        <button type="submit" onClick={IsLogin} className="btnInfo">
          Login
        </button>
        <br />
        <br />
        <Link to="/register">Do not have an Account?</Link><br/><br/>
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
