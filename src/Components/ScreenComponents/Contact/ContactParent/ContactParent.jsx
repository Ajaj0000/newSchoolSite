import React, { useEffect } from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { ContactForm } from "../ContactChild/ContactForm";

function ContactParent() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    return (
        <>
        <Navbar/>
        <ContactForm/>
        <Footer/>
        </>
    )
}
export { ContactParent }