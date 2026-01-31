import React from "react";
import "./AboutSection.css";
import about1 from "../assets/bwc-3.jpg";
import about2 from "../assets/bwc-4.jpg";
import { FaCheckCircle, FaAward, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGES */}
        <div className="about-images">

  <div className="image-box">
    <img src={about1} alt="Student studying" data-aos="fade-right"/>
  </div>

  {/* EXPERIENCE OVERLAY */}
  <div className="experience-badge">
    <div className="experience-circle">
      <svg viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text>
          <textPath href="#circlePath">
            Years of Experience • Years of Experience •
          </textPath>
        </text>
      </svg>

      <span className="experience-number">15+</span>
    </div>
  </div>

  <div className="image-box">
    <img src={about2} alt="Graduates" data-aos="fade-left"/>
  </div>
 {/* NEW INFO BOX (ABOVE BUTTON) */}
  <div className="award-box highlight-box" data-aos="fade-right">
    <FaAward className="award-icon" />
    <div>
      <h4>1200+ Students Guided</h4>
      <p>
        Successfully helped students secure admissions in top international universities.
      </p>
    </div>
  </div>

  {/* EXISTING BOX */}
  <div className="award-box highlight-box" data-aos="fade-left">
    <FaAward className="award-icon" />
    <div>
      <h4>15+ Years of Experience</h4>
      <p>
        Guiding students with trusted expertise for over 15 years in international education.
      </p>
    </div>
  </div>
</div>


        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-subtitle" data-aos="fade-up">
            <FaGraduationCap size={22}/> WHO WE ARE
          </span>

          <h2 data-aos="fade-up">Guiding Students Toward<br/> Global Education</h2>

          <p data-aos="fade-right">
           Brainwave Consultancy is a trusted MBBS abroad consultant in Bangalore, Karnataka, specializing in overseas medical admissions and career counseling. Led by Lavanya, a seasoned career counselor with over a decade of experience, we have guided 1,200+ students across India toward safe and recognized MBBS programs abroad.
          </p>
          <p data-aos="fade-right">
            We focus exclusively on MBBS admissions abroad, helping students select NMC-approved universities based on eligibility, budget, country safety, and future licensing outcomes. With honest counseling, clear guidance, and end-to-end admission support, Brainwave Consultancy is a reliable partner for students and parents planning MBBS abroad from Bangalore and across Karnataka.
          </p>
          <p data-aos="fade-right">Our strength lies in combining career counseling clarity with end-to-end MBBS abroad admission support, ensuring students choose only safe, recognized, and NMC-compliant medical universities.</p>

          <p data-aos="fade-right">At Brainwave Consultancy, student safety, transparency, and long-term success are our top priorities.</p>

          {/* <ul className="about-list" data-aos="fade-up">
            <li><FaCheckCircle /> Personalized University & Course Guidance</li>
            <li><FaCheckCircle /> End-to-End Admission & Visa Assistance</li>
            <li><FaCheckCircle /> Expert Counseling for Global Education Pathways</li>
          </ul> */}

          <div className="about-actions">

  {/* NEW INFO BOX (ABOVE BUTTON) */}
  {/* <div className="award-box highlight-box" data-aos="fade-right">
    <FaAward className="award-icon" />
    <div>
      <h4>1000+ Students Guided</h4>
      <p>
        Successfully helped students secure admissions in top international universities.
      </p>
    </div>
  </div> */}

  {/* EXISTING BOX */}
  {/* <div className="award-box highlight-box" data-aos="fade-left">
    <FaAward className="award-icon" />
    <div>
      <h4>15+ Years of Experience</h4>
      <p>
        Guiding students with trusted expertise for over 15 years in international education.
      </p>
    </div>
  </div> */}

  
  

</div>
{/* BUTTON */}
  {/* <Link to="/about" className="about-btn" data-aos="fade-up">
    More About Us
  </Link> */}


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
