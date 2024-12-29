import React from 'react';
 
import Navbar from './components/Navbar'; 
import Herosection from './components/Herosection'; 
import Course from './components/Courses/Course'; 
import AllCourse from './components/Courses/AllCourse'; 
import LoginPage from './Client/LoginPage'; 
import Signup from './Client/Signup'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <Course />
      <AllCourse/>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for home displaying Herosection and Course */}
        <Route path="/" element={<HomePage />} />
        {/* Route for signup */}
        <Route path="/signup" element={<Signup />} />
        {/* Route for login */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<Signup />} />

      </Routes>
    </Router>
  );
};

export default App;
