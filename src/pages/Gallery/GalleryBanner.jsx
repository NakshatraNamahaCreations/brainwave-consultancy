import banner from "../../assets/home-bg2.jpeg";
import "./GalleryBanner.css";

export default function GalleryBanner() {
  return (
    <section
      className="service-ban"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* <div className="service-ban-overlay" /> */}

      <div className="banner-content" data-aos="fade-up">
        <h1>
          <span className="accent-line" />
          Gallery
        </h1>
      </div>
    </section>
  );
}
