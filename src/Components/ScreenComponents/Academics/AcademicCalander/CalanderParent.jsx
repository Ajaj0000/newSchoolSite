import React from "react";
import { Navbar } from "../../../CommonComponents/Navbar";
import { Footer } from "../../../CommonComponents/Footer";
import { CommonBanner } from "../../../CommonComponents/CommonBanner";
import { Calander } from "./Calander";

function CaladerParent() {
    return (
        <>
<Navbar/>
<CommonBanner head={"Academic Calander"}/>
<Calander/>
<Footer/>
        </>
    )
}
export { CaladerParent }