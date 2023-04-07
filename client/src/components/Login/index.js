import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginFunction } from "../APIs";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    loginFunction(email, password).then((result) => {
      if (result.token) {
        dispatch(login(result.token));
        navigate("/");
      }
    });
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <h2>تسجيل الدخول</h2>
        <label htmlFor="email">الأميل:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">الباسورد:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">تسجبل الدخول</button>
        <p>
          ليس لديك حساب؟<Link to="/register">أنشاء حساب</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
