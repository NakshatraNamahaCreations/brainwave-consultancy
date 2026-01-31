import Footer from "../components/Footer";
import AboutSection from "./AboutSection";
import BankDetails from "./BankDetails";
import GalleryHome from "./GalleryHome";
import HomeBanner from "./HomeBanner";
import MovingText from "./MovingText";
import OurProcess from "./OurProcess";
import ReviewSection from "./ReviewSection";
import ServiceSection from "./ServiceSection";
import VideoSection from "./VideoSection";

import WhyChooseUs from "./WhyChooseUs";





export default function Home(){
    return(
        <>
        <HomeBanner/>
        <AboutSection/>
         <MovingText/>
        <WhyChooseUs/>
        <ServiceSection/>
        <OurProcess/>
        <VideoSection/>
        <ReviewSection/>
        <GalleryHome/>
        <BankDetails/>
        <Footer/>
        </>
    )
}