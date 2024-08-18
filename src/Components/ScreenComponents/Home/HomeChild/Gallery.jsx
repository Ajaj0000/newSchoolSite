import React, { useEffect, useState } from "react";
import g1 from "../../../../Assets/Image/2b903e7a-818f-4b0b-bb9e-11813275f128.jpg";
import g2 from "../../../../Assets/Image/3d2270c4-2f84-49f5-9f67-5891692ca108.jpg";
import g3 from '../../../../Assets/Image/3db2c235-f904-4bde-a4de-8f31fbaa6f2d.jpg';
import g4 from "../../../../Assets/Image/5dcd1592-e2d7-4d8b-b103-0f2b9ec43d49.jpg";
import { Link } from "react-router-dom";


function Gallery() {

    const [isOpenImage, setIsOpenImage] = useState(false)
    const [currentImage, setCurrentImage] = useState(null)

    const openImage=(e)=>{
        setCurrentImage(e);
        setIsOpenImage(true)
    };
    const closeImage=()=>{
        setIsOpenImage(false)
    };

    const photo = [
        {
            id: 1,
            ig: g1,
        },
        {
            id: 2,
            ig: g2,
        },
        {
            id: 3,
            ig: g3,
        },
        {
            id: 4,
            ig: g4,
        },
        {
            id: 5,
            ig: g1,
        },
        {
            id: 6,
            ig: g4,
        },
        {
            id: 7,
            ig: g2,
        }

    ]

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

                            {
                                photo.map((itm) => {
                                    return (
                                        <>
                                            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                                                <span className="thumbnail" 
                                                     >
                                                    <img className="img-responsive"
                                                        src={itm.ig} alt="imf" onClick={()=>{openImage(itm.ig)}}/>
                                                </span>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-4 col-md-12 col-xs-12 thumb"></div>
                            <div className="col-lg-2 col-md-4 col-xs-6 thumb">
                                <Link to='/gallery' className="btn btn-info theme-btn">View More</Link>
                            </div>
                            <div className="col-lg-4 col-md-12 col-xs-12 thumb"></div>
                        </div>
                    </div>
                </div>
            </section>

            {
                isOpenImage && (
                    <div className="modal fade show" id="image-gallery" style={{ display:'block' }}>
                        <div className="modal-dialog modal-lg" style={{width:"570px"}}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    {/* <h5 className="modal-title sm-sub-title"></h5> */}
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
export { Gallery }