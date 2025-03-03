import React from "react";
import "../AboutUs.css"; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Me</h1>
      <p className="intro-text">
        Welcome to <strong>Gyan Yatra</strong>, your one-stop destination for
        enhancing your skills and knowledge in the world of technology. My name
        is <strong>[Your Name]</strong>, and I'm the creator of this platform.
      </p>

      <section className="mission-section">
        <h2>My Mission</h2>
        <p>
          My mission is to empower individuals with the knowledge and skills
          they need to succeed in the ever-evolving tech industry. Through
          high-quality courses, tutorials, and resources, I aim to help you
          achieve your goals and unlock your full potential.
        </p>
      </section>

      <section className="about-me-section">
        <h2>Who Am I?</h2>
        <div className="about-me-content">
          <img
            src="/images/your-photo.jpg" // Replace with your photo
            alt="[Your Name]"
            className="about-me-image"
          />
          <div className="about-me-text">
            <p>
              Hi, I'm <strong>[Your Name]</strong>, a passionate software
              developer and educator with over [X] years of experience in the
              tech industry. I specialize in [Your Expertise, e.g., "web
              development, data structures, and algorithms"] and have helped
              hundreds of students and professionals achieve their learning
              goals.
            </p>
            <p>
              I created <strong>Gyan Yatra</strong> to share my knowledge and
              provide a platform where learners can grow and thrive. Whether
              you're a beginner or an experienced professional, I'm here to
              guide you on your learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>Web Development (HTML, CSS, JavaScript, React, Node.js)</li>
          <li>Data Structures and Algorithms</li>
          <li>Python Programming</li>
          <li>Database Management (MongoDB, SQL)</li>
          <li>DevOps and Cloud Computing</li>
        </ul>
      </section>

      <section className="values-section">
        <h2>My Values</h2>
        <ul className="values-list">
          <li>
            <strong>Quality:</strong> I am committed to providing the best
            learning experience.
          </li>
          <li>
            <strong>Innovation:</strong> I constantly update my content to
            reflect the latest trends in technology.
          </li>
          <li>
            <strong>Community:</strong> I believe in building a supportive
            community of learners and professionals.
          </li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or feedback? I'd love to hear from you! Reach out to me
          at <a href="mailto:your-email@example.com">your-email@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;