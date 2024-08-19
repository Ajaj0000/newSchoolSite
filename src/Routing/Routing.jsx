import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeParent } from "../Components/ScreenComponents/Home/HomeParent/HomeParent";
import { AboutParent } from "../Components/ScreenComponents/About/AboutParent/AboutParent";
import { FacilityParent } from "../Components/ScreenComponents/Facilities/FacilityParent/FacilityParent";
import { ContactParent } from "../Components/ScreenComponents/Contact/ContactParent/ContactParent";
import { GalleryParent } from "../Components/ScreenComponents/Media/Gallery/GalleryParent/GalleryParent";
import { Admission } from "../Components/ScreenComponents/AdmissionForm/AdmissionForm";
import { NewsParent } from "../Components/ScreenComponents/Media/NewsSection/NewsParent/NewsParent";
import { MandatoryParent } from "../Components/ScreenComponents/Mandatory/MandatoryParent/MandatoryParent";
import { HouseParent } from "../Components/ScreenComponents/HouseCode/HouseParent/HouseParent";
import { AnnualReportParent } from "../Components/ScreenComponents/AnnualReport/AnnualReportParent/AnnualReportParent";
import { ResultParent } from "../Components/ScreenComponents/Achievement/Results/ResultParents";
import { CurriculumParent } from "../Components/ScreenComponents/Academics/Curriculum/CurriculumParent/CurriculumParent";
import { ActivePlannerParent } from "../Components/ScreenComponents/Academics/ActivePlanner/ActivePlannerParent/ActivePlannerParent";
import { BooksListParent } from "../Components/ScreenComponents/Academics/BookList/BooksListParent";
import { CaladerParent } from "../Components/ScreenComponents/Academics/AcademicCalander/CalanderParent";
import { AdmissionProcedureParent } from "../Components/ScreenComponents/AdmissionForm/AdmissionProcedure/ProcedureParent";
import { InquiryMain } from "../Components/ScreenComponents/AdmissionForm/Inquiry/InquiryMain";
import { AdmissionFeesMain } from "../Components/ScreenComponents/AdmissionForm/AdmissionFees/AdmissionFeesMain";

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
                <Route path="/curriculum" element={<CurriculumParent/>}/>
                <Route path="/news" element={<NewsParent/>}/>
                <Route path="/mandatory" element={<MandatoryParent/>}/>
                <Route path="/house" element={<HouseParent/>}/>
                <Route path="/annualReport" element={<AnnualReportParent/>}/>
                <Route path="/result" element={<ResultParent/>}/>
                <Route path="/planner" element={<ActivePlannerParent/>}/>
                <Route path="/booksList" element={<BooksListParent/>}/>
                <Route path="/calander" element={<CaladerParent/>}/>
                <Route path="/procedure" element={<AdmissionProcedureParent/>}/>
                <Route path="/inquiry" element={<InquiryMain/>}/>
                <Route path="/fees" element={<AdmissionFeesMain/>}/>
            </Routes>
        </>
    )
}
export { Routing }