import banner from "../../assets/home-bg2.jpeg";
import "./ServiceBanner.css";

export default function ServiceBanner() {
  return (
    <section
      className="service-ban"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* <div className="service-ban-overlay" /> */}

      <div className="banner-content" data-aos="fade-up">
        <h1>
          <span className="accent-line" />
          Services
        </h1>
      </div>
    </section>
  );
}
