import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { Inquiry } from "./Inquiry";
import { Footer } from "../../../CommonComponents/Footer";

function InquiryMain() {
    return (
        <>
            <Navbar />
            <CommonBanner head={"Inquiry"} />
            <Inquiry />
            <Footer />
        </>
    )
}
export { InquiryMain }