import React, { useEffect } from "react";
import { Navbar } from "../../CommonComponents/Navbar";
import { CommonBanner } from "../../CommonComponents/CommonBanner";
import { Footer } from "../../CommonComponents/Footer";
import { FillAdmissionForm } from "./FillAdmissionForm";

function Admission() {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    return (
        <>
        <Navbar/>
        <CommonBanner head={"Admisson Form"}/>
        <FillAdmissionForm/>
        <Footer/>
        </>
    )
}
export { Admission }