import "./Bmtu.css";
import { useState } from "react";

import bmtu from "../../assets/brainwave-5.jpg";
import seulogo from "../../assets/seu-logo1.png";
import ewulogo from "../../assets/ewu-logo1.png";
import baulogo from "../../assets/bau-logo1.png";
import dtmulogo from "../../assets/dtmu-logo-1.png";
import geomedilogo from "../../assets/geomedi-logo-1.png";
import ciulogo from "../../assets/ciu-logo-1.png"
import gaulogo from "../../assets/gau-logo-1.png"

const universities = [
  {
    id: 1,
    logo: seulogo,
    name: "SEU – Georgian National University, Tbilisi",
    fee: "₹4.5–5.0 Lakhs / Year",
    image: "./uni-img/seu-uni.webp",
    points: [
      "One of the largest private medical universities in Georgia",
      "850+ Bed University-Affiliated Teaching Hospital",
      "High patient inflow with diverse clinical exposure",
      "Affiliated with multiple government & private hospitals",
      "Strong focus on hands-on clinical training",
      "Modern simulation labs & medical infrastructure",
      "Separate hostels for boys & girls (Indian food available)",
      "500+ Indian students enrolled",
      "Scholarships available based on academic performance"
    ],
  },
  {
    id: 2,
    logo: ewulogo,
    name: "East West University, Tbilisi",
    fee: "Approx. ₹3.8–4.2 Lakhs / Year",
    image: "./uni-img/ew-uni.jpg",
    points: [
      "Well-established private medical university",
      "Clinical training through affiliated hospitals",
      "Good patient exposure during clinical years",
      "Focus on FMGE / NExT-oriented curriculum",
      "Modern laboratories & teaching facilities",
      "Hostel & accommodation support available",
      "Affordable cost of living for Indian students",
    ],
  },
  {
    id: 3,
    logo: baulogo,
    name: "BAU International University, Batumi",
    fee: "Approx. ₹4.5–5.0 Lakhs / Year",
    image: "./uni-img/bau-uni.jpg",
    points: [
      "Renowned European-standard medical university",
      "800+ Bed BAU Teaching Hospital on campus",
      "Strong clinical exposure from early years",
      "Advanced simulation & research labs",
      "Located in Batumi – safe coastal city",
      "Separate hostels for boys & girls",
      "Large Indian student presence",
      "Scholarships available for meritorious students",
    ],
  },
  {
    id: 4,
    logo: seulogo,
    name: "SEU Avicenna Medical Program, Tbilisi",
    fee: "Approx. ₹4.5–5.0 Lakhs / Year",
    image: "./uni-img/seu-uni2.webp",
    points: [
      "Specialized medical faculty under SEU",
      "University-affiliated hospitals for clinical training",
      "High patient exposure aligned with NMC norms",
      "Strong academic & practical balance",
      "English-medium instruction",
      "Hostel & Indian food options available",
      "Scholarships based on academic performance",
    ],
  },
  {
    id: 5,
    logo: geomedilogo,
    name: "Geomedi Medical University, Tbilisi",
    fee: "Approx. ₹4.0–4.3 Lakhs / Year",
    image: "./uni-img/geo-uni.jpg",
    points: [
      "Dedicated medical university with strong clinical focus",
      "Affiliated with multiple hospitals in Tbilisi",
      "Early exposure to practical & clinical training",
      "Modern labs & simulation facilities",
      "Separate hostels for boys & girls",
      "Indian student-friendly environment",
      "Affordable living costs",
    ],
  },
  {
    id: 6,
    logo: dtmulogo,
    name: "David Tvildiani Medical University (DTMU), Tbilisi",
    fee: "Approx. ₹5.5–6.0 Lakhs / Year",
    image: "./uni-img/dtmu-uni.webp",
    points: [
        "One of Georgia’s most academically reputed medical universities",
        "USMLE- and FMGE-oriented curriculum",
         "Clinical training through top affiliated hospitals",
         "Strong emphasis on research & clinical excellence",
         "English-medium education",
         "Limited intake, high academic standards",
         "Scholarships based on academic performance"
    ]
  },
  {
    id: 7,
    logo: ciulogo,
    name: "Caucasus International University (CIU), Tbilisi",
    fee: "Approx. ₹4.0–4.5 Lakhs / Year",
    image: "./uni-img/ciu-uni.jpg",
    points:[
        "Well-known private university with medical faculty",
        "Clinical exposure via affiliated hospitals",
        "Modern labs & teaching infrastructure",
        "Balanced academic & clinical training",
        "Hostel and accommodation support available",
        "Growing Indian student population"
    ]
  },
  {
    id: 8,
    logo: gaulogo,
    name:"GAU – Georgian American University, Tbilisi",
    fee: "Approx. ₹4.2–4.6 Lakhs / Year",
    image: "./uni-img/gau-uni.webp",
    points: [
        "American-style education system",
        "MBBS program aligned with international standards",
        "Clinical training through partner hospitals",
        "Modern medical labs & simulation facilities",
        "Safe campus environment",
        "Indian student support available",
        "Scholarships based on merit"
    ]
  }
];

export default function GeorgiaUni() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Application submitted successfully!");
    setShowForm(false);
  };

  return (
    <>
      {universities.map((uni, index) => (
        <section className="uni-section" key={uni.id}>
          <div className={`uni-container ${index % 2 !== 0 ? "reverse-layout" : ""}`}>
            
            {/* CONTENT */}
            <div className="uni-content">
              <img src={uni.logo} alt={uni.name} className="uni-logo" data-aos="fade-up" />

              <h2 data-aos="fade-up">{uni.name}</h2>

              <p className="uni-fee" data-aos="fade-up">
                University Fee: <span>{uni.fee}</span>
              </p>

              <ul className="uni-points">
                {uni.points.map((point, i) => (
                  <li key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                    ✔ {point}
                  </li>
                ))}
              </ul>

              <div className="uni-actions">
                <button className="btn-primary" onClick={() => setShowForm(true)}>
                  Apply Now
                </button>
                <button className="btn-outline">Download Brochure</button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="uni-image">
              <img src={uni.image} alt={uni.name} />
            </div>
          </div>
        </section>
      ))}

      {/* APPLY POPUP */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ×
            </button>

            <h3>Apply for MBBS in Georgia</h3>
            <p>Fill in your details. Our counsellor will contact you.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />

              <select name="state" required onChange={handleChange} defaultValue="">
                <option value="" disabled>Select State</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Telangana">Telangana</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Punjab">Punjab</option>
              </select>

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                required
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
