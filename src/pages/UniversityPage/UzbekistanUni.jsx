import "./Bmtu.css";
import { useState } from "react";

import bmtu from "../../assets/brainwave-5.jpg";
import tmulogo from "../../assets/tmu-logo-1.png";
import ssmulogo from "../../assets/ssmu-logo.png";
import bsmulogo from "../../assets/bsmu-logo-1.png";
import asmulogo from "../../assets/asmu-logo-1.png";


const universities = [
  {
    id: 1,
    logo: tmulogo,
    name: "Tashkent Medical University – Termez Branch, Uzbekistan",
    fee: " Approx. ₹3.5–4.0 Lakhs / Year",
    image: "./uni-img/tmu-uni.jpg",
    points: [
      "Government medical university branch under Tashkent Medical University",
      "Located in Termez city with strong regional patient inflow",
      "University-affiliated teaching hospitals for clinical training",
      "High exposure to government hospital cases",
      "Early emphasis on practical & clinical learning",
      "Modern medical labs & simulation facilities",
      "Hostel facilities for boys & girls",
      "Indian student-friendly environment",
      "Scholarships available based on academic performance"
    ],
  },
  {
    id: 2,
    logo: ssmulogo,
    name: "Samarkand State Medical University, Uzbekistan",
    fee: " Approx. ₹3.8–4.2 Lakhs / Year",
    image: "/uni-img/ssmu-uni.webp",
    points: [
      "One of the oldest and most reputed government medical universities in Uzbekistan",
      "Large university-affiliated teaching hospitals",
      "Very high patient inflow (government hospital level)",
      "Strong clinical exposure from early years",
      "Modern laboratories, research centers & simulation labs",
      "Separate hostels for boys & girls",
      "Growing Indian student community",
      "Safe, student-friendly historic city",
      "Scholarships available for meritorious students"
    ],
  },
  {
    id: 3,
    logo: bsmulogo,
    name: "Bukhara State Medical University, Uzbekistan",
    fee: "Approx. ₹3.6–4.0 Lakhs / Year",
    image: "./uni-img/btm-uni.webp",
    points: [
      "Well-established government medical university",
      "Affiliated with multiple government teaching hospitals",
      "High patient exposure across specialties",
      "Strong focus on hands-on clinical training",
      "Modern medical labs & skill-based learning facilities",
      "Hostel accommodation available for international students",
      "Affordable cost of living",
      "Indian student support available",
      "Merit-based scholarships"
    ],
  },
  {
    id: 4,
    logo: asmulogo,
    name: "Andijan State Medical University, Uzbekistan",
    fee: " Approx. ₹3.5–3.9 Lakhs / Year",
    image: "./uni-img/asmi-uni.png",
    points: [
      "Recognized government medical university",
      "University-affiliated hospitals with strong patient flow",
      "Early clinical exposure through government hospitals",
      "Emphasis on practical-oriented medical education",
      "Modern classrooms, labs & simulation facilities",
      "Separate hostel facilities for boys & girls",
      "Safe city environment for international students",
      "Affordable living expenses",
      "Scholarships based on academic performance"
    ],
  }
];

export default function UzbekistanUni() {
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

            <h3>Apply for MBBS in Uzbekistan</h3>
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
