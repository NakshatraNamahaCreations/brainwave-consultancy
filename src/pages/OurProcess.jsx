"use client";
import React from "react";
import "./OurProcess.css";
import {
  FaSearch,
  FaPuzzlePiece,
  FaLightbulb,
  FaTasks,
  FaGraduationCap,
} from "react-icons/fa";

const steps = [
  {
    title: "Academic counseling & MBBS university selection based on eligibility, budget, and NMC compliance",
    //desc: "We understand your goals, academic background, and study abroad aspirations through in-depth counseling.",
    icon: <FaTasks />,
  },
  {
    title: "Application preparation, document verification & submission",
   // desc: "Our experts shortlist universities and courses aligned with your profile, budget, and career goals.",
    icon: <FaTasks />,
  },
  {
    title: "Admission processing, offer letters & university invitation letters",
    //desc: "We manage applications, documentation, SOPs, and submissions to international universities.",
    icon: <FaTasks />,
  },
  {
    title: "Visa documentation, guidance & filing",
    //desc: "From offer letters to visa guidance and interview prep, we ensure a smooth transition abroad.",
    icon: <FaTasks />,
  },
  {
    title: "Police Clearance Certificate (PCC) coordination",
    //desc: "From offer letters to visa guidance and interview prep, we ensure a smooth transition abroad.",
    icon: <FaTasks />,
  },
  {
    title: "Embassy documentation & submission assistance",
    //desc: "From offer letters to visa guidance and interview prep, we ensure a smooth transition abroad.",
    icon: <FaTasks />,
  },
  {
    title: "Flight ticket arrangements",
    //desc: "From offer letters to visa guidance and interview prep, we ensure a smooth transition abroad.",
    icon: <FaTasks />,
  },
   {
    title: "Pre-departure briefing & orientation for students and parents",
    //desc: "From offer letters to visa guidance and interview prep, we ensure a smooth transition abroad.",
    icon: <FaTasks />,
  },
  {
    title: "Travel assistance",
    //desc: "From offer letters to visa guidance and interview prep, we ensure a smooth transition abroad.",
    icon: <FaTasks />,
  },
  {
    title: "Hostel arrangement & initial accommodation support",
    //desc: "From offer letters to visa guidance and interview prep, we ensure a smooth transition abroad.",
    icon: <FaTasks />,
  },
];

const OurProcess = () => {
  return (
    <section className="op-section">
      <div className="op-container">

        {/* HEADER */}
        <div className="op-header" data-aos="fade-up">
          <span className="op-kicker"><FaGraduationCap size={22}/> What We Do</span>
          <h2>How We Guide You Step by Step</h2>
          <p>
            A transparent and structured approach designed to support students
            at every stage of their international education journey.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="op-steps-wrapper">
          <div className="op-steps-line" />

      <div className="op-flow-grid">

  {/* LEFT COLUMN (4 STEPS) */}
 <div className="op-flow">
  {steps.slice(0, 5).map((step, index) => {
    const stepNumber = index + 1;

    return (
      <div className="op-flow-item" key={stepNumber}>
        <div
          className="op-flow-icon"
          data-aos="fade-right"
          data-aos-delay={index * 150}
        >
          <span className="op-flow-number">
            {stepNumber < 10 ? `0${stepNumber}` : stepNumber}
          </span>
          {step.icon}
        </div>

        <div
          className="op-flow-card"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <h3>{step.title}</h3>
          {step.desc && <p>{step.desc}</p>}
        </div>
      </div>
    );
  })}
</div>

<div className="op-flow">
  {steps.slice(5, 10).map((step, index) => {
    const stepNumber = index + 6;

    return (
      <div className="op-flow-item" key={stepNumber}>
        <div
          className="op-flow-icon"
          data-aos="fade-right"
          data-aos-delay={index * 150}
        >
          <span className="op-flow-number">
            {stepNumber < 10 ? `0${stepNumber}` : stepNumber}
          </span>
          {step.icon}
        </div>

        <div
          className="op-flow-card"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <h3>{step.title}</h3>
          {step.desc && <p>{step.desc}</p>}
        </div>
      </div>
    );
  })}
</div>


</div>



        </div>
      </div>
    </section>
  );
};

export default OurProcess;
