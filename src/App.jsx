import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


export default function App() {
  const [isRegister, setIsRegister] = useState(false);

    // Separate state for login
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    // Separate state for register
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [cofirmPassword, setConfirmPassword] = useState("");

    // in memory save account 
      const [accounts, setAccounts] = useState({});

  // Handle Login 
  const handleLogin = (e) => {
    e.preventDefault();
    const account = accounts[loginEmail];
    if (!account) {
      alert("No account found with this email!");
      return;
    }
    if (account.password !== loginPassword) {
      alert("Incorrect password!");
      return;
    }
    alert(`Welcome back, ${account.firstName}!`);
  };
  
  //  Handle Register 
  const handleRegister = (e) => {
    e.preventDefault();
  

  //  Password validation: min 8 chars, at least 1 capital, 1 number, 1 symbol
  const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/;

      if (!passwordRegex.test(registerPassword)) {
        alert(
          "Password must be at least 8 characters and include a capital letter, a number, and a symbol."
        );
        return;
      }

      if (registerPassword !== cofirmPassword) {
         alert("Passwords do not match!")
         return;
      }
   
      if (accounts[registerEmail]) {
        alert("An account with this email already exists!");
        return;
      }


      setAccounts((prev) => ({
        ...prev,
        [registerEmail]: {
          firstName,
          lastName,
          password: registerPassword,
        },
      }));

      console.log("Register Attempt:");
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", registerEmail);
      console.log("Password:", registerPassword);
      alert("Account created successfully!");
    toggleForm(); // switch to login
  };

  

       // Reset form when toggling
    const toggleForm = () => {
      setIsRegister(!isRegister);
      // Clear all fields when switching
      setLoginEmail("");
      setLoginPassword("");
      setFirstName("");
      setLastName("");
      setRegisterEmail("");
      setRegisterPassword("");
      setConfirmPassword("")
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

          {/* Email input  */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={isRegister ? registerEmail : loginEmail}
              onChange={(e) =>
                isRegister
                  ? setRegisterEmail(e.target.value)
                  : setLoginEmail(e.target.value)
              }
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={isRegister ? registerPassword : loginPassword}
              onChange={(e) =>
                isRegister
                  ? setRegisterPassword(e.target.value)
                  : setLoginPassword(e.target.value)
              }
              required
            />
          </div>

           {/* Confirm password (register only) */}
           {isRegister && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Confirm Password"
                value={cofirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              {isRegister ? "Create Account" : "Log In"}
            </button>
          </div>

          {/* Forgot password link only for login */}
          {!isRegister && (
            <div className="text-center mt-3">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
          )}

          <hr />

          {/* Toggle between forms */}
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={toggleForm}
            >
              {isRegister ? "Back to Login" : "Create New Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}