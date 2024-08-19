import React from "react";
import logo from '../../Assets/Image/Layer-22.png';
import location from '../../Assets/Image/location.png';
import phone from '../../Assets/Image/phone.png';
import whiteLogo from '../../Assets/Image/Layer-white.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <header>
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul>
                                    <li className="btn btn-dark" style={{ background: "transparent" }}><Link style={{ color: "#FFF" }}>Download TC</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4" style={{ textAlign: "right;" }}>
                                <div className="social-accounts">
                                    <ul>
                                        <li><Link><FaFacebook /></Link></li>
                                        <li><Link><FaInstagram /></Link></li>
                                        <li><Link><FaLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_top_area my-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header_top d-flex justify-content-between">
                                    <div className="site_logo">
                                        <Link to='/'><img src={logo} alt="logo" className="img-fluid" /></Link>
                                    </div>
                                    <div className="site_info d-flex justify-content-between">
                                        <div className="single_info">
                                            <img src={location} alt="Location" className="img-fluid" />
                                            <div className="info_data">
                                                <h6>Location</h6>
                                                <p>Govindam Tower, Govindpura, Jaipur, Rajasthan 302034</p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <img src={phone} alt="Location" className="img-fluid" />
                                            <div className="info_data">
                                                <h6>Phone</h6>
                                                <p>+1234567890 , 1234567890</p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <Link to="/admission"><button className="special-button">Apply Now <i className="fa fa-angle-right"></i> <span className="button_icon"><i className="far fa-file-alt"></i></span></button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-area bg_dark_mobile default_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-menu default_bg">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="mobile_site_logo d-none">
                                            <Link to='/'><img src={whiteLogo} alt="logo" className="img-fluid" /></Link>
                                        </div>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                            <i className="fa fa-bars"></i>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                                <li className="nav-item">
                                                    <Link to='/' className="nav-link">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/about' className="nav-link">About</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to='/facilities'>Facilities</Link>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                                        Academics
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" to='/curriculum'>Curriculum</Link></li>
                                                        <li><Link className="dropdown-item" to='/planner'>Activity Planner</Link></li>
                                                        <li><Link className="dropdown-item" to='/' >Evaluation System</Link></li>
                                                        <li><Link className="dropdown-item" to='/'>Academic Achievments</Link></li>
                                                        <li><Link className="dropdown-item" to='/facilities'>Faculties</Link></li>
                                                        <li><Link className="dropdown-item" to='/'>Teaching Learning Process</Link></li>
                                                        <li><Link className="dropdown-item" to='/'>Affiliation Status</Link></li>
                                                        <li><Link className="dropdown-item" to='/booksList'>List OF Books Prescribe</Link></li>
                                                        <li><Link className="dropdown-item" to='/annualReport'>Annual Report</Link></li>
                                                        <li><Link className="dropdown-item" to='/calander'>Academic Calender</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                                        Media
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" to='/'>Events</Link></li>
                                                        <li><Link to='/gallery' className="dropdown-item">Gallery</Link></li>
                                                        <li><Link className="dropdown-item" to='/news'>News</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                                        Achievement
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" to='/result'>Academic</Link></li>
                                                        <li><Link className="dropdown-item">Sports</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                                        Admissions
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" to='/procedure'>Admission procedure</Link></li>
                                                        <li><Link className="dropdown-item" to='/inquiry'>Inquiry</Link></li>
                                                        <li><Link className="dropdown-item" to='/fees'>Admission fees</Link></li>
                                                        <li><Link className="dropdown-item" to='/'>Transfer Certificate</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                                        Activities
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" to='/'>Co-Curriculum Activities</Link></li>
                                                        <li><Link className="dropdown-item" to='/'>Sports &amp; Games</Link></li>
                                                        <li><Link className="dropdown-item" to='/'>Community &amp; Society</Link></li>
                                                        <li><Link className="dropdown-item" to='/house'>Houses</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                                        CBSE
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><Link className="dropdown-item" to='/mandatory'>Mandatory Disclosure</Link></li>
                                                        <li><Link className="dropdown-item" >Affiliation Copy</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to='/contact' >Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Button trigger modal --> */}
                </div>
            </header>
        </>
    )
}
export { Navbar }