import React, { useEffect } from "react";
// import slider1 from '../../../../Assets/Image/Slider_1.png';
// import slider2 from '../../../../Assets/Image/360125335_706968694775288_7517762623680467558_n.jpg';
// import Swiper and modules styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AOS from "aos";
import { Link } from "react-router-dom";

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

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slider-area height-700 swiperr-slide overlay swiper-slide-duplicate swiper-slide-duplicate-active banner1"
                        style={{ width: "1440px" }}
                        data-swiper-slide-index="1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="slider-content text-white pb-5 mb-5" style={{ display: "none" }}>
                                        <h2 className="display-2">Standart Syllebaus For Students</h2>
                                        <p>Best Education Theme In 2019</p>
                                        <Link href="https://www.aiajaipur.com/#" className="button_one mt-4">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-area height-700 swiperr-slide overlay swiper-slide-prev swiper-slide-duplicate-next banner2"
                        style={{ width: "1440px" }}
                        data-swiper-slide-index="0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="slider-content text-white pb-5 mb-5" style={{ display: "none" }}>
                                        <h2 className="display-2">Better Education For a Better World</h2>
                                        <p>Best Education Theme In 2019</p>
                                        <Link to='/contact' className="button_one mt-4">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-area height-700 swiperr-slide overlay swiper-slide-active banner1"
                        data-swiper-slide-index="1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="slider-content text-white pb-5 mb-5" style={{ display: "none" }}>
                                        <h2 className="display-2">Standart Syllebaus For Students</h2>
                                        <p>Best Education Theme In 2019</p>
                                        <Link href="https://www.aiajaipur.com/#" className="button_one mt-4">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-area height-700 swiperr-slide overlay swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev banner2"
                        data-swiper-slide-index="0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="slider-content text-white pb-5 mb-5" style={{ display: "none" }}>
                                        <h2 className="display-2">Better Education For a Better World</h2>
                                        <p>Best Education Theme In 2019</p>
                                        <Link href="https://www.aiajaipur.com/#" className="button_one mt-4">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </>
    )
}
export { Banner }