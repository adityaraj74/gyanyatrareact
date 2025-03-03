import React from "react";
import { Link } from "react-router-dom";
import "../home.css";

const Home = () => {
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Gyan Yatra</h1>
          <p>Enhance Your Skills, Expand Your Knowledge</p>
          {isSignedIn ? (
            <Link to="/courses" className="cta-btn">Explore Courses</Link>
          ) : (
            <Link to="/signin" className="cta-btn">Sign In</Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;