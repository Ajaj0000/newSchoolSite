import React from "react";
import list from '../../../../Assets/pdfs/bookList.pdf';

function BooksList() {
    return (
        <>
            <section className="services-section section-ptb">
                <div className="services-area">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-12 col-sm-12 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <iframe src={list} style={{ width: "100%", height: "1000px" }}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { BooksList }