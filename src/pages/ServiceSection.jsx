import React, { useState } from "react";
import "./ServiceSection.css";
import { FaUserTie, FaEye, FaBullseye, FaGraduationCap } from "react-icons/fa";


const tabs = [
  { id: "founder", label: "About the Founder", icon: <FaUserTie /> },
  { id: "vision", label: "Our Vision", icon: <FaEye /> },
  { id: "mission", label: "Our Mission", icon: <FaBullseye /> },
];

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("founder");

  return (
    <section className="services-section about-tabs">
      <div className="services-container">

        {/* LEFT PANEL */}
        <div className="services-left">
          <span className="service-subtitle">
            <FaGraduationCap size={20} /> ABOUT FOUNDER
          </span>

          <h2>Who We Are & What We Stand For</h2>

          <p>
            Brainwave Consultancy is built on ethical guidance, transparency,
            and long-term student success. Our approach focuses on clarity,
            confidence, and informed decision-making.
          </p>

          <div className="founder-image-wrap">
            <img src="./pictures/DSC_6937.JPG.jpeg" alt="Lavanya – Founder" />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="services-right">

          {/* TABS */}
          <div className="services-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="about-tab-content">

            {activeTab === "founder" && (
              <div className="about-con">
                <h3>Lavanya – Founder, Brainwave Consultancy</h3>

                <p>
                  Lavanya, Founder of Brainwave Consultancy, is a seasoned Career Counselor and Education Consultant with an MBA and over a decade of hands-on experience in guiding students and parents across India.
                </p>

                <p>
                  She has worked extensively in management and engineering admissions and has led admission processes across multiple campuses, giving her deep insight into institutional systems, student challenges, and admission realities.
                </p>

                <p>
                  Lavanya is a Certified Career Coach (ICC) and is professionally trained in:
                    <ul>
                      <li>Psychometric Assessments</li>
                      <li>DMIT (Dermatoglyphics Multiple Intelligence Test)</li>
                      <li>Study Skills & Learning Strategies</li>
                    </ul>
                </p>

                <p>
                 Her passion lies in helping students discover their true potential and make career decisions based on data, self-awareness, and market relevance—not pressure or trends.
                </p>

                <p>Having personally guided 1,200+ students, especially in MBBS abroad admissions, Lavanya is known for her honest advice, clarity-driven approach, and strong parent trust.</p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="about-con">
                <h3>Our Vision</h3>
                <p>
                  To be a trusted name in career counseling and overseas education by setting benchmarks in ethical guidance, transparency, and student success.

                </p>
              </div>
            )}

            {activeTab === "mission" && (
              <div className="about-con">
                <h3>Our Mission</h3>
                <p>To empower students with clarity, confidence, and correct information so they can make career choices that are sustainable, fulfilling, and aligned with their true potential.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
