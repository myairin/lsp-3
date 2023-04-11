import React from 'react';

// import css
import './style.css';

export default function Login() {
  return (
    <div className="wrapper active-popup active">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon
                name="lock-closed"
                role="img"
                className="md hydrated"
                aria-label="lock closed"
              ></ion-icon>
            </span>
            <input type="password" required="" />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{' '}
              <a href="#" className="register-link">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
