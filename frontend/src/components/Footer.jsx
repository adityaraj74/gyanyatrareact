import React from "react";
import "../footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Gyan Yatra is your one-stop destination for learning and growth. Join us to enhance your skills and knowledge.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/tutorials">Tutorials</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@gyanyatra.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Gyan Yatra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;