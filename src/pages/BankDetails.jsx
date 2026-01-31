import React from "react";
import "./BankDetails.css";

export default function BankDetails() {
  return (
    <section className="bank-section">
      <div className="bank-container">
        <div className="bank-header">
          <h2 className="bank-title">Payment Details</h2>
          <p className="bank-subtitle">
            Use the bank details below or scan the QR code to make a payment
          </p>
        </div>

        <div className="bank-content">
          {/* LEFT – BANK DETAILS */}
          <div className="bank-card">
            <h3 className="card-title">Bank Account Details</h3>


            <div className="bank-row">
              <span>Bank Name</span>
              <strong>Union Bank of India</strong>
            </div>

            <div className="bank-row">
              <span>Account Number</span>
              <strong>072521010000113</strong>
            </div>

            <div className="bank-row">
              <span>Organisation Name</span>
              <strong>Brainwave Consultancy</strong>
            </div>

            <div className="bank-row">
              <span>IFSC Code</span>
              <strong>UBIN0907251</strong>
            </div>

            <div className="bank-row">
              <span>Branch</span>
              <strong>RS Palya/ Kamanahalli</strong>
            </div>
          </div>

          {/* RIGHT – QR SCANNER */}
          <div className="scanner-card">
            <h3 className="card-title">Scan & Pay</h3>

            <div className="qr-wrapper">
              <img
                src="/pictures/GooglePay_QR.png"
                alt="Scan to Pay"
              />
            </div>

            <p className="scanner-note">
              Scan using Google Pay, PhonePe, Paytm or any UPI app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
