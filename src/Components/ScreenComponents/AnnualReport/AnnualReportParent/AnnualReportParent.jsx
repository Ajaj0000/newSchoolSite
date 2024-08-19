import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { AnnualReport } from "../AnnualReportChild/AnnualReport";

function AnnualReportParent() {
    return (
        <>
        <Navbar/>
        <CommonBanner head={"Annual Report"}/>
        <AnnualReport/>
        <Footer/>
        </>
    )
}
export { AnnualReportParent }