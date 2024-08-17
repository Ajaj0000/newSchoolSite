import React from "react";
import { Navbar } from '../../../../CommonComponents/Navbar';
import { Footer } from "../../../../CommonComponents/Footer";
import { GalleryPhoto } from "../GalleryChild/GalleryPhoto";
import { CommonBanner } from "../../../../CommonComponents/CommonBanner";

function GalleryParent() {
    return (
        <>
            <Navbar />
            <CommonBanner head={"Photo Gallery"}/>
            <GalleryPhoto/>
            <Footer />
        </>
    )
}
export { GalleryParent }