import banner from "../../assets/home-bg2.jpeg";
import "./contactus.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLocationArrow, FaFacebook, FaInstagram, FaYoutube, FaClock } from "react-icons/fa";

export default function ContactusBanner() {
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

        <form class="contact-form-grid">
          <div class="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div class="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div class="form-group">
            <input type="tel" placeholder="Your Phone" />
          </div>

          <div class="form-group">
  <textarea 
    placeholder="Ask your query" 
    rows="3" 
    required
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
