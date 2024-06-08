import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.status === 200) {
        console.log('Login successful, redirecting...');
        alert('Login successful!');
        window.location.href = 'https://kiksayyy.github.io/TRIAL/index.html';
      } else {
        console.log('Login failed, response status:', response.status);
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log('Register response:', data);

      if (response.status === 201) {
        console.log('Registration successful');
        alert('Registration successful!');
        setIsLoginForm(true);
      } else {
        console.log('Registration failed, response status:', response.status);
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error registering. Please try again.');
    }
  };

  return (
    <div>
      <Helmet>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      <div className={`wrapper ${!isLoginForm && 'active'}`}>
        {isLoginForm ? (
          <form id="login-form" onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i className='bx bxs-user icon'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className='bx bxs-lock-alt icon'></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={() => setIsLoginForm(false)}>Register</a></p>
            </div>
          </form>
        ) : (
          <form id="register-form" onSubmit={handleRegisterSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i className='bx bxs-user icon'></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
              />
              <i className='bx bxs-envelope icon'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className='bx bxs-lock-alt icon'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                required
              />
              <i className='bx bxs-lock-alt icon'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={() => setIsLoginForm(true)}>Login</a></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
