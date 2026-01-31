import { FaGraduationCap } from "react-icons/fa";
import "./BookConsultation.css";
import { useState } from "react";

export default function BookConsultation({
  universityName,
  backgroundImage,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      university: universityName,
    };

    console.log(payload);
    alert(`Consultation request submitted for ${universityName}`);
  };

  return (
    <section
      className="consult-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="consult-wrapper">

        {/* LEFT CONTENT */}
        <div className="consult-left">
          {/* <span className="consult-badge">Book a Consultation</span>
          <h2>{universityName}</h2>
          <p>
            Get expert guidance on admissions, eligibility, fees, and
            application process for {universityName}.
          </p> */}
        </div>

        {/* RIGHT FORM */}
        <div className="consult-form-box">
          <h3>
            <span><FaGraduationCap /></span>
            Consultation Form
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
            />

            <button type="submit" className="consult-btn">
              Book Consultation
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
