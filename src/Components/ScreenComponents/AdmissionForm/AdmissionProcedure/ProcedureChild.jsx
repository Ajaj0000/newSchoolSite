import React from "react";
import { Link } from "react-router-dom";

function AdmissionProcedure() {
    return (
        <>
            <section className="services-section section-ptb">
                <div className="services-area">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-12 col-sm-12 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <h4>ADMISSION PROCEDURE</h4>
                                <p style={{textAlign:"justify"}}>The admission procedure for every academic year commences in the final week of November
                                    of the preceding year.</p>
                                <h4>PRE-ADMISSION PROCEDURES</h4>
                                <p style={{textAlign:"justify"}}>1. The applicant can purchase the Prospectus from the School Accounts Department from Monday – Saturday,between 09:00am to 3:00pm<br/>
                                    In case you wish to meet the Admission Counsellor, you may visit the school between 9:00am to 3:00pm.</p>
                                <p style={{textAlign:"justify"}}>2. A pre-arranged appointment needs to be taken for a Campus visit.</p>
                                <p>3. Should the applicant wish to proceed with the admission, the process to be followed is</p>
                                <p style={{textAlign:"justify"}}>a. The applicant would be required to submit the Admission Form to the Admissions
                                    Department with the set of documents mentioned in the prospectus.</p>
                                <p style={{textAlign:"justify"}}>b. Documents to be submitted with the Admission Form:</p>
                                <p style={{textAlign:"justify"}}><b>* </b>Prescribed admission form duly filled in by the parents or guardians of the child.</p>
                                <p style={{textAlign:"justify"}}><b>* </b>Admission would be confirmed only after the submission of the copy of latest
                                    Progress Report Card and the original T.C from the school last attended.</p>
                                <p style={{textAlign:"justify"}}><b>* Birth Certificate</b> from the authorised Govt. Department.</p>
                                <p style={{textAlign:"justify"}}><b>* </b>Two coloured passport size photographs of the child and one of each parent.</p>
                                <p style={{textAlign:"justify"}}><b>* </b>Xerox of <b>Aadhar Card</b> of child and parents.</p>
                                <h4>POST-ADMISSION PROCEDURES</h4>
                                <p>Once Admission is granted you may proceed to deposit the Fees and submit the following documents -</p>
                                <table>
                                    <tbody><tr>
                                        <td style={{width:"200px"}}>1. ID Card Form </td>
                                        <td><Link className="btn theme-btn">Download ID Card Form</Link></td>
                                    </tr>
                                        <tr>
                                            <td>2. Transport Form </td>
                                            <td><Link  className="btn theme-btn">Download Transport Form</Link></td>
                                        </tr>
                                    </tbody></table>
                                <p style={{textAlign:"justify"}}>School uniform and books can be bought from the our specified Uniform Dealers and Book
                                    house, which is mentioned in our prospectus. All documents need to be duly completed, signed
                                    and filled in block letters, before submission. Any incomplete documents may lead to delay in
                                    the Admission procedure and increase the risk of not gaining a seat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { AdmissionProcedure }