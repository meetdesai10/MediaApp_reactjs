import React from "react";
import "./Register.scss";
export default function Register() {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Enter your email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginBtn">Sign Up</button>
            <button className="loginResBtn">Log into your account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
