import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-90 sign-in-form kathenge">
        <div className="container card mt-5 mb-5">
          <h2 className="text-center mt-3">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                required
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary mt-4 sign-button"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-3 mb-5 text-center">
            Don't have an account? <Link to="/sign-up"> Sign up here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;