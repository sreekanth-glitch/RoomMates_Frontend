import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URI } from '../../data/apiPath';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      return setError('Email and password cannot be empty.');
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URI}/room/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed. Please try again.');
      }

      alert('Login successful');
      localStorage.setItem('loginToken', data.token);
      localStorage.setItem('roomId', data.roomId);
      navigate('/dashboard'); // Redirect to dashboard or another page
    } catch (err) {
      if (err.message === 'Invalid email or password') {
        alert('You entered the wrong email or password. Please try again.');
      } else {
        alert('An error occurred. Please try again later.');
      }
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="logForbg">
      <div className="log">
        <form onSubmit={loginHandler}>
          <h2 className="forlog">Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label>Email</label> <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          /> <br /><br />
          <label>Password</label> <br />
          <div style={{ position: 'relative' }}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <span
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
              style={{
                position: 'absolute',
                right: '10px',
                top: '32%',
                cursor: 'pointer',
              }}
            >
              {passwordVisible ? '🙈' : '👁️'}
            </span>
          </div> <br />
          <div className="logBtn">
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
