import "./Bmtu.css";
import { useState } from "react";

import bmtu from "../../assets/brainwave-5.jpg";
import nmclogo from "../../assets/nmc-logo.png";
import bmclogo from "../../assets/bmc-logo.png";
import kmclogo from "../../assets/kmc-logo-1.png";
import pahslogo from "../../assets/pahs-logo-1.png";
import bpkinlogo from "../../assets/bpkin-logo.png";
import jmclogo from "../../assets/jmc-logo-1.png"

const universities = [
  {
    id: 1,
    logo: nmclogo,
    name: "Nobel Medical College & Teaching Hospital, Biratnagar – Nepal",
    fee: "Approx. ₹45–50 Lakhs (Total Course Fee)",
    image: "./uni-img/nobel-uni.jpg",
    points: [
      "One of the leading private medical colleges in Nepal",
      "900+ Bed Multi-Specialty Teaching Hospital on campus",
      "Very high patient inflow from eastern Nepal & bordering Indian regions",
      "Strong clinical exposure from early years",
      "Fully equipped medical labs & modern infrastructure",
      "Separate hostels for boys & girls",
      "Indian food available in campus/nearby",
      "Large number of Indian students enrolled",
      "English-medium MBBS program",
      "Safe, student-friendly city environment"
    ],
  },
  {
    id: 2,
    logo: bmclogo,
    name: "Birat Medical College & Teaching Hospital, Biratnagar – Nepal",
    fee: " Approx. ₹40–45 Lakhs (Total Course Fee)",
    image: './uni-img/bmc-uni1.jpeg',
    points: [
      "Well-established private medical college affiliated with a Nepalese university",
      "800+ Bed Teaching Hospital attached",
      "High patient exposure across major specialties",
      "Strong focus on hands-on clinical training",
      "Modern labs, skill labs & simulation facilities",
      "Hostel accommodation for boys & girls",
      "Indian student-friendly environment",
      "Affordable living costs compared to metro cities",
      "Scholarships / fee concessions subject to university norms"
    ],
  },
  {
    id: 3,
    logo: kmclogo,
    name: "KMC – Kathmandu Medical College, Nepal",
    fee: "₹50–55 Lakhs (Total Course Fee)",
    image: "./uni-img/kmc-uni1.jpg",
    points: [
      "One of Nepal’s most reputed medical colleges",
      "Located in Kathmandu – capital city",
      "700+ Bed Multi-Specialty Teaching Hospital",
      "Excellent patient inflow and diverse clinical cases",
      "Strong academic & clinical balance",
      "Modern laboratories & teaching facilities",
      "Separate hostels for boys & girls",
      "Large Indian student presence",
      "High FMGE / NExT preparation advantage due to similar curriculum",
      "Safe and well-connected city"
    ],
  },
  {
    id: 4,
    logo: pahslogo,
    name: "Patan Academy of Health Sciences (PAHS), Lalitpur – Nepal",
    fee: " Approx. ₹45–50 Lakhs (Total Course Fee)",
    image: "./uni-img/pahs-uni.webp",
    points: [
      "Leading government-affiliated medical college in Nepal",
      "Teaching hospitals in Lalitpur and surrounding regions",
      "Strong focus on community health & rural medicine",
      "Excellent clinical exposure with real patient cases",
      "Modern labs, simulation facilities & skill training",
      "Hostels for boys & girls",
      "English-medium MBBS program",
      "Growing Indian student community",
      "Safe, student-friendly environment"
    ],
  },
  {
    id: 5,
    logo: bpkinlogo,
    name: "BP Koirala Institute of Health Sciences (BPKIHS), Dharan – Nepal",
    fee: " Approx. ₹50–55 Lakhs (Total Course Fee)",
    image: './uni-img/bp-uni.webp',
    points:[
        "One of Nepal’s top government medical universities",
        "Affiliated multi-specialty teaching hospitals with high patient inflow",
        "Strong hands-on clinical training from early years",
        "Advanced medical labs & modern teaching facilities",
        "Separate hostels for boys & girls",
        "Large Indian student presence",
        "FMGE/NExT preparation advantage due to NMC-compliant curriculum",
        "Safe & culturally similar environment for Indian students"
    ]
},
{
    id: 6,
    logo: jmclogo,
    name: "Janaki Medical College & Teaching Hospital, Janakpur – Nepal",
    fee:"Approx. ₹40–45 Lakhs (Total Course Fee)",
    image: "./uni-img/jmc-uni1.png",
    points: [
        "Well-established private medical college in Nepal",
        "500+ Bed Teaching Hospital attached",
        "High patient exposure across clinical specialties",
        "Strong emphasis on practical & hands-on training",
        "Modern labs & simulation facilities",
        "Hostels for boys & girls (Indian food available)",
        "Growing Indian student community",
        "Affordable living costs"
    ]
}
];

export default function NepalUni() {
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
                {/* <button className="btn-outline">Download Brochure</button> */}
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

            <h3>Apply for MBBS in Nepal</h3>
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
