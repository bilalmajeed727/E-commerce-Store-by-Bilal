import React from "react";
import "./CSS/LoginSignUp.css";

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="login_container">
        <h1>Sign Up</h1>
        <div className="input_feilds">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Enter Password" />
        </div>
        <button>Continue</button>
        <div className="loginSpan">
          Already have an account? <span>Login here</span>
        </div>
        <div className="login_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
