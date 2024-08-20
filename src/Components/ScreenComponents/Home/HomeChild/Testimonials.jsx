import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Testimonials() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const TestimonialData = [
        {
            id: 1,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 2,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 3,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 4,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 5,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 6,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 7,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 8,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
        {
            id: 9,
            review: 'One of the best school in Jaipur with great infrastructure both of study and play. It has got good labs where students experiments and try to know the knowledgeable facts of life. Proper discipline and wonderful staff makes it complete package.',
            name: 'Bhavya Saxena',
        },
    ]

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

                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        autoPlaySpeed={2000}
                                        autoPlay={true}
                                    // customRightArrow={<i class="fa-solid fa-chevron-right"></i>}
                                    >

                                        {
                                            TestimonialData.map((itm) => {
                                                return (
                                                    <>
                                                        <div key={itm.id} style={{margin:"0 10px"}}>
                                                            <div className="single-testimonial border-2 p-4">
                                                                <p>{itm.review}</p>
                                                                <div className="testimonial-referance">
                                                                    <p><strong>{itm.name}</strong> </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </Carousel>

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