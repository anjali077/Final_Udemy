import React from 'react';
import './Navbar.css'; // Import styles for the navbar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/image/download.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Udemy Logo" className="logo" />
      </div>

      {/* Categories */}
      <div className="navbar-categories">
        <a href="/categories">Categories</a>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for anything"
          aria-label="Search for anything"
        />
        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
        </button>
      </div>

      {/* Instructor and Business Links */}
      <div className="navbar-links">
        <a href="/teach">Plans & Pricing</a>
        <a href="/business">Udemy Business</a>
        <a href="/teach">Teach on Udemy</a>
      </div>

      {/* Cart Icon */}
      <div className="navbar-cart">
        <a href="/cart">
          <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" />
        </a>
      </div>

      {/* User Account Options */}
      <div className="navbar-user">
        <Link to="/login">
        <button className="login-btn" >Log In</button>
        </Link >
        <Link to="/signup">
        <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
