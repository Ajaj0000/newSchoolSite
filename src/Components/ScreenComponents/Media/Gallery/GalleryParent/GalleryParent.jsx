import React, { useEffect } from "react";
import { Navbar } from '../../../../CommonComponents/Navbar';
import { Footer } from "../../../../CommonComponents/Footer";
import { GalleryPhoto } from "../GalleryChild/GalleryPhoto";
import { CommonBanner } from "../../../../CommonComponents/CommonBanner";

function GalleryParent() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

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