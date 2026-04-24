import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">💼</span> Divyank Singh
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/divyank-singh-151335281" 
               target="_blank" 
               rel="noopener noreferrer"
               className="nav-link">
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/divyanksingh678-source" 
               target="_blank" 
               rel="noopener noreferrer"
               className="nav-link">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
