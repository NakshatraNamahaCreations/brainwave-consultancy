import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import Header from './components/Header';
import ScrollOnRouteChange from './components/ScrollOnRouteChange';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/ServicesPage/Services';
import Blog from './pages/blog/Blog';
import ContactUs from './pages/contactus/ContactUs';
import Vietnam from './pages/UniversityPage/Vietnam';
import Georgia from './pages/UniversityPage/Georgia';
import Uzbekistan from './pages/UniversityPage/Uzbekistan';
import Nepal from './pages/UniversityPage/Nepal';
import Russia from './pages/UniversityPage/Russia';
import Career from './pages/CareerCounseling/Career';
import Gallery from './pages/Gallery/Gallery';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Header />
      <ScrollOnRouteChange />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/universities-in-vietnam" element={<Vietnam />} />
        <Route path="/universities-in-georgia" element={<Georgia />} />
        <Route path="/universities-in-uzbekistan" element={<Uzbekistan />} />
        <Route path="/universities-in-nepal" element={<Nepal />} />
        <Route path="/universities-in-russia" element={<Russia />} />
        <Route path='/career-counseling' element={<Career/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
