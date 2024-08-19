import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { Mandatory } from "../MandatoryChild/Mandatory";

function MandatoryParent() {
    return (
        <>
            <Navbar />
            <CommonBanner head={"Mandatory Disclosure"} />
            <Mandatory />
            <Footer />
        </>
    )
}
export { MandatoryParent }