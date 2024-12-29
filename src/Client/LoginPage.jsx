import React, { useState } from 'react';
import axios from 'axios';
import login2 from '../assets/image/login2.png';
import './LoginPage.css'; // Import the external CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={login2} alt="Login" className="login-image" />
      </div>
      <div className="form-wrapper">
        <h1>Log in to your Udemy account</h1>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="additional-options">
          <a href="/forgot-password" className="forgot-password">Forgot Password</a>
          <span> | </span>
          <a href="/create-account" className="create-account">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
