import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-mark">DS</span>
          <span className="logo-copy">
            <strong>Divyank Singh</strong>
            <small>Student Developer</small>
          </span>
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/media"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Media
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/divyank-singh-151335281"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
