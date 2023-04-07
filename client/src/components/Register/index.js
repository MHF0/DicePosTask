import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { register } from "../APIs";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    register(name, email, password).then((result) => {
      if (result.token) {
        dispatch(login(result.token));
        navigate("/");
      }
    });
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <h2>انشاء حساب جديد</h2>
        <label htmlFor="name">الاسم:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <button type="submit">انشاء حساب</button>
        <p>
          لديك حساب؟ <Link to="/login">سجل الدخول</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
