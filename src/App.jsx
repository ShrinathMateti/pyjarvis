import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;



