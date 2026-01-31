import "./Bmtu.css";
import bmtu from "../../assets/brainwave-5.jpg"
import bmtulogo from "../../assets/bmtu-logo.webp"
import ApplyPopup from "../../components/ApplyForm";
import { useState } from "react";
import nctulogo from "../../assets/nctu-logo.png"
import dtulogo from "../../assets/dtu-logo2.png"
import daulogo from "../../assets/dau-logo.png"
import vttlogo from "../../assets/vtt-logo-1.png"

const universities = [
  {
    id: 1,
    logo: bmtulogo,
    name: "Buon Ma Thout University (BTU)",
    fee: "3.8 Lakhs / Year",
    image: "./uni-img/bmu-uni.jpg",
    points: [
      "Largest Private Medical University in Central Highlands Region",
      "500+-bed Multi-Specialty Hospital on Campus",
      "33,000+ Outpatient Visits per Month",
      "20,000+ Surgeries Annually in University Hospital",
      "Hostels Separate for Boys & Girls with Indian Food",
      "Around 120 Indian Students Enrolled",
      "Simulation Lab for Hands-On Training",
      "Scholarships Awarded on Academic Performance",
    ],
  },
  {
    id: 2,
    logo: nctulogo,
    name: "Nam Can Tho University (NCTU), Vietnam",
    fee: "Approx. ₹3.6–3.9 Lakhs / Year",
    image: "./uni-img/nam-uni.jpg",
    points: [
      "Leading Private Medical University in the Mekong Delta Region",
      "700+ Bed Multi-Specialty Teaching Hospital attached to the university",
      "High Patient Inflow with government & private case exposure",
      "Affiliated with Multiple Government & Private Hospitals",
      "15,000+ Surgeries Annually in affiliated hospitals",
      "Separate Hostels for Boys & Girls with Indian food options available",
      "Advanced Simulation & Skills Lab for hands-on clinical training",
      "Scholarships Available based on academic performance",
    ],
  },
  {
    id: 3,
    logo: dtulogo,
    name: "Duy Tan University (DTU), Vietnam",
    fee: "Approx. ₹4.0–4.5 Lakhs / Year",
    image: "./uni-img/dtu-uni1.jpg",
    points: [
        "One of the Largest Private Universities in Central Vietnam",
        "700+ Bed Affiliated Multi-Specialty Hospitals for clinical training",
        "High Patient Exposure through government & private hospitals",
        "Affiliated with Multiple Government Hospitals in Da Nang region",
        "20,000+ Surgeries Annually across affiliated hospitals",
        "Separate Hostels for Boys & Girls with Indian food availability",
        "120+ Indian Students currently enrolled",
        "Advanced Simulation Labs & Modern Medical Infrastructure",
        "Merit-Based Scholarships available"
    ]
  },
  {
    id: 4,
    logo: daulogo,
    name: "Dong A University (DAU), Vietnam",
    fee: "Approx. ₹3.5–3.8 Lakhs / Year",
    image: "./uni-img/dau-uni.jpg",
    points: [
        "Well-Established Private Medical University in Central Vietnam",
        "500+ Bed Teaching Hospital & affiliated clinical centers",
        "Strong Clinical Exposure with diverse patient cases",
        "Affiliated with Government & Private Hospitals",
        "15,000+ Surgeries Annually in associated hospitals",
        "Separate Hostels for Boys & Girls with Indian food options",
        "100+ Indian Students enrolled",
        "Clinical Skills & Simulation Labs for hands-on training",
        "Scholarships Available based on academic performance"
    ]
  },
  {
    id: 5,
    logo: vttlogo,
    name:"VTT University, Vietnam",
    fee:"Approx. ₹3.5–4.0 Lakhs / Year",
    image: './uni-img/vtt-uni.jpg',
    points: [
        "Well-established private medical university in Vietnam",
        "University-affiliated teaching hospital with strong patient inflow",
        "High clinical exposure across multiple specialties",
        "Affiliated with several government & private hospitals",
        "Focus on hands-on practical training from early years",
        "Modern simulation labs & medical infrastructure",
        "Separate hostels for boys & girls, Indian food available nearby",
        "100+ Indian students currently enrolled",
        "Safe, student-friendly city with low cost of living",
        "Scholarships available based on academic performance"
    ]
  }
];


  export default function Bmtu() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
       {universities.map((uni, index) => (
        <section className="uni-section" key={uni.id}>
          <div
            className={`uni-container ${
              index % 2 !== 0 ? "reverse-layout" : ""
            }`}
          >
            {/* CONTENT */}
            <div className="uni-content" >
              <img src={uni.logo} alt={uni.name} className="uni-logo" data-aos="fade-up"/>

              <h2 data-aos="fade-up">{uni.name}</h2>

              <p className="uni-fee" data-aos="fade-up">
                University Fee: <span>{uni.fee}</span>
              </p>

              <ul className="uni-points">
                {uni.points.map((point, i) => (
                  <li key={i} data-aos="fade-up"  data-aos-delay={index * 150}>✔ {point}</li>
                ))}
              </ul>

              <div className="uni-actions">
                <button
                  className="btn-primary"
                  onClick={() => setShowForm(true)}
                >
                  Apply Now
                </button>

                <button className="btn-outline">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="uni-image">
              <img src={uni.image} alt={uni.name} />
            </div>
          </div>
        </section>
      ))}

      {showForm && <ApplyPopup onClose={() => setShowForm(false)} />}
    </>
  );
}