import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-90 sign-up-form">
        <div className="container card mt-5 mb-5">
          <h2 className="text-center mt-3">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
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
            <div className="form-group mt-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                required
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary mt-4 sign-button"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-3 mb-5 text-center">
            Already have an account? <Link to="/login">Sign In</Link> instead
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;