import React from "react";
import img1 from '../../Assets/Image/Layer-white.png';
import blog1 from "../../Assets/Image/blog_01.jpg";
import blog2 from "../../Assets/Image/blog_02.jpg";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <footer data-aos="fade-up" className="aos-init">
                <div className="footer-area default_bg">
                    <div className="footer-top section-ptb">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-xs-5">
                                    <div className="single_widget">
                                        <div className="address-widget">
                                            <div className="footer-logo">
                                                <Link to='/'><img
                                                    src={img1}
                                                    alt="img" className="img-fluid"/></Link >
                                            </div>
                                            <p><i className="fa fa-location-arrow" aria-hidden="true"
                                                style={{color: "#800182", fontSize: "20px", paddingRight:"5px"}}></i> Govindam Tower,
                                                Govinpura, Jaipur, Rajasthan 302034</p>
                                            <p><i className="fa fa-envelope" aria-hidden="true"
                                               style={{color: "#800182", fontSize: "20px", paddingRight:"5px"}}></i>
                                                xyz@gmail.com</p>
                                            <p><i className="fa fa-mobile" aria-hidden="true"
                                                style={{color: "#800182", fontSize: "20px", paddingRight:"5px"}}></i>
                                                +123-456-778, 123456780</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 mb-3d-5">
                                    <div className="single_widget">
                                        <h3>Quick Links</h3>
                                        <div className="widget-list">
                                            <ul>
                                                <li><Link to='/about'>About Us</Link></li>
                                                <li><Link to='/'>Our Instructors</Link></li>
                                                <li><Link to='/'>Courses</Link></li>
                                                <li><Link to='/'>History</Link></li>
                                                <li><Link to='/'>Privacy Policy</Link></li>
                                                <li><Link to='/'>Service Plus</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-xs-5">
                                    <div className="single_widget">
                                        <h3>Quick Links</h3>
                                        <div className="widget-list">
                                            <ul>
                                                <li><Link to='/about'>About Us</Link></li>
                                                <li><Link to='/facility'>Facilities</Link></li>
                                                <li><Link >Privacy Policy</Link></li>
                                                <li><Link to='/contact'>Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single_widget">
                                        <h3>Latest News</h3>
                                        <div className="widget-item">
                                            <div className="widget-image">
                                                <Link to='/'>
                                                <img
                                                    src={blog1}
                                                    alt="blogone"/></Link>
                                            </div>
                                            <div className="widget-content">
                                                <h5><Link to='/'>2023-24 TC Available for Download</Link>
                                                </h5>
                                                <div className="widget-meta">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-item">
                                            <div className="widget-image">
                                                <Link to='/'><img
                                                    src={blog2}
                                                    alt="blogone"/></Link>
                                            </div>
                                            <div className="widget-content">
                                                <h5><Link to='/'>Admissions Open 2024-25</Link></h5>
                                                <div className="widget-meta">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-wrapper border-top py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="footer-bottom">
                                        <div className="copyright-text">
                                            <p>Copyright 2022 XYZ INTERNATIONAL ACADEMY | All Rights Reserved. Design By:<Link
                                                target="_blank">Manju IT Solution</Link></p>
                                        </div>
                                        <div className="social-accounts">
                                            <ul>
                                                <li><Link to='/'><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="fab fa-linkedin-in"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export { Footer }