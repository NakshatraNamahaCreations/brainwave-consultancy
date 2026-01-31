import { useState, useEffect } from "react";
import "./scrollToTop.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Works across browsers & layouts
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  if (!isVisible) return null;

  return (
    <button
      className="scrolltop-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
