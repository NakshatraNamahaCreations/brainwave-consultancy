import React from "react";
import "./LegalPages.css";
import Footer from "../components/Footer";
import { FaEnvelope } from "react-icons/fa";

const RefundPolicy = () => {
  return (
    <>
      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-container">
          <h1>Refund Policy</h1>
          {/* <p>Effective Date: January 31, 2026</p> */}
        </div>
      </section>

      {/* CONTENT */}
      <section className="legal-content">
        <div className="legal-container">
            <p>At Brainwave Consultancy, we provide counselling and admission support services for MBBS in India and abroad. As our services involve professional time, expertise, and processing, the following refund terms apply:</p>

          <h2>1. Service Fees</h2>
          <p>
           All fees are shared in advance. Once counselling or processing has started, fees are considered utilized.
          </p>

          <h2>2. Non-Refundable</h2>
          <p>The following are non-refundable:</p>
         <ul>
            <li>Counselling or consultation fees</li>
            <li>Psychometric test fees</li>
            <li>Documentation or processing charges</li>
            <li>University/visa/embassy/government fees</li>
            <li>Any third-party payments</li>
            </ul>

          <h2>3.  Refund Eligibility</h2>
          <p>
           Refunds may be considered only if:
          </p>
          <ul>
            <li>Service is cancelled before work begins, or</li>
            <li>Duplicate/excess payment is made</li>
            <li>Approved refunds may be subject to administrative deductions.</li>
          </ul>

          <h2>4.  No Refund Cases</h2>
          <p>No refunds for admission/visa rejection, change of mind, incomplete documents, missed deadlines, or policy changes by universities or authorities.</p>

          <h2>5. Refund Requests</h2>
          <p>Refund requests must be emailed within 7 days of payment to:</p>
         <ul className="contact-list">
  <li>
    <a href="mailto:BrainwaveConsultancyLavanya@gmail.com">
      <FaEnvelope className="contact-icon" />
      <span>Email ID: BrainwaveConsultancyLavanya@gmail.com</span>
    </a>
  </li>
</ul>


         
          <p>
           Approved refunds will be processed within 7–14 working days to the original payment method.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default RefundPolicy;
