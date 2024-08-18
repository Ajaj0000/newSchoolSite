import React, { useEffect } from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Banner } from "../HomeChild/Banner";
import { Service } from "../HomeChild/Service";
import { WelcomeSection } from "../HomeChild/WelcomeSection";
import { VideoSection } from "../HomeChild/VideoSection";
import { Testimonials } from "../HomeChild/Testimonials";
import { Gallery } from "../HomeChild/Gallery";
import { Footer } from "../../../CommonComponents/Footer";
import { SocialSection } from "../HomeChild/SocialSection";

function HomeParent() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);
    
    return (
        <>
            <Navbar />
            <Banner />
            <Service/>
            <WelcomeSection/>
            <VideoSection/>
            <Testimonials/>
            <Gallery/>
            <SocialSection/>
            <Footer/>
        </>
    )
}
export { HomeParent }