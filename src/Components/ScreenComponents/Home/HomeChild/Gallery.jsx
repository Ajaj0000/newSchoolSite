import React from "react";
import g1 from "../../../../Assets/Image/2b903e7a-818f-4b0b-bb9e-11813275f128.jpg";
import g2 from "../../../../Assets/Image/3d2270c4-2f84-49f5-9f67-5891692ca108.jpg";
import g3 from '../../../../Assets/Image/3db2c235-f904-4bde-a4de-8f31fbaa6f2d.jpg';
import g4 from "../../../../Assets/Image/5dcd1592-e2d7-4d8b-b103-0f2b9ec43d49.jpg";
import { Link } from "react-router-dom";
// import g5 from "../../../../Assets/imagee/5dcd1592-e2d7-4d8b-b103-0f2b9ec43d49.jpg";



function Gallery() {
    return (
        <>
            <section className="blog-section semi_dark_bg section-ptb aos-init aos-animate" data-aos="fade-up">
                <div className="blog-area gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center mb-4">
                                    <h4>Our Gallery</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="1" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/thumbnail.jpg" data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g1} alt="imf"/>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="2" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/thumbnail (4).jpg" data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g2} alt="imf"/>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="3" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/thumbnail (1).jpg" data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g3} alt="imf"/>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="4" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/2b903e7a-818f-4b0b-bb9e-11813275f128.jpg"
                                    data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g4} alt="pic"/>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="5" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/0434a974-a149-453e-a49b-338ae1fe629e.jpg"
                                    data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g1} alt="pic"/>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="6" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/5dcd1592-e2d7-4d8b-b103-0f2b9ec43d49.jpg"
                                    data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g4} alt="pic"/>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="7" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/3db2c235-f904-4bde-a4de-8f31fbaa6f2d.jpg"
                                    data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g2} alt="pic"/>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                <Link className="thumbnail" to='/' data-image-id="8" data-bs-toggle="modal"
                                    data-image="assets/images/gallery/3d2270c4-2f84-49f5-9f67-5891692ca108.jpg"
                                    data-bs-target="#image-gallery">
                                    <img className="img-responsive"
                                        src={g1} alt="imd"/>
                                </Link>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-4 col-md-12 col-xs-12 thumb"></div>
                            <div className="col-lg-2 col-md-4 col-xs-6 thumb">
                                <Link className="btn btn-info theme-btn">View More</Link>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xs-12 thumb"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Gallery }