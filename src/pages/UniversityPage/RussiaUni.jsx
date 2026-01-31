import "./Bmtu.css";
import { useState } from "react";
import kmstulogo from "../../assets/kmstu-logo.png";
import osmulogo from "../../assets/osmu-logo-1.png";
import vsmulogo from "../../assets/vsmu-logo-1.png";
import asmtlogo from "../../assets/asmu-logo2.png";
import ksmulogo from "../../assets/ksmu-logo1.png";
import rasmlogo from "../../assets/rasm-logo.png";
import msulogo from "../../assets/msu-logo.png"
import sfmslogo from "../../assets/sfms-logo.png";
import spsmlogo from "../../assets/spsm-logo.png";
import ksmslogo from "../../assets/ksmu-logo3.png";
import rbsmlogo from "../../assets/rbsm-logo.png"

const universities = [
  {
    id: 1,
    logo: kmstulogo,
    name: "🇷🇺 Kazan State Medical University – Russia",
    fee: " Approx. ₹4.5–5.5 Lakhs / Year",
    image: "./uni-img/ksmtu-uni.jpg",
    points: [
      "One of Russia’s oldest & most prestigious medical universities",
      "Strong academic reputation with large Indian student community",
      "Government university with WHO & NMC recognition",
      "Excellent clinical exposure through affiliated city hospitals",
      "English-medium MBBS program",
      "Modern labs, research facilities & simulation centers",
      "Separate hostels for boys & girls (Indian food available)",
      "Over 1,000+ Indian students enrolled",
      "Safe city with good connectivity"
    ],
  },
  {
    id: 2,
    logo: osmulogo,
    name: "🇷🇺 Orel State Medical University – Russia",
    fee: " Approx. ₹3.5–4.0 Lakhs / Year",
    image: "/uni-img/osmu-uni.jpg",
    points: [
      " Affordable government medical university",
      "NMC & WHO approved",
      "Popular choice for students with budget constraints",
      "English-medium teaching for international students",
      "Attached government hospitals for clinical training",
      "Well-structured FMGE/NExT preparation support",
      "Indian food & hostel facilities available",
      "Growing Indian student community",
      " Safe and student-friendly city"
    ],
  },
  {
    id: 3,
    logo: vsmulogo,
    name: "🇷🇺 Volgograd State Medical University – Russia",
    fee: "Approx. ₹4.5–5.0 Lakhs / Year",
    image: "./uni-img/vsmu-uni1.jpg",
    points: [
      "One of the top-ranked medical universities in Russia",
      "Widely preferred by Indian & Karnataka students",
      "University-affiliated multi-specialty hospitals",
      "Strong emphasis on clinical & practical training",
      "English-medium MBBS program",
      "Advanced medical labs & simulation facilities",
      "Separate hostels with Indian food options",
      " Excellent academic structure & global recognition",
    ],
  },
  {
    id: 4,
    logo: asmtlogo,
    name: "🇷🇺 Astrakhan State Medical University – Russia",
    fee: " Approx. ₹3.8–4.5 Lakhs / Year",
    image: "./uni-img/asmu-uni.jpg",
    points: [
      "Government medical university with good clinical exposure",
      "NMC & WHO listed",
      "English-medium MBBS course",
      "Teaching hospitals with high patient inflow",
      "Focus on hands-on medical training",
      "Comfortable hostels for international students",
      " Indian food facilities available",
      "Cost-effective living expenses",
      " Supportive environment for Indian students"
    ],
  },
  {
    id: 5,
    logo: ksmulogo,
    name: "🇷🇺 Kuban State Medical University – Russia",
    fee: "Approx. ₹4.0–4.8 Lakhs / Year",
    image: "./uni-img/ksmu-uni.png",
    points: [
      "One of the oldest medical universities in Southern Russia",
      "Recognized by NMC, WHO & international bodies",
      "English-medium instruction for foreign students",
      "Well-equipped university hospitals",
      "Strong faculty & academic infrastructure",
      "Separate hostels for boys & girls",
      "Indian mess facilities available",
      "Warm climate & student-friendly city",
    ],
  },
  {
    id: 6,
    logo: rasmlogo,
    name: "🇷🇺 Altai State Medical University – Russia",
    fee: "Approx. ₹3.8–4.2 Lakhs / Year",
    image: "./uni-img/rasm-uni.webp",
    points: [
      "Known for balanced fees & quality education",
      "Government medical university",
      "English-medium MBBS program",
      "Good teacher–student ratio",
      "University hospitals with practical exposure",
      "Modern classrooms & medical labs",
      "Indian food & hostel facilities available",
      "Affordable living costs",
      "Popular among Indian students"
    ],
  },
  {
    id: 7,
    logo: msulogo,
    name: "🇷🇺 Mari State University – Russia",
    fee: "Approx. ₹3.5–4.0 Lakhs / Year",
    image: "./uni-img/msu-uni.webp",
    points: [
      "Highly preferred for low-cost MBBS in Russia",
      "NMC & WHO approved",
      "English-medium MBBS program",
      "Strong focus on FMGE/NExT-oriented teaching",
      "Attached government hospitals",
      "Indian hostel & mess facilities available",
      "Safe city with a large Indian student population",
      "Good academic support system",
    ],
  },
   {
    id: 8,
    logo: sfmslogo,
    name: "🇷🇺 Sechenov First Moscow State Medical University – Russia",
    fee: "Approx. ₹7.2–7.7 Lakhs / Year (Tuition + Hostel)",
    image: "./uni-img/sfms-uni.webp",
    points: [
      "Russia’s oldest & most prestigious medical university with world-class reputation and research history.",
      "Located in Moscow (capital city) — great exposure & opportunities.",
      "WHO & NMC approved — recognized globally and in India.",
      "English-medium MBBS program with clinical training in top hospitals.",
      "Rich academic legacy with advanced labs and research facilities.",
      "Hostel & accommodation available; Indian food routines typically supported.",
      "Larger Indian student community, strong support system.",
    ],
  },
  {
    id: 9,
    logo: spsmlogo,
    name: "🇷🇺 Saint Petersburg State Medical University – Russia",
    fee: "Approx. ₹3.5–4.2 Lakhs / Year",
    image: "./uni-img/spsm-uni.jpg",
    points: [
      "One of Russia’s top federal medical universities with solid reputation.",
      "Located in Saint Petersburg — historic, cosmopolitan, student-friendly city.",
      "WHO & NMC recognition; English-medium MBBS course.",
      "High-quality clinical exposure through affiliated hospitals with diverse patient load.",
      "Good infrastructure including labs, anatomy halls, libraries.",
      "Separate hostels with Indian and international student mess options.",
      "Moderate cost of living compared to Moscow.",
    ],
  },
  {
    id: 10,
    logo: ksmslogo,
    name: "🇷🇺 Kursk State Medical University – Russia",
    fee: "Approx. ₹4.5–5.5 Lakhs / Year",
    image: "./uni-img/ksmu-uni.webp",
    points: [
      "Well-established federal medical university with strong teaching programs.",
      "English-medium MBBS course including basic sciences & clinical years.",
      "Recognized by NMC & WHO — degree eligible for FMGE/NExT in India.",
      "Modern facilities, labs, and practical training opportunities.",
      "Comfortable hostel accommodation with Indian food options available.",
      "Kursk city offers a safe, student-friendly environment.",
      "Good balance of fee, infrastructure, and exposure.",
    ],
  },
  {
    id: 11,
    logo: rbsmlogo,
    name: "🇷🇺 Bashkir State Medical University – Russia",
    fee: "Approx. ₹3.5–4.7 Lakhs / Year",
    image: "./uni-img/rbsm-uni.png",
    points: [
      "Located in Ufa, Bashkortostan — peaceful, affordable Russian city.",
      "WHO & NMC approved; English-medium MBBS program.",
      "Comprehensive clinical exposure via university hospitals and medical centers.",
      "Modern labs, anatomy halls, and teaching facilities.",
      "Good Indian student support with hostels & Indian food options.",
      "Cost-effective living & study experience compared to Moscow & St. Petersburg.",
    ],
  },
];

export default function RussiaUni() {
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
