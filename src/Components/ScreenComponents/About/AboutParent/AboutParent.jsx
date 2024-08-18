import React, { useEffect } from "react";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { ServiceSection } from "../AboutChild/ServicesSection";
// import bg from "../../../../Assets/Image/WhatsApp_Image_2023-02-09_at_3.41.00_PM.jpeg";

function AboutParent() {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    return (
        <>
        <Navbar/>
         <CommonBanner head={"About US"}/>
         <ServiceSection/>
         <Footer/>
        </>
    )
}
export { AboutParent }