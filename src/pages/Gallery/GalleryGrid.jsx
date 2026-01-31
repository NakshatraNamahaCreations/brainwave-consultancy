import React, { useState } from "react";
import "./GalleryGrid.css";

const images = [
  "/pictures/brainwaveconsultancy_20250728_p_3686514596317548190_2_3686514585420735605.webp",
  "/pictures/brainwaveconsultancy_20250728_p_3686514596317548190_3_3686514585538312070.webp",
  "/pictures/brainwaveconsultancy_20250728_p_3686514596317548190_4_3686514585261339078.webp",
  "/pictures/brainwavecounseling_20250414_p_3610215579653156207_1_3610215579653156207.webp",
  "/pictures/IMG_20250924_165926.jpg.jpeg",
  "/pictures/IMG_20250624_175527.jpg.jpeg",
  "/pictures/IMG_20250914_172326.jpg.jpeg",
  "/pictures/IMG-20250620-WA0046.jpg.jpeg",
  "/pictures/IMG-20250620-WA0048.jpg.jpeg",
  "/pictures/IMG-20251105-WA0040.jpg.jpeg",
  "/pictures/XD6A0789.JPG.jpeg",
  "/pictures/IMG-20251105-WA0039.jpg.jpeg",
  "/pictures/WhatsApp Image 2026-01-24 at 11.39.59 AM (1).jpeg",
  "/pictures/WhatsApp Image 2026-01-24 at 11.39.59 AM (2).jpeg",
  "/pictures/WhatsApp Image 2026-01-24 at 11.39.59 AM.jpeg",
  "/pictures/XD6A0840.JPG.jpeg",
  "/pictures/XD6A0830.JPG.jpeg",
  "/pictures/XD6A0803.JPG.jpeg",
  "/pictures/WhatsApp Image 2026-01-24 at 11.40.00 AM (2).jpeg",
  "/pictures/WhatsApp Image 2026-01-24 at 11.40.00 AM (1).jpeg",
  "/pictures/WhatsApp Image 2026-01-24 at 11.40.00 AM (3).jpeg",
  "/pictures/study_mbbs_in_vietnam__20250407_p_3605505871564621071_2_3605505854728758473.jpg.jpeg",
  "/pictures/study_mbbs_in_vietnam__20250407_p_3605505871564621071_3_3605505854804071879.jpg.jpeg",
  "/pictures/IMG-20260111-WA0042.jpg.jpeg",
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
  "/pictures/IMG_9507.jpg"
];

export default function GalleryGrid() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="gallery-page">
      {/* GRID */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {images.map((img, index) => (
             <div className="gallery-item" onClick={() => openLightbox(index)}>
  <img src={img} alt={`Gallery ${index + 1}`} />

  <div className="gallery-overlay">
    <span className="overlay-text">+</span>
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {currentIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-btn" onClick={closeLightbox}>✕</span>

          <button className="nav prev" onClick={prevImage}>❮</button>

          <img
            src={images[currentIndex]}
            alt="Enlarged view"
            className="lightbox-img"
          />

          <button className="nav next" onClick={nextImage}>❯</button>
        </div>
      )}
    </div>
  );
}
