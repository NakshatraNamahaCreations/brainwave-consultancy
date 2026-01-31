import React from "react";
import "./LegalPages.css";
import Footer from "../components/Footer";

const Disclaimer = () => {
  return (
    <>
      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-container">
          <h1>Disclaimer</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="legal-content">
        <div className="legal-container">
            <p>The information and services provided by Brainwave Consultancy are for educational, counselling, and informational purposes only.</p>

          <h2>1.  Not an official authority</h2>
          <p>
            We are a private education consultancy.
          </p>
          <p>We are not affiliated with NMC, MCC, KEA, NTA, NMC or embassies, universities, or any government body unless explicitly stated.</p>

          <h2>2. No guarantees</h2>
          <p>
           We do not guarantee admission, seat allotment, scholarships, visa approval, or any specific outcome.<br/>Final decisions are made solely by universities, authorities, and embassies.
          </p>

          <h2>3. Accuracy of information</h2>
          <p>
          We strive to keep all information accurate and updated. However, fees, eligibility, recognition status, cut-offs, and rules may change without notice based on official updates.<br/>We cannot guarantee complete accuracy at all times.
          </p>

          <h2>4. Third-party links & institutions</h2>
          <p>Links or references to universities, official portals, payment gateways, or partner services are provided for convenience only.</p>
          <p>We are not responsible for their content, services, or actions.</p>

          <h2>5. Advisory nature</h2>
          <p>All counselling, recommendations, and admission strategies are advisory only.
Students and parents make final decisions at their own discretion.</p>

          <h2>6.  Limitation of liability</h2>
          <p>
            Brainwave Consultancy is not liable for admission results, visa rejections, policy changes, delays, or any indirect or financial losses arising from the use of our services.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Disclaimer;
