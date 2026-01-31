import React from "react";
import "./WhyChooseUs.css";
import {
  FaUserGraduate,
  FaUniversity,
  FaClipboardCheck,
  FaHandshake,
  FaPassport,
  FaChartLine,
  FaGraduationCap,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* HEADER */}
        <div className="why-header" data-aos="fade-up">
          <span className="why-subtitle"><FaGraduationCap size={22}/> Why Choose Brainwave Consultancy</span>
          <h2>Your Trusted Partner in Global Education</h2>
          <p>
            We go beyond applications. Our focus is on guiding students with
            clarity, confidence, and long-term success in international education.
          </p>
        </div>

        {/* FEATURES */}
        <div className="why-grid" data-aos="fade-in">

          <div className="why-item">
            <div className="why-icon"><FaUserGraduate /></div>
            <h3>Specialized focus on MBBS abroad admissions</h3>
            {/* <p>
              Our counselors bring years of international education expertise,
              helping students make informed academic and career decisions.
            </p> */}
          </div>

          <div className="why-item">
            <div className="why-icon"><FaUniversity /></div>
            <h3>10+ years of experience in education & medical admissions</h3>
            {/* <p>
              We work closely with reputed universities worldwide, opening doors
              to recognized institutions and diverse study destinations.
            </p> */}
          </div>

          <div className="why-item highlight">
            <div className="why-icon"><FaClipboardCheck /></div>
            <h3> Guided 1,200+ students across India</h3>
            {/* <p>
              Every student is unique. We carefully match academic profiles,
              interests, and budgets with the right universities and programs.
            </p> */}
          </div>

          <div className="why-item">
            <div className="why-icon"><FaHandshake /></div>
            <h3>Strong expertise in NMC regulations, FMGE/NExT pathways</h3>
            {/* <p>
              Clear communication, honest guidance, and step-by-step application
              support ensure a stress-free admission experience.
            </p> */}
          </div>

          <div className="why-item">
            <div className="why-icon"><FaPassport /></div>
            <h3>Ethical counseling – no false promises, no hidden facts</h3>
            {/* <p>
              From documentation to interview preparation and pre-departure
              guidance, we support students at every stage.
            </p> */}
          </div>

          <div className="why-item">
            <div className="why-icon"><FaChartLine /></div>
            <h3>Personalized counseling for students & parents</h3>
            {/* <p>
              Our structured approach and experience result in a strong visa
              approval record across multiple countries.
            </p> */}
          </div>

          <div className="why-item">
            <div className="why-icon"><FaHeadset/></div>
            <h3>Continued support even after students reach campus</h3>
            {/* <p>
              Our structured approach and experience result in a strong visa
              approval record across multiple countries.
            </p> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
