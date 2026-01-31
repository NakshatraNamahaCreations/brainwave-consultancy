import React, { useEffect, useState } from "react";
import "./HomeBanner.css";

import banner1 from "../assets/bwc-1.jpg";
import banner2 from "../assets/bwc-2.jpg";


const slides = [
  {
    image: banner1,
    title: "Your Gateway to World-Class Education",
    subtitle: "We help students access leading international universities through trusted counseling, seamless admissions support, and personalized guidance at every step.",
    // cta: "Enquire Now"
  },
  {
    image: banner2,
    title: "Empowering Students for a Global Tomorrow",
    subtitle: "We guide students toward internationally recognized universities, helping them choose the right courses, navigate admissions, and prepare for life abroad.",
    // cta: "Get Support"
  },
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`banner-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="banner-overlay" />
          <div className="banner-content" data-aos="fade-up">
  <h1>
    <span className="accent-line" />
    {slide.title}
  </h1>
  <p>{slide.subtitle}</p>
  {/* <button>{slide.cta}</button> */}
</div>

        </div>
      ))}

      {/* DOTS */}
      <div className="banner-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;
