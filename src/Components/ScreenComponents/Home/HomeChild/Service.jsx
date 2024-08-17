import React, { useEffect } from "react";
import service1 from '../../../../Assets/Image/icons8-basketball-player-100.png'
import service2 from '../../../../Assets/Image/icons8-classroom-100.png'
import service3 from '../../../../Assets/Image/service_icon_03.png'
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


function Service() {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

    return (
        <>
            <section className="services-section translate_34">
                <div className="services-area">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <div className="col-xl-4 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
                                <div className="single-service default_bg text-center text-white py-5 px-4">
                                    <div className="service-icon">
                                        <img src={service1}
                                            alt="service one" className="img-fluid" />
                                    </div>
                                    <div className="service-text">
                                        <h4>Quality Education</h4>
                                        <p>Quality education is not about getting the right grades. It's about learning in a way
                                            that makes you happy, and improving yourself.</p>
                                        <Link to='/'>Read More <i className="fas fa-angle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-right" data-aos-delay="400">
                                <div className="single-service hover_bg text-center text-white py-5 px-4">
                                    <div className="service-icon">
                                        <img src={service2}
                                            alt="service one" className="img-fluid" />
                                    </div>
                                    <div className="service-text">
                                        <h4>Sports Academy</h4>
                                        <p>Sports academies in school teach children how to play sports and have fun. They are a
                                            great way to get your kids exercise and learn new skills.</p>
                                        <Link to='/'>Read More <i className="fas fa-angle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-right" data-aos-delay="600">
                                <div className="single-service default_bg text-center text-white py-5 px-4">
                                    <div className="service-icon">
                                        <img src={service3}
                                            alt="service one" className="img-fluid" />
                                    </div>
                                    <div className="service-text">
                                        <h4>Digital classrooms</h4>
                                        <p>Digital classrooms are a great way to keep students engaged and on track in the
                                            classroom. By using technology to keep students organized and connected</p>
                                        <Link to='/'>Read More <i className="fas fa-angle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Service }