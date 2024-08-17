import React from "react";

function FillAdmissionForm() {
    return (
        <>
            <div className="page-wrapper section-ptb-3 aos-init aos-animate" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="apply-wrapper">
                                <h2>Apply Now</h2>
                                <form className="bg_dark_9 p-5">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_first_name">Enter First Name</label>
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_last_name">Enter Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_class">className you want to apply for*</label>
                                                <select id="user_class" className="form-control">
                                                    <option value="1">class One</option>
                                                    <option value="2">class Two</option>
                                                    <option value="3">class Three</option>
                                                    <option value="4">class Four</option>
                                                    <option value="5">class Five</option>
                                                    <option value="6">class Six</option>
                                                    <option value="7">class Seven</option>
                                                    <option value="8">class Eight</option>
                                                    <option value="9">class Nine</option>
                                                    <option value="10">class Ten</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_last_name">Student’s Birthday</label>
                                                <input type="text" className="form-control" placeholder="MM/DD/YY" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="guardian_first_name">Parents/ Guardian First Name</label>
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="guardian_last_name">Parents/ Guardian Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="std_address">Student's Address</label>
                                                <input type="text" className="form-control" placeholder="State Address" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_city">City</label>
                                                <input type="text" className="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_last_name">Country</label>
                                                <input type="text" className="form-control" placeholder="Country" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_phone_number">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="user_email">Email Address</label>
                                                <input type="text" className="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="user_comment">Write Your Comment</label>
                                                <textarea className="form-control" id="user_comment" cols="30" rows="5" placeholder="Your Comment"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mx-auto text-center">
                                            <button className="button_one mt-3">Submit Form</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export { FillAdmissionForm }