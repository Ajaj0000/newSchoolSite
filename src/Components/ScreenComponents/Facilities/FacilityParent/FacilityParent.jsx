import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { FacilitiesDetail } from "../FacilityChild/FacilitiesDetail";

function FacilityParent() {
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