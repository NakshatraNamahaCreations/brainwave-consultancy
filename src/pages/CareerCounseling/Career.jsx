import React from "react";
import "./Career.css";
import { FaHandPaper } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
import Footer from "../../components/Footer";
import "../../components/PopupForm.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Career() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://brainwave-consultancy.onrender.com/api/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Enquiry sent successfully!");
        setShowPopup(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send enquiry");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="career-page">
        {/* HERO */}
        <section className="career-hero">
          <div className="career-container">
            <h1>
              Career Counseling & DMIT Test Center in Bangalore – Brainwave
              Consultancy
            </h1>
            <p>
              Brainwave Consultancy is a trusted career counseling and DMIT test
              center in Bangalore, Karnataka, helping students, professionals,
              and couples choose the right career path using scientific
              psychometric tests and Dermatoglyphics Multiple Intelligence Test
              (DMIT).
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="career-section">
          <div className="career-container">
            <p>
              Choosing a career can be confusing in today’s competitive world.
              Whether you are a student after 10th or 12th, a graduate, or a
              working professional planning a career change, expert career
              guidance can give you clarity and confidence.
            </p>
          </div>
        </section>

        {/* CAREER COUNSELING SLIDER */}
        <section className="career-section career-slider">
          <div className="career-container">
            <h2 data-aos="fade-up">
              Career Counseling Sessions at Brainwave Consultancy
            </h2>

            <div className="slider-wrapper">
              <div className="slider-track">
                <img
                  src="./pictures/XD6A0830.JPG.jpeg"
                  alt="Career counseling for students in Bangalore"
                />
                <img
                  src="./pictures/IMG-20250510-WA0001.jpg.jpeg"
                  alt="DMIT test counseling session"
                />
                <img
                  src="./pictures/IMG-20250329-WA0005.jpg.jpeg"
                  alt="Career guidance for professionals"
                />
                <img
                  src="./pictures/IMG-20250510-WA0007.jpg.jpeg"
                  alt="Psychometric career assessment in Bangalore"
                />
                <img
                  src="./pictures/IMG_4105.JPG.jpeg"
                  alt="career-couseling"
                />
                <img
                  src="./pictures/brainwavecounseling_20250414_p_3610215579653156207_1_3610215579653156207.webp"
                  alt="career-couseling"
                />
                <img
                  src="./pictures/IMG_4105.JPG.jpeg"
                  alt="career-couseling"
                />

                {/* duplicate for smooth loop */}
                <img src="./pictures/career1.jpg" alt="" />
                <img src="./pictures/career2.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="career-section alt">
          <div className="career-container">
            <h2 data-aos="fade-up">Career Counseling Services in Bangalore</h2>
            <p>
              Our career counseling services help individuals identify their
              strengths, interests, aptitude, and personality to make informed
              career decisions.
            </p>

            <h3>We offer career guidance for:</h3>
            <ul>
              <li>School students (Class 8–12)</li>
              <li>Career guidance after 10th & 12th</li>
              <li>College students & graduates</li>
              <li>Working professionals & career switchers</li>
              <li>Couples seeking career alignment</li>
            </ul>

            <p className="highlight">
              Our goal is not just job selection—but long-term career success
              and satisfaction.
            </p>
          </div>
        </section>

        {/* PSYCHOMETRIC */}
        <section className="career-section">
          <div className="career-container">
            <h2 data-aos="fade-up">Psychometric Career Assessment Tests</h2>
            <p>
              Psychometric tests are an important part of professional career
              guidance in Bangalore. These tests scientifically measure:
            </p>

            <ul>
              <li>Aptitude & abilities</li>
              <li>Interests & personality traits</li>
              <li>Learning & working styles</li>
            </ul>

            <p>
              Our certified counselors interpret the results and connect them
              with real career options, courses, and industries.
            </p>
          </div>
        </section>

        {/* DMIT */}
        <section className="career-section alt">
          <div className="career-container">
            <h2 data-aos="fade-up">
              DMIT Test – Dermatoglyphics Multiple Intelligence Test
            </h2>
            <p>
              DMIT (Dermatoglyphics Multiple Intelligence Test) is a
              fingerprint-based scientific assessment that reveals a person’s
              inborn intelligence and natural talents.
            </p>

            <ul>
              <li>
                Fingerprints and brain lobes develop between the 13th–19th week
                of pregnancy
              </li>
              <li>Each finger is linked to a specific brain lobe</li>
              <li>
                DMIT identifies strengths that remain constant throughout life
              </li>
            </ul>

            <p className="note">
              DMIT is not astrology or palmistry. It is based on brain science,
              genetics, and Dr. Howard Gardner’s Multiple Intelligence Theory.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="career-section">
          <div className="career-container">
            <h2 data-aos="fade-up">Benefits of DMIT Test</h2>
            <ul>
              <li>Identifies natural intelligence & learning style</li>
              <li>Helps students choose the right stream & career</li>
              <li>Supports professionals in career change decisions</li>
              <li>Improves academic & professional performance</li>
              <li>Builds self-confidence & clarity</li>
            </ul>

            <p className="highlight">
              When conducted and analyzed correctly, DMIT can achieve 90%+
              accuracy.
            </p>
          </div>
        </section>

        {/* MULTIPLE INTELLIGENCE */}
        <section className="career-section alt">
          <div className="career-container">
            <h2 data-aos="fade-up">Multiple Intelligence Explained</h2>
            <p>
              As per Dr. Howard Gardner, every individual has a combination of 9
              Multiple Intelligences, including:
            </p>
            <p>
              Logical, Linguistic, Visual, Kinesthetic, Musical, Interpersonal,
              Intrapersonal, Naturalist, and Existential intelligence.
            </p>
            <p>
              DMIT reveals the dominant intelligences, helping align education
              and careers with natural strengths.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="career-section">
          <div className="careers-container">
            {/* LEFT CONTENT */}
            <div className="career-content">
              <h2>Why Choose Brainwave Consultancy?</h2>

              <ul className="checklist">
                <li data-aos="fade-up" data-aos-delay="0">
                  Karnataka’s trusted career counseling center
                </li>

                <li data-aos="fade-up" data-aos-delay="150">
                  Certified career counselors
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  Scientific DMIT & psychometric assessments
                </li>

                <li data-aos="fade-up" data-aos-delay="450">
                  Guidance for students, professionals & couples
                </li>

                <li data-aos="fade-up" data-aos-delay="600">
                  Located in Bangalore, Karnataka
                </li>
              </ul>
            </div>

            {/* RIGHT VIDEO */}
            <div className="career-video">
              <video
                src="./pictures/VID-20250921-WA0020(1) (1).mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="career-cta">
          <div className="career-container cta-grid">
            <button className="cta-btn" onClick={openPopup}>
              TAKE Psychometric Career Assessment Tests
              <span className="cta-icon">
                <MdPsychology />
              </span>
            </button>

            <button className="cta-btn" onClick={openPopup}>
              TAKE DMIT
              <span className="cta-icon">
                <FaHandPaper />
              </span>
            </button>
          </div>
        </section>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          {/* CLOSE ICON */}
          <button className="popup-close-btn" onClick={closePopup}>
            <FaTimes />
          </button>

          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <h2>Enquire Now</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
    value={formData.phone}
    onChange={handleChange}
  />

              <select required defaultValue=""   name="university"
    value={formData.university}
    onChange={handleChange}>
                <option value="" disabled>
                  Select University
                </option>
                <option value="uni1">
                  Buon Ma Thout University (BTU), Vietnum
                </option>
                <option value="uni2">
                  Nam Can Tho University (NCTU), Vietnam
                </option>
                <option value="uni3">Duy Tan University (DTU), Vietnam</option>
                <option value="uni4">Dong A University (DAU), Vietnam</option>
                <option value="uni5">VTT University, Vietnam</option>
                <option value="uni6">
                  SEU – Georgian National University, Tbilisi, Georgia
                </option>
                <option value="uni7">
                  East West University, Tbilisi, Georgia
                </option>
                <option value="uni8">
                  BAU International University, Batumi, Georgia
                </option>
                <option value="uni9">
                  SEU Avicenna Medical Program, Tbilisi, Georgia
                </option>
                <option value="uni10">
                  Geomedi Medical University, Tbilisi, Georgia
                </option>
                <option value="uni11">
                  David Tvildiani Medical University (DTMU), Tbilisi, Georgia
                </option>
                <option value="uni12">
                  Caucasus International University (CIU), Tbilisi, Georgia
                </option>
                <option value="uni13">
                  GAU – Georgian American University, Tbilisi, Georgia
                </option>
                <option value="uni14">
                  Tashkent Medical University – Termez Branch, Uzbekistan
                </option>
                <option value="uni15">
                  Samarkand State Medical University, Uzbekistan
                </option>
                <option value="uni16">
                  Bukhara State Medical University, Uzbekistan
                </option>
                <option value="uni17">
                  Andijan State Medical University, Uzbekistan
                </option>
                <option value="uni18">
                  Nobel Medical College & Teaching Hospital, Biratnagar – Nepal
                </option>
                <option value="uni19">
                  Birat Medical College & Teaching Hospital, Biratnagar – Nepal
                </option>
                <option value="uni20">
                  KMC – Kathmandu Medical College, Nepal
                </option>
                <option value="uni21">
                  Patan Academy of Health Sciences (PAHS), Lalitpur – Nepal
                </option>
                <option value="uni22">
                  BP Koirala Institute of Health Sciences (BPKIHS), Dharan –
                  Nepal
                </option>
                <option value="uni23">
                  Janaki Medical College & Teaching Hospital, Janakpur – Nepal
                </option>
                <option value="uni24">
                  🇷🇺 Kazan State Medical University – Russia
                </option>
                <option value="uni25">
                  🇷🇺 Orel State Medical University – Russia
                </option>
                <option value="uni26">
                  🇷🇺 Volgograd State Medical University – Russia
                </option>
                <option value="uni27">
                  🇷🇺 Astrakhan State Medical University – Russia
                </option>
                <option value="uni28">
                  🇷🇺 Kuban State Medical University – Russia
                </option>
                <option value="uni29">
                  🇷🇺 Altai State Medical University – Russia
                </option>
                <option value="uni30">🇷🇺 Mari State University – Russia</option>
                <option value="uni31">
                  🇷🇺 Sechenov First Moscow State Medical University – Russia
                </option>
                <option value="uni32">
                  🇷🇺 Saint Petersburg State Medical University – Russia
                </option>
                <option value="uni33">
                  🇷🇺 Kursk State Medical University – Russia
                </option>
                <option value="uni34">
                  🇷🇺 Bashkir State Medical University – Russia
                </option>
              </select>

              <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
  />

              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
