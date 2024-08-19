import React from "react";
import { Navbar } from "../../../../CommonComponents/Navbar";
import { Footer } from "../../../../CommonComponents/Footer";
import { CommonBanner } from "../../../../CommonComponents/CommonBanner";
import { ActivePlanner } from "../ActivePlannerChild/ActivePlanner";

function ActivePlannerParent() {
    return (
        <>
            <Navbar />
            <CommonBanner head={"Active Planner"} />
            <ActivePlanner />
            <Footer />
        </>
    )
}
export { ActivePlannerParent }