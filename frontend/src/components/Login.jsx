import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const authinfo = useRef(null);

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

 

  const handleSubmitbtn = () => {
    console.log(email);
    console.log(password);

    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.code == 200) {
          navigate('/Home');
        } else if (data.code == 404) {
          authinfo.current.innerText = data.message;
        } else {
          authinfo.current.innerText = data.message;
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="login-page">
        <h3 id="login-title">Login Here</h3>

        <input
          type="email"
          placeholder="Enter your Email"
          required
          className="login-input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          required
          className="login-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <span id="login-info" ref={authinfo}>
          ...
        </span>

        <button id="Submit-button" onClick={handleSubmitbtn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
