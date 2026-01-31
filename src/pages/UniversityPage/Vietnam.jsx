import banner from "../../assets/home-bg2.jpeg";
import Footer from "../../components/Footer";
import "../ServicesPage/ServiceBanner.css";
import Bmtu from "./bmtu";
import BookConsultation from "./BookConsultation";



export default function Vietnam() {
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
          Universities in Vietnam
        </h1>
      </div>
    </section>

    <Bmtu/>

<section className="video-section">
  <div className="videos-container">
    <div className="video-box">
      <video
        src="./pictures/VID_20251029_161616059.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls
      />
    </div>
  </div>
</section>



    <BookConsultation
  backgroundImage="./uni-img/uni-2.jpeg"
/>
    <Footer/>
    </>
  );
}
