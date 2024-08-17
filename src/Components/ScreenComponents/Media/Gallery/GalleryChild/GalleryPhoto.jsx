import React, { useState } from "react";
import { Link } from "react-router-dom";
import { galleryData } from "../../../../../Utilities/GalleryData";

function GalleryPhoto() {

    const [isOpenImage, setIsOpenImage] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)

    const openImage = (imgg) => {
        setCurrentImage(imgg)
        setIsOpenImage(true)
        console.log(isOpenImage, currentImage, 'image open');

    };
    console.log(isOpenImage, currentImage, 'image open');

    const closeImage = () => {
        setCurrentImage(null)
        setIsOpenImage(false)
    };

    


    return (
        <>
            <section className="featured-section-3 section-ptb-3 aos-init aos-animate" data-aos="fade-up">
                <div className="featured-area-wrapper show_navigation_2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 mx-auto text-center mb-5">
                                <div className="portfolios-list-2">
                                    <ul>
                                        <li className="active button_four filter-button" data-filter="all">All</li>
                                        <li className="button_four filter-button" data-filter="sports">Sports</li>
                                        <li className="button_four filter-button" data-filter="activities">Activities</li>
                                        <li className="button_four filter-button" data-filter="cultural_activities">Cultural
                                            Activities</li>
                                        <li className="button_four filter-button" data-filter="videos">Videos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                galleryData.map((itm) => {
                                    return (
                                        <>
                                            <div className="col-lg-3 col-sm-6 filter sports p-0 m-0">
                                                <div className="single-gallery">
                                                    <div className="gallery-image">
                                                        <img src={itm.img}
                                                            alt="Featured" className="img-fluid" />
                                                        <div className="gallery-content">
                                                            <div className="gallery-links">
                                                                <ul>
                                                                    <li onClick={() => { openImage(itm.img) }} ><Link className="thumbnail"><i className="fas fa-search"></i></Link>
                                                                    </li>
                                                                    <li onClick={() => { openImage(itm.img) }}><Link className="thumbnail"><i className="fas fa-link"></i></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </section>
            {
                isOpenImage && (
                    <div className="modal fade show" id="image-gallery" style={{ display:'block' }}>
                        <div className="modal-dialog modal-lg" >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title sm-sub-title"></h5>
                                    <button type="button" className="close" onClick={closeImage}>
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body text-center">
                                    <img id="image-gallery-image" className="img-responsive" src={currentImage} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </>
    )
}
export { GalleryPhoto }