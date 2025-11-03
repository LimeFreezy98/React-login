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
    alert("Login button clicked!");
  };
  
  return (
    <>
        
    </>
  )


}