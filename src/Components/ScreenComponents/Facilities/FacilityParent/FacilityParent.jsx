import React, { useEffect } from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { FacilitiesDetail } from "../FacilityChild/FacilitiesDetail";

function FacilityParent() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    return (
        <>
        <Navbar/>
        <CommonBanner head={"School Facilities"}/>
        <FacilitiesDetail/>
        <Footer/>
        </>
    )
}
export { FacilityParent }