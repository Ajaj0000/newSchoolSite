import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { AdmissionProcedure } from "./ProcedureChild";
import { Footer } from "../../../CommonComponents/Footer";

function AdmissionProcedureParent() {
    return (
        <>
        <Navbar/>
        <CommonBanner head={"Admission Procedure"}/>
        <AdmissionProcedure/>
        <Footer/>
        </>
    )
}
export { AdmissionProcedureParent }