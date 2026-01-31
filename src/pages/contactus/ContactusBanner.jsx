import banner from "../../assets/home-bg2.jpeg";
import "./contactus.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLocationArrow, FaFacebook, FaInstagram, FaYoutube, FaClock } from "react-icons/fa";
import React, { useState } from "react";


export default function ContactusBanner() {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
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
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    alert("Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
    <section
      className="service-ban"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* <div className="service-ban-overlay" /> */}

      <div className="banner-content" data-aos="fade-up">
        <h1>
          <span className="accent-line" />
          Contact Us
        </h1>
      </div>
    </section>
    
    <br />
<section class="premium-contact-form">
  <div class="container">

    <div class="contact-form">

  
      <div class="contact-form-card">
        <div class="section-title1 text-center">
          <span class="section-tagline">Contact with us</span>
          <h2 class="section-heading">Write us a message</h2>
        </div>

 <form className="contact-form-grid" onSubmit={handleSubmit}>


  <div class="form-group">
    <label>
      Your Name <span class="required">*</span>
    </label>
    <input
      type="text"
      required
      value={formData.name}
  onChange={handleChange}
    />
  </div>

  <div class="form-group">
    <label>
      Your Email <span class="required">*</span>
    </label>
    <input
      type="email"
      required
       value={formData.email}
  onChange={handleChange}
    />
  </div>

  <div class="form-group">
    <label>
      Your Phone <span class="required">*</span>
    </label>
    <input
      type="tel"
      required
      value={formData.phone}
  onChange={handleChange}
    />
  </div>

  <div class="form-group">
    <label>
      Ask your query
    </label>
    <textarea
      rows="3"
      required
      value={formData.message}
  onChange={handleChange}
    ></textarea>
  </div>

  <div class="form-group full text-center">
    <button type="submit" class="contact-submit-btn">
      Send a message
    </button>
  </div>

</form>



      </div>

    
      <div class="contact-info-card">
        <span class="section-tagline">Stay Connected</span>
        <h2 class="section-heading">We’d love to hear from you</h2>

        <p class="contact-desc">
          We'd love to hear from you, please drop us a line if you've any query. We'll do our best to get back to you as soon as possible.
        </p>

        <ul class="contact-info-list">
          <li>
            <strong><FaPhoneAlt/> Phone:</strong>
            <span>+91 9035722940</span>
          </li>

          <li>
            <strong><FaEnvelope/> Email:</strong>
            <span>info@brainwaveconsultancy.net</span>
          </li>

          <li>
            <strong><FaLocationArrow/> Address:</strong>
            <span>
               2nd Floor, Trinity Square, 547/16, A Block, Sahakar Nagar, Bengaluru, Karnataka 560092
            </span>
          </li>

          <li>
            <strong><FaClock/> Timings:</strong>
            <span>
               Mon - Sat: 10am to 8pm
            </span>
          </li>

         
        </ul>

        <div class="contact-highlights">
          <div class="highlight-box">✔ Quick Response</div>
          <div class="highlight-box">✔ Expert Guidance</div>
          <div class="highlight-box">✔ Trusted Support</div>
        </div>

       <div className="contact-socials">
  <span className="follow-text">Follow Us</span>

  <a href="https://www.facebook.com/share/1C5KmdxVaK/" className="social-icon fb" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <FaFacebook />
  </a>

  <a href="https://www.instagram.com/brainwaveconsultancy?utm_source=qr&igsh=OG9zdGd0N2s4anA5" className="social-icon ig" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>

  <a href="https://youtube.com/@brainwaveconsultancy?si=jHMouKHroDyEgknn" className="social-icon yt" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
</div>

      </div>

    </div>

  </div>
</section>


   <section className="premium-contact-section">
      <div className="container">
        <div className="contact-grid">

          {/* Call Us */}
          <div className="contact-card">
            <div className="icon-circle gradient-ring">
              <FaPhoneAlt />
            </div>
            <h4>Call Us</h4>
            <p>
             
              <strong>Support:</strong> +91 9035722940
            </p>
          </div>

          {/* Write Us */}
          <div className="contact-card">
            <div className="icon-circle gradient-ring">
              <FaEnvelope />
            </div>
            <h4>Write Us</h4>
            <p>
              info@brainwaveconsultancy.net
            </p>
          </div>

          {/* Visit Us */}
          <div className="contact-card">
            <div className="icon-circle gradient-ring">
              <FaMapMarkerAlt />
            </div>
            <h4>Location</h4>
            <p>
              Bengaluru, India
            </p>
          </div>

        </div>
      </div>
    </section>

  

{/* <div class="contact-map">
 <iframe
  style={{ border: 0, borderRadius: "16px" }}


    src="https://www.google.com/maps?q=Bangalore%2C%20Karnataka&output=embed"
    width="100%"
    height="450"

    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div> */}



    </>
  );
}
