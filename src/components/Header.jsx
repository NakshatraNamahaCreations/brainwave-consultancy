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

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  university: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // const res = await fetch("http://localhost:5000/api/enquiry", {
    const res = await fetch("https://brainwave-consultancy.onrender.com/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Enquiry sent successfully!");
      setShowPopup(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        university: "",
        message: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Server error. Please try again.");
  }
};


  return (
    <>
      {/* TOP INFO BAR */}
      <div className="top-bar">
        <div className="top-bar__inner">
          <span>
            <FaPhoneAlt /> +91 9035722940
          </span>
          {/* <span><FaMapMarkerAlt />2nd Floor, Trinity Square, 547/16, A Block, Sahakar Nagar, Bengaluru, Karnataka 560092</span> */}
          <span>
            <FaClock /> Mon – Sat : 10:00 AM – 8:00 PM
          </span>
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
              <Link to="/universities-in-uzbekistan">
                Universities in Uzbekistan{" "}
              </Link>
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

        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about-us" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link to="/universities" onClick={() => setMenuOpen(false)}>
          Universities
        </Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
        <Link to="/career" onClick={() => setMenuOpen(false)}>
          Career Counseling
        </Link>
        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

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

          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <h2>Enquire Now</h2>

            <form onSubmit={handleSubmit}>
              <input
    type="text"
    name="name"
    placeholder="Full Name"
    required
    value={formData.name}
    onChange={handleChange}
  />
             <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    value={formData.email}
    onChange={handleChange}
  />
              <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
    value={formData.phone}
    onChange={handleChange}
  />

              <select
                name="university"
    required
    value={formData.university}
    onChange={handleChange}
  >
                <option value="" disabled>
                  Select University
                </option>
                <option value="uni1">
                  Buon Ma Thout University (BTU), Vietnum
                </option>
                <option value="uni2">
                  Nam Can Tho University (NCTU), Vietnam
                </option>
                <option value="uni3">Duy Tan University (DTU), Vietnam</option>
                <option value="uni4">Dong A University (DAU), Vietnam</option>
                <option value="uni5">VTT University, Vietnam</option>
                <option value="uni6">
                  SEU – Georgian National University, Tbilisi, Georgia
                </option>
                <option value="uni7">
                  East West University, Tbilisi, Georgia
                </option>
                <option value="uni8">
                  BAU International University, Batumi, Georgia
                </option>
                <option value="uni9">
                  SEU Avicenna Medical Program, Tbilisi, Georgia
                </option>
                <option value="uni10">
                  Geomedi Medical University, Tbilisi, Georgia
                </option>
                <option value="uni11">
                  David Tvildiani Medical University (DTMU), Tbilisi, Georgia
                </option>
                <option value="uni12">
                  Caucasus International University (CIU), Tbilisi, Georgia
                </option>
                <option value="uni13">
                  GAU – Georgian American University, Tbilisi, Georgia
                </option>
                <option value="uni14">
                  Tashkent Medical University – Termez Branch, Uzbekistan
                </option>
                <option value="uni15">
                  Samarkand State Medical University, Uzbekistan
                </option>
                <option value="uni16">
                  Bukhara State Medical University, Uzbekistan
                </option>
                <option value="uni17">
                  Andijan State Medical University, Uzbekistan
                </option>
                <option value="uni18">
                  Nobel Medical College & Teaching Hospital, Biratnagar – Nepal
                </option>
                <option value="uni19">
                  Birat Medical College & Teaching Hospital, Biratnagar – Nepal
                </option>
                <option value="uni20">
                  KMC – Kathmandu Medical College, Nepal
                </option>
                <option value="uni21">
                  Patan Academy of Health Sciences (PAHS), Lalitpur – Nepal
                </option>
                <option value="uni22">
                  BP Koirala Institute of Health Sciences (BPKIHS), Dharan –
                  Nepal
                </option>
                <option value="uni23">
                  Janaki Medical College & Teaching Hospital, Janakpur – Nepal
                </option>
                <option value="uni24">
                  🇷🇺 Kazan State Medical University – Russia
                </option>
                <option value="uni25">
                  🇷🇺 Orel State Medical University – Russia
                </option>
                <option value="uni26">
                  🇷🇺 Volgograd State Medical University – Russia
                </option>
                <option value="uni27">
                  🇷🇺 Astrakhan State Medical University – Russia
                </option>
                <option value="uni28">
                  🇷🇺 Kuban State Medical University – Russia
                </option>
                <option value="uni29">
                  🇷🇺 Altai State Medical University – Russia
                </option>
                <option value="uni30">🇷🇺 Mari State University – Russia</option>
                <option value="uni31">
                  🇷🇺 Sechenov First Moscow State Medical University – Russia
                </option>
                <option value="uni32">
                  🇷🇺 Saint Petersburg State Medical University – Russia
                </option>
                <option value="uni33">
                  🇷🇺 Kursk State Medical University – Russia
                </option>
                <option value="uni34">
                  🇷🇺 Bashkir State Medical University – Russia
                </option>
              </select>

             <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
  />

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
