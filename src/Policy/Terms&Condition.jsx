import React from "react";
import "./LegalPages.css";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-container">
          <h1>Terms & Conditions</h1>
          <p>Effective Date: January 31, 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="legal-content">
        <div className="legal-container">
            <p>Welcome to Brainwave Consultancy. By using our website or services, you agree to the following terms:</p>

          <h2>1. About Us</h2>
          <p>
            Brainwave Consultancy provides career guidance, psychometric testing, and admission support for MBBS in India and abroad.
          </p>
          <p>We are an independent consultancy and are not affiliated with any university or government authority.</p>

          <h2>2. Our Services</h2>
          <p>
            We offer counselling, university shortlisting, documentation support, application processing, visa guidance, and post-admission assistance.<br/>We act only as advisors and facilitators.
          </p>

          <h2>3. No Admission or Visa Guarantee</h2>
          <p>
           We do not guarantee admission, scholarships, or visa approval.
Final decisions are made solely by universities and official authorities.
          </p>

          <h2>4. Student Responsibility</h2>
          <ul>
            <li>Students must provide correct documents and complete all payments and formalities on time.</li>
            <li>Brainwave Counseling is not responsible for rejections due to incorrect or delayed submissions.</li>
          </ul>

          <h2>5. Fees & Refunds</h2>
          <ul>
            <li>Service fees are shared in advance.</li>
            <li>Refunds, if applicable, follow our Refund Policy.</li>
            <li>University, embassy, or third-party charges are non-refundable.</li>
          </ul>

          <h2>6. Payments</h2>
          <p>
            Payments may be processed through Razorpay,card swipe, bank transfer, or other approved methods. Gateway terms also apply.
          </p>

          <h2>7. Communication Consent</h2>
          <p>
            By using our services, you agree to receive calls, SMS, WhatsApp, and emails regarding counselling, admissions, and updates.
          </p>

          <h2>8. Information Disclaimer</h2>
          <p>
            Fees, recognition status, and admission rules may change without notice.
We are not liable for changes made by universities or governments.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            All content, reports, and materials belong to Brainwave Consultancy and are for personal use only. Copying or resale is prohibited.
          </p>

          <h2>10. Limitation of Liability</h2>
          <ul>
            <li>Our services are provided on a best-effort basis.</li>
            <li>We are not liable for admission outcomes or indirect losses.</li>
            <li>Liability, if any, is limited to the service fees paid.</li>
          </ul>

          <h2>11. Jurisdiction</h2>
          <p>
           These terms are governed by Indian law.
          </p>
          <p>
            All disputes are subject to the courts of Bengaluru, Karnataka.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
