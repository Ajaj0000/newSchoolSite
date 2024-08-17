import React from "react";
import { Link } from "react-router-dom";

function ContactForm() {
    return (
        <>
            <div className="page-wrapper section-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-3d-5 aos-init aos-animate" data-aos="fade-up">
                            <div className="main-content">
                                <div className="contact-from-wrapper-2">
                                    <h2 className="section-heading">Make an Appointment</h2>
                                    <form className="mt-4" method="post">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="dzName" placeholder="Enter Your Name" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="dzEmail" placeholder="Enter Your Email" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="dzPhone" id="phone_number" placeholder="Enter Phone Number" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="subject" className="form-control" name="dzCourse" placeholder="Enter Subject"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea name="dzMessage" className="form-control" id="message" cols="30" rows="6" placeholder="Write Your Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mx-auto text-center">
                                                <input type="submit" className="btn btn-danger" style={{background: "#fb0808"}} value="Send Message" name="contact"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
                            <div className="highlights-section hover_bg text-white p-4">
                                <h4>Don’t Hesitate to contact with us for any kind of information</h4>
                                <ul>
                                    <li><i className="fas fa-paper-plane"></i> Sirsi Rd, Panchyawala, Jaipur, Rajasthan 302034</li>
                                    <li><i className="fas fa-mobile-alt"></i>+91-8000181108, 7732906375</li>
                                    <li><i className="fas fa-envelope"></i> alphainternationalacademy@gmail.com</li>
                                </ul>
                                <div className="social-links">
                                    <ul>
                                        <li><Link to='/contact'><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to='/contact'><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to='/contact'><i className="fab fa-behance"></i></Link></li>
                                        <li><Link to='/contact'><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-area section-ptb-3 aos-init" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="embeded-map-area">
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            {/* <iframe src="./Alpha International Academy Contact, Helpline Number_files/embed.html" style={{border:"0", width:"100%", height:"500px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe> */}
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5065724388783!2d75.7056740255588!3d26.95085295845027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4cd402d60aaf%3A0x685c281f475821b8!2sGovindam%20Tower%2C%20Kardhani%20Govindpura%2C%20Govindpura%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1723592377033!5m2!1sen!2sin" style={{border:"0", width:"100%", height:"500px"}} title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { ContactForm }