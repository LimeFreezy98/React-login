import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


export default function App() {

  const [isRegister, setIsRegister] = useState(false); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Handle Login 
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

  };
  
  //  Handle Register 
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Password:", password);
  };


  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">
          {isRegister ? "Create Account" : "Login"}
        </h3>

        {/* Conditional rendering of forms */}
        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* Email input (shared) */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address:
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

          {/* Password input (shared) */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
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

          {/* Submit button */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              {isRegister ? "Create Account" : "Log In"}
            </button>
          </div>

          {/* Forgot password (only visible on login) */}
          {!isRegister && (
            <div className="text-center mt-3">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
          )}

          <hr />

          {/* Toggle button */}
          <div className="text-center">
            {isRegister ? (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setIsRegister(false)}
              >
                Back to Login
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setIsRegister(true)}
              >
                Create New Account
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}