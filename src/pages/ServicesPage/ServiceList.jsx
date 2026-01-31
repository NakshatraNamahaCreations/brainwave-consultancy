import React from "react";
import "./ServiceList.css";
import {
  FaUniversity,
  FaPassport,
  FaBriefcase,
  FaGlobe,
} from "react-icons/fa";

// 👉 IMPORT IMAGES
import admissionsImg from "../../assets/brainwave-1.jpg";
import visaImg from "../../assets/brainwave-2.png";
import careerImg from "../../assets/brainwave-3.png";
import globalImg from "../../assets/brainwave-4.png";

const services = [
  {
    icon: <FaUniversity />,
    title: "Admissions Support",
    description: [
      "Admissions at Brainwave Consultancy go beyond application submission. We help students choose universities and courses that align with their academic background, career goals, and long-term aspirations.",
      "Our approach focuses on clarity, suitability, and realistic outcomes, ensuring students apply to institutions where they can truly succeed.",
    ],
    points: [
      "University & course shortlisting",
      "Application & documentation guidance",
      "SOP and profile review",
      "Offer letter & scholarship assistance",
    ],
    image: admissionsImg,
  },
  {
    icon: <FaPassport />,
    title: "Visa Assistance",
    description: [
      "Visa approval is a critical milestone in the study abroad journey. Our visa support is structured, transparent, and aligned with country-specific regulations.",
      "We ensure students and parents are well-prepared, minimizing stress and avoiding last-minute issues.",
    ],
    points: [
      "Visa documentation support",
      "Financial & compliance checks",
      "Interview preparation",
      "Application filing & tracking",
    ],
    image: visaImg,
  },
  {
    icon: <FaBriefcase />,
    title: "Career Support",
    description: [
      "Career decisions shape a student’s future beyond admission. Our career guidance is designed to help students understand themselves better before choosing a path.",
      "We rely on aptitude, self-awareness, and market relevance — not trends or external pressure.",
    ],
    points: [
      "Career counseling & guidance",
      "Psychometric & aptitude assessments",
      "DMIT analysis",
      "Post-study career planning",
    ],
    image: careerImg,
  },
  {
    icon: <FaGlobe />,
    title: "Global Services",
    description: [
      "Our responsibility does not end with admission or visa approval. We continue to support students as they transition to life abroad.",
      "From pre-departure preparation to campus arrival, we ensure a smooth and confident start.",
    ],
    points: [
      "Pre-departure orientation",
      "Accommodation & travel assistance",
      "Insurance & on-arrival support",
      "Continued student assistance",
    ],
    image: globalImg,
  },
];

const ServiceList = () => {
  return (
    <section className="services-page">
      <div className="services-wrapper">

        {/* PAGE INTRO */}
        <div className="services-hero">
          <h1>Our Services</h1>
          <p>
            Brainwave Consultancy provides structured, ethical, and student-focused
            guidance at every stage of the global education journey.
          </p>
        </div>

        {/* SERVICES */}
        {services.map((service, index) => (
          <div className="service-chapter" key={index}>
            <div className="service-header">
              <div className="service-icon" data-aos="fade-up">{service.icon}</div>
              <h2 data-aos="fade-up">{service.title}</h2>
               {/* ✅ SERVICE IMAGE */}
            <div className="service-image" data-aos="fade-in">
              <img src={service.image} alt={service.title} />
            </div>
            </div>

           

            <div className="service-body">
              {service.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ServiceList;
