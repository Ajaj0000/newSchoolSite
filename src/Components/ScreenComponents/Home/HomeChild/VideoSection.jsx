import React from "react";
import aim from '../../../../Assets/Image/g4.jpg';
import CountUp from 'react-countup';

function VideoSection() {
    return (
        <>
            <section className="video-section aos-init aos-animate" data-aos="fade-up">
                <div className="video-popup-area default_bg section-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-3d-5 aos-init aos-animate" data-aos="fade-in-left" data-aos-delay="200">
                                <div className="half_column_image overlay">
                                    <img src={aim}
                                        alt="VideoImage" className="img-fluid image-link"/>
                                        {/* <!--<div className="video-play-btn"><a data-fancybox
                                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="video-play-link"><i
                                                className="fas fa-play-circle"></i></a></div>--> */}
                                </div>
                            </div>
                            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-in-right" data-aos-delay="400">
                                <div className="video_popup_content text-white">
                                    <h2 className="sub-title text-white mb-3">Vision &amp; Mission</h2>
                                    <p>Alpha International Academy aims to offer an excellent academic experience to our
                                        students. We believe in providing quality education and nurturing a supportive
                                        environment that will help our students reach their fullest potential. </p>
                                    <p>Our mission is to provide quality education and nurture a supportive environment that
                                        will help our students reach their fullest potential while providing the best possible
                                        academic experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2 aos-init aos-animate" data-aos="fade-up">
                            <div className="col-md-3 col-sm-6 mb-xs-2">
                                <div className="single-countdown">
                                    <span className="counter">0</span>
                                    <p>Teachers</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-xs-2">
                                <div className="single-countdown">
                                    <span className="counter">0</span>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-xs-2">
                                <div className="single-countdown">
                                    <span className="counter"><CountUp end={21} duration={2}/></span>
                                    <p>classrooms</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-xs-2">
                                <div className="single-countdown">
                                    <span className="counter">0</span>
                                    <p>Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export { VideoSection }