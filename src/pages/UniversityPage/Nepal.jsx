import banner from "../../assets/home-bg2.jpeg";
import Footer from "../../components/Footer";
import "../ServicesPage/ServiceBanner.css";
import BookConsulation from "./BookConsultation";
import NepalUni from "./NepalUni";



export default function Nepal() {
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
          Universities in Nepal
        </h1>
      </div>
    </section>


    <NepalUni/>

    <section className="video-section">
  <div className="videos-container">
    <div className="video-box">
      <video
        src="./pictures/VID_20251028_075431 (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        controls
      />
    </div>
  </div>
</section>

    <BookConsulation backgroundImage="./uni-img/uni-3.jpeg"/>
    <Footer/>
    </>
  );
}
