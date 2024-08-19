import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { HouseCode } from "../HouseChild/HouseCode";

function HouseParent() {
    return (
        <>
        <Navbar/>
        <CommonBanner head={"School Houses"}/>
        <HouseCode/>
        <Footer/>
        </>
    )
}
export { HouseParent }