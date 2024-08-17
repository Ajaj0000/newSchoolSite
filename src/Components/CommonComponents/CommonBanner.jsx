import React from "react";
import { Link } from "react-router-dom";

function CommonBanner(props) {
    return (
        <>
            <section className="hero-section heroo height-470 aos-init aos-animate"
                data-aos="fade-up">
                <div className="hero-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-hrader text-white text-center">
                                    <h1 className="display-2">{props.head}</h1>
                                    <div className="page-breadcrumb">
                                        <p><Link className="text-white" to='/'>Home</Link> - {props.head}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { CommonBanner }