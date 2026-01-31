import banner from "../../assets/home-bg2.jpeg";
import blogImg1 from "../../assets/brainwave-1.jpg";
import blogImg2 from "../../assets/brainwave-2.png";
import blogImg3 from "../../assets/brainwave-3.png";


import "./blog.css";
export default function BlogBanner() {
  return (
    <>
      {/* Banner */}
      <section
        className="service-ban"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-content" data-aos="fade-up">
          <h1>
            <span className="accent-line" />
            Blogs
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">

            {/* Blog 1 */}
            <article className="blog-card">
              <div className="blog-image">
                <img src={blogImg1} alt="Blog post" />
                <div className="blog-date">
                  <span>20</span> May
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">
                  How to Choose the Right NMC-Approved University for MBBS Abroad
                </h3>
                <p className="blog-excerpt">
                   Learn what to check before selecting a medical university abroad,
          including NMC approval, eligibility, fees, and country safety.
                </p>
                <a href="#" className="blog-read-more">
                  Read more →
                </a>
              </div>
            </article>

            {/* Blog 2 */}
            <article className="blog-card">
              <div className="blog-image">
                <img src={blogImg2} alt="Blog post" />
                <div className="blog-date">
                  <span>18</span> May
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">
                  MBBS Abroad Admission Process Explained Step by Step
                </h3>
                <p className="blog-excerpt">
                  A simple overview of the MBBS abroad admission process, from
          counseling and university selection to visa and travel support.
                </p>
                <a href="#" className="blog-read-more">
                  Read more →
                </a>
              </div>
            </article>

            {/* Blog 3 */}
            <article className="blog-card">
              <div className="blog-image">
                <img src={blogImg3} alt="Blog post" />
                <div className="blog-date">
                  <span>14</span> May
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">
                  Why Ethical Counseling Is Important for MBBS Abroad Aspirants
                </h3>
                <p className="blog-excerpt">
                   Understand how transparent guidance helps students avoid wrong
          decisions and choose safe, recognized medical universities.
                </p>
                <a href="#" className="blog-read-more">
                  Read more →
                </a>
              </div>
            </article>

          </div>

          <div className="blog-load-more">
            <a href="#" className="blog-load-btn">
              Load more posts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
