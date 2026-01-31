// import React from "react";
// import "./GalleryHome.css";

// const galleryImages = [
//   "/images/gallery1.jpg",
//   "/images/gallery2.jpg",
//   "/images/gallery3.jpg",
//   "/images/gallery4.jpg",
//   "/images/gallery5.jpg",
//   "/images/gallery6.jpg",
// ];

// export default function GalleryHome() {
//   return (
//     <section className="gallery-section">
//       <div className="gallery-container">
//         <h2 className="gallery-title">Our Gallery</h2>
//         <p className="gallery-subtitle">
//           A glimpse of our work, spaces, and creative moments
//         </p>

//         <div className="gallery-grid">
//           {galleryImages.map((img, index) => (
//             <div className="gallery-item" key={index}>
//               <img src={img} alt={`Gallery ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import "./GalleryHome.css";
import { FaGraduationCap } from "react-icons/fa";

const images = [
  "/pictures/IMG_9458.jpg",
  "/pictures/IMG_9464.jpg",
  "/pictures/IMG_9514.jpg",
  "/pictures/IMG_9459.jpg",
  "/pictures/IMG_9466.jpg",
  "/pictures/IMG_9504.jpg",
  "/pictures/IMG_9459.jpg",
  "/pictures/IMG_9464.jpg",
  "/pictures/IMG_9502.jpg",
  "/pictures/IMG_9474.jpg",
  "/pictures/IMG_9507.jpg",
];

export default function GalleryHome() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // AUTOPLAY
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // ⏱️ change slide every 3 seconds

    return () => clearInterval(interval);
  }, [current, isPaused]);

  return (
    <section className="gallery-carousel-section">
      <div className="gallery-carousel-container">
         <span className="gallery-kicker"><FaGraduationCap size={22}/> GALLERY</span>
        <h2 className="gallery-title">Our Gallery</h2>
        <p className="gallery-subtitle">
          A glimpse of our work and creative moments
        </p>

        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="nav prev" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel-track">
            {images.map((img, index) => (
              <div
                key={index}
                className={`slide ${
                  index === current ? "active" : ""
                }`}
              >
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>

          <button className="nav next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
