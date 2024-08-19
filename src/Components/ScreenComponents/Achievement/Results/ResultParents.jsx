import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { Result } from "./ResultChild";


function ResultParent() {
    return (
        <>
        <Navbar/>
        <CommonBanner head={"CBSE Result"}/>
        <Result/>
        <Footer/>
        </>
    )
}
export { ResultParent }