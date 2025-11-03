import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

  };
  
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
    <div className="card shadow p-4" style={{ width: "350px" }}>
      <h3 className="text-center mb-3">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>

          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>

          <hr />

          <div className="text-center">
            <button type="button" className="btn btn-outline-secondary">
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}