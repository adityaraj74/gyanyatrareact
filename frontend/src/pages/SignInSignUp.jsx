import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../signinsignup.css";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignUpMode ? "/api/auth/signup" : "/api/auth/signin";
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("isSignedIn", "true"); // Set isSignedIn to true
        localStorage.setItem("userId", data.result._id); // Save user ID
        localStorage.setItem("userName", data.result.name); // Save user name
        window.location.href = "/"; // Redirect to home page
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  }; 

  return (
    <div className="signin-signup-page">
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="welcome-side">
          <h1>Welcome to Gyan Yatra</h1>
          <p>
            {isSignUpMode
              ? "Join us to enhance your skills and knowledge."
              : "Sign in to continue your learning journey."}
          </p>
          <button className="toggle-btn" onClick={toggleMode}>
            {isSignUpMode
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
        <div className="form-side">
          {isSignUpMode ? (
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
          ) : (
            <form className="sign-in-form" onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;