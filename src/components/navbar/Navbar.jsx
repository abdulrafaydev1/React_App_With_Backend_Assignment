import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="header-wrapper">
      {showBanner && (
        <div className="announcement-bar">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#">Sign Up Now</a>
          </p>
          <button
            className="close-btn"
            onClick={() => setShowBanner(false)}
            aria-label="Close announcement"
          >
            ✕
          </button>
        </div>
      )}

      <div className="navbar">
        <div className="logo">SHOP.CO</div>

        <ul className="nav-links">
          <li>
            Shop <span className="caret">▼</span>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <div className="search-bar">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search for products..." />
        </div>

        <div className="icons">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="1.8"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}