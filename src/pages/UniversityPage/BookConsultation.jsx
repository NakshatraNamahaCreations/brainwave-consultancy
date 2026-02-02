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

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    phone: formData.phone,
    university: universityName,
    message: `
City: ${formData.city}
State: ${formData.state}
`,
  };

  try {
    const res = await fetch(
      "https://brainwave-consultancy.netlify.app/api/enquiry",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert("Consultation request submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        message: "",
      });
    } else {
      alert(data.message || "Failed to submit consultation request");
    }
  } catch (error) {
    alert("Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
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
  value={formData.firstName}
  onChange={handleChange}
/>
              <input
              
  type="text"
  name="lastName"
  placeholder="Last Name"
  required
  value={formData.lastName}
  onChange={handleChange}
/>
            </div>

            <div className="form-row">
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
            </div>

            <div className="form-row">
             <input
  type="text"
  name="city"
  placeholder="City"
  value={formData.city}
  onChange={handleChange}
/>
             <input
  type="text"
  name="state"
  placeholder="State"
  value={formData.state}
  onChange={handleChange}
/>
            </div>

            {/* <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
            /> */}

            <button type="submit" className="consult-btn">
              Book Consultation
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
