import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { ContactForm } from "../ContactChild/ContactForm";

function ContactParent() {
    return (
        <>
        <Navbar/>
        <ContactForm/>
        <Footer/>
        </>
    )
}
export { ContactParent }