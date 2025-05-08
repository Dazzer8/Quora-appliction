import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send data to the backend here
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
// Signup component for the Quora application
// This component allows users to create a new account by providing their email and password.
// It uses the useState hook to manage the input values for email and password.