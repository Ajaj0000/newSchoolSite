import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeParent } from "../Components/ScreenComponents/Home/HomeParent/HomeParent";
import { AboutParent } from "../Components/ScreenComponents/About/AboutParent/AboutParent";
import { FacilityParent } from "../Components/ScreenComponents/Facilities/FacilityParent/FacilityParent";
import { ContactParent } from "../Components/ScreenComponents/Contact/ContactParent/ContactParent";
import { GalleryParent } from "../Components/ScreenComponents/Media/Gallery/GalleryParent/GalleryParent";
import { Admission, AdmissionForm } from "../Components/ScreenComponents/AdmissionForm/AdmissionForm";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeParent />} />
                <Route path="/about" element={<AboutParent />} />
                <Route path="/facilities" element={<FacilityParent />} />
                <Route path="/contact" element={<ContactParent />} />
                <Route path="/gallery" element={<GalleryParent />} />
                <Route path='/admission' element={<Admission />} />
            </Routes>
        </>
    )
}
export { Routing }