import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import YourCourses from "./pages/YourCourses";
import CourseVideos from "./pages/CourseVideos";
import SignInSignUp from "./pages/SignInSignUp";
import Quizzes from "./pages/Quizzes";
import Quiz from "./pages/Quiz";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs"; // Import the AboutUs component
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/your-courses" element={<YourCourses />} />
        <Route path="/course-videos/" element={<CourseVideos />} />
        <Route path="/signin" element={<SignInSignUp />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:quizTopic" element={<Quiz />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;