import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../header.css";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check if the user is signed in
    const signedIn = localStorage.getItem("isSignedIn") === "true";
    setIsSignedIn(signedIn);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("isSignedIn");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setIsSignedIn(false);
    alert("You have been signed out.");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GYAN YATRA</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          {!isSignedIn && (
            <li><Link to="/signin">Sign In</Link></li>
          )}
          {isSignedIn && (
            <>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/quizzes">Quizzes</Link></li>
              <li><Link to="/your-courses">Your Courses</Link></li>
              <li>
                <div className="dropdown" onClick={toggleDropdown}>
                  <span>Others</span>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <Link to="#">Mini Projects</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  )}
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="auth-buttons">
        {isSignedIn ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/signin" className="signin-btn">Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;