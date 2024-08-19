import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { AdmissionFees } from "./AdmissionFees";

function AdmissionFeesMain() {
    return (
        <>
<Navbar/>
<CommonBanner head={"Admission Fees"}/>
<AdmissionFees/>
<Footer/>
        </>
    )
}
export { AdmissionFeesMain }