import React from "react";
import unnamed from '../../../../Assets/Image/unnamed.png';
import unnamed1 from '../../../../Assets/Image/unnamed.jpg';

function ServiceSection() {
    return (
        <>
            <section className="services-section section-ptb">
                <div className="services-area">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-4 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <img src={unnamed} alt="img"
                                    className="img-fluid" />
                            </div>
                            <div className="col-lg-8 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <h4>MR. RAM GOPAL KATARIA</h4>
                                <p style={{ textAlign: "justify;" }}>In the new session, I welcome you all on behalf of my entire
                                    school family. The school managing committee assures that this new session will provide you
                                    with many opportunities to show your talent in every aspect of life and will lead to your
                                    success with all the well educated, trained, and dedicated staff. Primary education is the
                                    backbone of a person’s life.</p>
                                <p style={{ textAlign: "justify;" }}>This is the time when the students learn how to read, write, and
                                    speak. In other words, they learn to become good citizens. Our school is totally devoted to
                                    fulfilling this requirement since 2008. You can take our school as ‘A Temple of Maa
                                    Saraswati’.</p>
                                <p style={{ textAlign: "justify;" }}>If you are dedicated, obedient, soft-spoken, regular, punctual,
                                    and respectful towards your teachers &amp; family, only then you would be able to get your
                                    desired goal and you would be able to achieve the same for your school, family, society and
                                    your committee. I assure you that if you work in the guidance of our dedicated teachers you
                                    will surely succeed in your life and will make your family feel proud.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section section-ptb" style={{ background: "#e7e7e7" }}>
                <div className="services-area">
                    <div className="container" style={{ maxWidth: "90%" }}>
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-lg-7 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <h4>PRICNIPAL SPEAKS (Sunanya Nagpal)</h4>
                                <p style={{ textAlign: "justify;" }}>The system of education should work as a catalyst in making each
                                    child a balanced human being having his core strengths embedded in the learning experiences
                                    emanating from our rich socio-cultural roots. With the ever-increasing demand of
                                    competitions, fast-changing values, the pressure of challenging career, and increasing love
                                    for materialistic life, it has become difficult for the individuals to maintain its prime
                                    values intact. We at ALPHA INTERNATIONAL ACADEMY try to imbibe values of love, culture, and
                                    knowledge through education that enables them to adjust and adapt to the emerging society of
                                    multicultural thoughts, beliefs, and religions.</p>
                                <p style={{ textAlign: "justify;" }}>To channelize the creative aspect of the child the school ensures
                                    that he is given ample opportunities. Various club activities and co-scholastic activities
                                    are conducted to provide an insight to one’s thoughts and creativity through varied
                                    expressions. I appreciate our parent fraternity for supporting the school in every aspect.
                                </p>
                                <p style={{ textAlign: "justify;" }}>I also applaud the incessant efforts of our teachers for giving
                                    their best in bringing out the best in each child. I am positive that in times to come we
                                    will continue our journey with elevated enthusiasm and persistently provide a platform of
                                    holistic learning to the young generation of learners.</p>
                                <h5><b>Best CBSE School In Jaipur | Best Sports Academy School In Jaipur</b></h5>
                            </div>
                            <div className="col-lg-5 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <img src={unnamed1}
                                    className="img-fluid" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { ServiceSection }