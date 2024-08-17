import React from "react";


function WelcomeSection() {
    return (
        <>
            <section className="welcome-section section-pb aos-init aos-animate" data-aos="fade-right" >
                <div className="welcome-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-3d-5 px-0">
                                <div className="half_column_image">
                                    {/* <iframe style={{width: '100%', height:'450px'}}
                                        src="./Top CBSE School in Jaipur - Alpha International Academy_files/Gh5FuXmuLgU.html"
                                        title="Alpha International Academy is one of the best schools in Jaipur, Rajasthan"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""></iframe> */}

                                    <iframe width="560" height="315" style={{ width: '100%', height: '450px' }} src="https://www.youtube.com/embed/ohIAiuHMKMI?si=gPqQwaYr9OLVo4E3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 equal-height">
                                <div className="half_column_content">
                                    <h1 className="sub-title">Welcome To AIA</h1>
                                    <p>The journey of AIA dates back to 2007 when the long-cherished dream of Mr. Ram Gopal
                                        Kataria took shape in the form of an Institution dedicated to the service of the society
                                        by providing quality learning spaces.</p>
                                    <p>Strongly supported by his motivational force, Dr. Rekha Kataria, Mr. Ram Gopal Kataria
                                        laid the foundation of the school with great passion in 2007 envisioning growth at a
                                        global level, with a stress on the development of intellectual intelligence,
                                        inquisitiveness and a sense of responsibility amongst its learners. The incessant
                                        support of Mr. Arpit Kataria provided him the propelling force to work even harder in
                                        the field of empowering teachers and students.</p>
                                    <p>The school got affiliated up to middle classes in 2011-12 and eventually got upgraded and
                                        affiliated for Secondary and Sr. Secondary classes in 2014-15 and 2017-18 respectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { WelcomeSection }