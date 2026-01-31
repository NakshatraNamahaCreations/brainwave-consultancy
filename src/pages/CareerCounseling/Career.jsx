import React from "react";
import "./Career.css";
import { FaChartLine, FaHandPaper } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
import Footer from "../../components/Footer";

export default function Career() {
  return (
    <>
    <div className="career-page">

      {/* HERO */}
      <section className="career-hero">
        <div className="career-container">
          <h1>
            Career Counseling & DMIT Test Center in Bangalore – Brainwave Consultancy
          </h1>
          <p>
            Brainwave Consultancy is a trusted career counseling and DMIT test
            center in Bangalore, Karnataka, helping students, professionals,
            and couples choose the right career path using scientific
            psychometric tests and Dermatoglyphics Multiple Intelligence Test (DMIT).
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

    <h2 data-aos="fade-up">Career Counseling Sessions at Brainwave Consultancy</h2>

    <div className="slider-wrapper">
      <div className="slider-track">
        <img src="./pictures/XD6A0830.JPG.jpeg" alt="Career counseling for students in Bangalore" />
        <img src="./pictures/IMG-20250510-WA0001.jpg.jpeg" alt="DMIT test counseling session" />
        <img src="./pictures/IMG-20250329-WA0005.jpg.jpeg" alt="Career guidance for professionals" />
        <img src="./pictures/IMG-20250510-WA0007.jpg.jpeg" alt="Psychometric career assessment in Bangalore" />
        <img src="./pictures/IMG_4105.JPG.jpeg" alt="career-couseling"/>
        <img src="./pictures/brainwavecounseling_20250414_p_3610215579653156207_1_3610215579653156207.webp" alt="career-couseling"/>
        <img src="./pictures/IMG_4105.JPG.jpeg" alt="career-couseling"/>

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
            Our goal is not just job selection—but long-term career success and satisfaction.
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
            Our certified counselors interpret the results and connect them with
            real career options, courses, and industries.
          </p>
        </div>
      </section>

      {/* DMIT */}
      <section className="career-section alt">
        <div className="career-container">
          <h2 data-aos="fade-up">DMIT Test – Dermatoglyphics Multiple Intelligence Test</h2>
          <p>
            DMIT (Dermatoglyphics Multiple Intelligence Test) is a fingerprint-based
            scientific assessment that reveals a person’s inborn intelligence
            and natural talents.
          </p>

          <ul>
            <li>Fingerprints and brain lobes develop between the 13th–19th week of pregnancy</li>
            <li>Each finger is linked to a specific brain lobe</li>
            <li>DMIT identifies strengths that remain constant throughout life</li>
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
            When conducted and analyzed correctly, DMIT can achieve 90%+ accuracy.
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
  <button className="cta-btn">
    TAKE Psychometric Career Assessment Tests
    <span className="cta-icon">
      <MdPsychology />
    </span>
  </button>

  <button className="cta-btn">
    TAKE DMIT
    <span className="cta-icon">
      <FaHandPaper />
    </span>
  </button>
</div>

      </section>

    </div>
<Footer/>
</>
  );
}
