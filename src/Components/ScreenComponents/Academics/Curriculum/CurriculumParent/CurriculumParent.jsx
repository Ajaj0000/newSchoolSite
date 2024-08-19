import React from "react";
import { Curriculum } from "../CurriculumChild/Curriculum";
import { Navbar } from "../../../../CommonComponents/Navbar";
import { Footer } from "../../../../CommonComponents/Footer";
import { CommonBanner } from "../../../../CommonComponents/CommonBanner";

function CurriculumParent() {
    return (
        <>
            <Navbar />
            <CommonBanner head={"CBSE Based Curriculum"} />
            <Curriculum />
            <Footer />
        </>
    )
}
export { CurriculumParent }