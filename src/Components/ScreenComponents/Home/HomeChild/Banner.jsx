import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

function Banner() {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);


    return (
        <>

            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <div className="slider-area height-700 swiperr-slide overlay swiper-slide-duplicate swiper-slide-duplicate-active banner1"
                        style={{ width: "1440px" }}
                        data-swiper-slide-index="1">
                        <div className="container">
                            <div className="row" style={{justifyContent:'center'}}>
                                <div className="col-md-8">
                                    <div className="slider-content text-white pb-5 mb-5" style={{ display: "block" }}>
                                        <h2 className="display-2">Standart Syllebaus For Students</h2>
                                        <p>Best Education Theme In 2024</p>
                                        <Link to='/contact' className="button_one mt-4">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="slider-area height-700 swiperr-slide overlay swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev banner2"
                        data-swiper-slide-index="0">
                        <div className="container">
                            <div className="row" style={{justifyContent:'center'}}>
                                <div className="col-md-9">
                                    <div className="slider-content text-white pb-5 mb-5" style={{ display: "block" }}>
                                        <h2 className="display-2">Better Education For a Better World</h2>
                                        <p>Best Education Theme In 2024</p>
                                        <Link to='/contact' className="button_one mt-4">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
        </>
    )
}
export { Banner }