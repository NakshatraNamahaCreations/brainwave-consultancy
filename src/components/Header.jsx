import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";


import { FiChevronDown } from "react-icons/fi";
import "./Header.css";
import brainwaveLogo from "../assets/pink_logo1.png";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const closePopup = () => {
  setShowPopup(false);
};

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="top-bar">
        <div className="top-bar__inner">
          <span><FaPhoneAlt /> +91 9035722940</span>
          {/* <span><FaMapMarkerAlt />2nd Floor, Trinity Square, 547/16, A Block, Sahakar Nagar, Bengaluru, Karnataka 560092</span> */}
          <span><FaClock /> Mon – Sat : 10:00 AM – 8:00 PM</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="main-header">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={brainwaveLogo} alt="Brainwave Logo" />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          {/* <Link to="/about-us">About Us</Link> */}

          {/* SERVICES DROPDOWN */}
          {/* <div className="nav-dropdown">
            <Link to="/services" className="nav-link">
              Services 
            </Link>

            <div className="dropdown-menu">
              <div className="dropdown-item has-submenu">
                  <Link to="/admissions">Admissions</Link>
                  <Link to="/visa-assistance">Visa Assistance</Link>
                  <Link to="/career-support">Career Support</Link>
                  <Link to="/global-services">Global Services</Link>
              </div>
            </div>
          </div> */}

          {/* UNIVERSITIES */}
          <div className="nav-dropdown">
            <Link to="#" className="nav-link">
              Universities <FiChevronDown />
            </Link>

            <div className="dropdown-menu">
             
              <Link to="/universities-in-vietnam">Universities in Vietnam</Link>
              <Link to="/universities-in-georgia">Universities in Georgia</Link>
              <Link to="/universities-in-uzbekistan">Universities in Uzbekistan </Link>
              <Link to="/universities-in-nepal">Universities in Nepal</Link>
              <Link to="/universities-in-russia">Universities in Russia</Link>
            </div>
          </div>

          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>

          <Link to="/career-counseling">Career Counseling</Link>

          <Link to="/contact-us">Contact</Link>
        </nav>

        {/* ACTIONS */}
        <div className="header-actions">
          <button className="apply-btn" onClick={() => setShowPopup(true)}>
            Enquire Now
          </button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/universities" onClick={() => setMenuOpen(false)}>Universities</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/career" onClick={() => setMenuOpen(false)}>Career Counseling</Link>
        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link>

        <button
          className="mobile-apply-btn"
          onClick={() => {
            setShowPopup(true);
            setMenuOpen(false);
          }}
        >
          Enquire Now
        </button>
      </div>

{showPopup && (
  <div className="popup-overlay" onClick={closePopup}>
    
    {/* CLOSE ICON ABOVE CARD */}
    <button className="popup-close-btn" onClick={closePopup}>
      <FaTimes />
    </button>

    <div
      className="popup-form"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>Enquire Now</h2>

      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />

        <select required defaultValue="">
          <option value="" disabled>Select University</option>
          <option value="harvard">Harvard University</option>
          <option value="stanford">Stanford University</option>
          <option value="mit">MIT</option>
        </select>

        <textarea placeholder="Your Message"></textarea>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  </div>
)}

    </>
  );
}
