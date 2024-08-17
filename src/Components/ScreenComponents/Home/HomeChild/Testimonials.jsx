import React from "react";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
    return (
        <>
            <section className="testimonials-section section-ptb aos-init aos-animate" data-aos="fade-up">
                <div className="testimonials-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center mb-4">
                                    <h4>Testimonials</h4>
                                    <h2>Our Student Saying...</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="testimonials-wrapper">

                    
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                                        spaceBetween={50}
                                        slidesPerView={3}
                                        navigation
                                        loop={true}
                                        autoplay={true}
                                        // scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        // onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide>

                                            <div className="single-testimonial border-2 p-4">
                                                <p>One of the best school in Jaipur with great infrastructure both of study
                                                    and play. It has got good labs where students experiments and try to
                                                    know the knowledgeable facts of life. Proper discipline and wonderful
                                                    staff makes it complete package.</p>
                                                <div className="testimonial-referance">
                                                    <p><strong>Bhavya Saxena </strong> </p>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>

                                            <div className="single-testimonial border-2 p-4">
                                                <p>One of the best school in Jaipur with great infrastructure both of study
                                                    and play. It has got good labs where students experiments and try to
                                                    know the knowledgeable facts of life. Proper discipline and wonderful
                                                    staff makes it complete package.</p>
                                                <div className="testimonial-referance">
                                                    <p><strong>Bhavya Saxena </strong> </p>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>

                                            <div className="single-testimonial border-2 p-4">
                                                <p>One of the best school in Jaipur with great infrastructure both of study
                                                    and play. It has got good labs where students experiments and try to
                                                    know the knowledgeable facts of life. Proper discipline and wonderful
                                                    staff makes it complete package.</p>
                                                <div className="testimonial-referance">
                                                    <p><strong>Bhavya Saxena </strong> </p>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>

                                            <div className="single-testimonial border-2 p-4">
                                                <p>One of the best school in Jaipur with great infrastructure both of study
                                                    and play. It has got good labs where students experiments and try to
                                                    know the knowledgeable facts of life. Proper discipline and wonderful
                                                    staff makes it complete package.</p>
                                                <div className="testimonial-referance">
                                                    <p><strong>Bhavya Saxena </strong> </p>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>

                                            <div className="single-testimonial border-2 p-4">
                                                <p>One of the best school in Jaipur with great infrastructure both of study
                                                    and play. It has got good labs where students experiments and try to
                                                    know the knowledgeable facts of life. Proper discipline and wonderful
                                                    staff makes it complete package.</p>
                                                <div className="testimonial-referance">
                                                    <p><strong>Bhavya Saxena </strong> </p>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>

                                            <div className="single-testimonial border-2 p-4">
                                                <p>One of the best school in Jaipur with great infrastructure both of study
                                                    and play. It has got good labs where students experiments and try to
                                                    know the knowledgeable facts of life. Proper discipline and wonderful
                                                    staff makes it complete package.</p>
                                                <div className="testimonial-referance">
                                                    <p><strong>Bhavya Saxena </strong> </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>


                                    <div className="owl-stage-outer">
                                        <div className="owl-stage"
                                            style={{ transform: "translate3d(-1508px, 0px, 0px)", transition: "all", width: "6032px" }} >






                                            {/* <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>One of the best school in Jaipur with great infrastructure both of study
                                                        and play. It has got good labs where students experiments and try to
                                                        know the knowledgeable facts of life. Proper discipline and wonderful
                                                        staff makes it complete package.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Bhavya Saxena </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I studied 12 years in this school and one thing that I want to say is
                                                        that it is one of the best schools in Jaipur for the holistic growth.
                                                        Apart from studying, you can take part in sports, and other
                                                        co-curricular activities like singing, dancing, small acts, and more.
                                                    </p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Umang Rawat </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I am myself a student of this school, it has a very disciplined system
                                                        along with an Excellent studious environment with great teachers. All
                                                        the Teachers even the Principal are so kind, humble, and helping. All
                                                        the Facilities are here like labs, games and competition etc.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Neeraj Singh </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>All the facilities are there with a lot of inter-school and inter-house
                                                        competition every month New challenge studying over here since 9yr best
                                                        experience teachers are so friendly and they teaches very well.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Ravi Saxena </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I am a student at the Alpha International School. I am really happy to be
                                                        here and I am looking forward to my future here. The school has a great
                                                        atmosphere and the people here are really helpful and welcoming.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Mridul Pareek </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I was looking for a school that used more cutting-edge, interactive, and
                                                        innovative teaching methods than just the blackboard when I came across
                                                        this school...and it is exactly what I wanted</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Krishna Gupta </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I have been studying in this school from the past 5 years and I have had
                                                        an excellent experience here. The staff and faculty provided us with a
                                                        lot of support academically as well as in the sports spectra.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Renuka Joshi </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active " style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>Alpha International Academy is the best school in Jaipur from the
                                                        teachers to the students to the challenging curriculum. It integrates
                                                        compassion into the teaching standards, emphasizes the importance of
                                                        values and build leaders through each of their classes and lessons.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Aditi Tiwari </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>One of the best school in Jaipur with great infrastructure both of study
                                                        and play. It has got good labs where students experiments and try to
                                                        know the knowledgeable facts of life. Proper discipline and wonderful
                                                        staff makes it complete package.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Bhavya Saxena </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I studied 12 years in this school and one thing that I want to say is
                                                        that it is one of the best schools in Jaipur for the holistic growth.
                                                        Apart from studying, you can take part in sports, and other
                                                        co-curricular activities like singing, dancing, small acts, and more.
                                                    </p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Umang Rawat </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I am myself a student of this school, it has a very disciplined system
                                                        along with an Excellent studious environment with great teachers. All
                                                        the Teachers even the Principal are so kind, humble, and helping. All
                                                        the Facilities are here like labs, games and competition etc.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Neeraj Singh </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>All the facilities are there with a lot of inter-school and inter-house
                                                        competition every month New challenge studying over here since 9yr best
                                                        experience teachers are so friendly and they teaches very well.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Ravi Saxena </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I am a student at the Alpha International School. I am really happy to be
                                                        here and I am looking forward to my future here. The school has a great
                                                        atmosphere and the people here are really helpful and welcoming.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Mridul Pareek </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I was looking for a school that used more cutting-edge, interactive, and
                                                        innovative teaching methods than just the blackboard when I came across
                                                        this school...and it is exactly what I wanted</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Krishna Gupta </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>I have been studying in this school from the past 5 years and I have had
                                                        an excellent experience here. The staff and faculty provided us with a
                                                        lot of support academically as well as in the sports spectra.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Renuka Joshi </strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: "362px", marginRight: "15px" }}>
                                                <div className="single-testimonial border-2 p-4">
                                                    <p>Alpha International Academy is the best school in Jaipur from the
                                                        teachers to the students to the challenging curriculum. It integrates
                                                        compassion into the teaching standards, emphasizes the importance of
                                                        values and build leaders through each of their classes and lessons.</p>
                                                    <div className="testimonial-referance">
                                                        <p><strong>Aditi Tiwari </strong> </p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* <div className="owl-nav disabled">
                                        <button type="button" role="presentation"
                                            className="owl-prev"><span aria-label="Previous">‹</span></button>
                                        <button type="button"
                                            role="presentation" className="owl-next"><span aria-label="Next">›</span>
                                        </button>
                                    </div>
                                    <div className="owl-dots"><button role="button"
                                        className="owl-dot active"><span></span></button><button role="button"
                                            className="owl-dot"><span></span></button><button role="button"
                                                className="owl-dot"><span></span></button>
                                    </div> */} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Testimonials }