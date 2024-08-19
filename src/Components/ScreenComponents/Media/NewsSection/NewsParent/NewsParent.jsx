import React from "react";
import { Navbar } from "../../../../CommonComponents/Navbar";
import { Footer } from "../../../../CommonComponents/Footer";
import { CommonBanner } from "../../../../CommonComponents/CommonBanner";
import { News } from "../NewsChild/News";

function NewsParent() {
    return (
        <>
            <Navbar />
            <CommonBanner head={"News &  Media"} />
            <News />
            <Footer />
        </>
    )
}
export { NewsParent }