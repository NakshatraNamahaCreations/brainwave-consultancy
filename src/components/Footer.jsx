import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/pink_logo1.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer className="footer">
  <div className="footer-bg" />

  <div className="footer-container">

    {/* BRAND */}
    <div className="footer-col brand">
      <img src={logo} alt="Brainwave Consultancy" />
      <p>
        Guiding students toward global education opportunities with trusted
        counseling, transparent processes, and complete study abroad support.
      </p>

      <div className="footer-social">
        <a href="https://youtube.com/@brainwaveconsultancy?si=jHMouKHroDyEgknn" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.facebook.com/share/1C5KmdxVaK/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/brainwaveconsultancy?utm_source=qr&igsh=OG9zdGd0N2s4anA5" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/career-counseling">Career Counseling</Link></li>
        <li><Link to="/contact-us">Contact</Link></li>
      </ul>
    </div>

    {/* SERVICES */}
    <div className="footer-col">
      <h4>Universities</h4>
      <ul>
        <li>Universities in Vietnam</li>
        <li>Universities in Georgia</li>
        <li>Universities in Uzbekistan</li>
        <li>Universities in Nepal</li>
        <li>Universities in Russia</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div className="footer-col">
      <h4>Contact Us</h4>
      <ul className="footer-contact">
        <li><FaPhoneAlt /> +91 9035722940</li>
        <li><FaEnvelope /> info@brainwaveconsultancy.net</li>
        <li><FaMapMarkerAlt />2nd Floor, Trinity Square,<br/> 547/16, A Block, Sahakar Nagar, <br/>Bengaluru, Karnataka 560092</li>
      </ul>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Brainwave Consultancy. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
