import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        🚀 Lokesh S
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        {/* CTA Button */}
        <li>
          <Link to="/contact" className="cta-button">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
