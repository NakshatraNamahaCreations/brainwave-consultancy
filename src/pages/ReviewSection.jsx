import React from "react";
import Slider from "react-slick";
import "./ReviewSection.css";
import { FaGraduationCap, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Prithvi Patel",
    role: "Student",
    text: "Brainwave Consultancy guided me through every step of my study abroad journey. From university selection to visa approval, the process was smooth and stress-free. I always felt supported and well-informed",
    rating: 5,
    img: "/images/student1.jpg",
  },
  {
    name: "Sanketh",
    role: "Student",
    text:
      "Choosing Brainwave Consultancy was the best decision I made. Their counselors were knowledgeable, patient, and genuinely cared about my future. I received admission to my preferred university without any confusion.",
    rating: 5,
    img: "/images/student2.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "Student",
    text: "The team at Brainwave Consultancy explained everything clearly and helped me make the right choices. Their guidance with documentation and visa preparation was excellent. I highly recommend them to anyone planning to study abroad.",
    rating: 5,
    img: "/images/student3.jpg",
  },
  {
    name: "Neha Verma",
    role: "Student",
    text:
      "From the first counseling session to my final visa approval, Brainwave Consultancy was always there to help. Their professionalism and friendly approach made the entire experience comfortable and reassuring.",
    rating: 5,
    img: "/images/student4.jpg",
  },
];

const ReviewSection = () => {
  const settings = {
    infinite: true,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="sf-section">
      <div className="sf-container">
        <span className="sf-kicker"><FaGraduationCap size={22}/> TESTIMONIALS</span>
        <h2 className="sf-title">Student&apos;s Review</h2>
        <p className="sf-subtitle">
          Hear directly from students who trusted us with their education journey and achieved their goals abroad.
Their experiences reflect our commitment to guidance, transparency, and long-term success.
        </p>

        <Slider {...settings} className="sf-slider">
          {testimonials.map((item, index) => (
            <div key={index} className="sf-slide">
              <div className="sf-card">
                <span className="sf-quote">“</span>

                <div className="sf-user">
                  {/* <img src={item.img} alt={item.name} /> */}
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

                <p className="sf-text">{item.text}</p>

                <div className="sf-rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSection;
