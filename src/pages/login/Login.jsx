import React from "react";
import "./Login.scss";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LamaSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Enter your email" className="loginInput" />
            <input placeholder="Enter your password" className="loginInput" />
            <button className="loginBtn">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginResBtn">Create a new Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
