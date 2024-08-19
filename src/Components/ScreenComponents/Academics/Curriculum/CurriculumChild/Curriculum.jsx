import React from "react";
import cbseLogo from "../../../../../Assets/Image/cbse logo.png"


function Curriculum() {
    return (
        <>
            <section className="services-section section-ptb">
                <div className="services-area">
                    <div className="container">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-lg-7 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <p style={{ textAlign: "justify" }}>I want to make it clear to you all that, this vidyalya has been affiliated to CBSE. All Curriculum will be based on CCE pattern right from 1st std.</p>
                                <p style={{ textAlign: "justify" }}>In this area our school is No.1 which has obtained CBSE affiliation. We are introducing CCE that is Continuous Comprehensive Evaluation method for the overall growth of our kids.</p>
                                <p style={{ textAlign: "justify" }}>I would like to give a brief view of CCE- We divide the whole session into two terms. The syllabus is divisible into Scholastic and Co Scholastic areas. Scholastic is again divided into Formative (FA) and Summative Assessment(SA).</p>
                            </div>
                            <div className="col-lg-5 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <img src={cbseLogo} alt="imff" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Curriculum }