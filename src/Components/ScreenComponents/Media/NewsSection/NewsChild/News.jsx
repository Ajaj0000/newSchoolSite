import React from "react";
import news1 from "../../../../../Assets/Image/1679471874151.jpg";
import news2 from "../../../../../Assets/Image/1679471874188.jpg";
import news3 from "../../../../../Assets/Image/1679471874225.jpg";
import news4 from "../../../../../Assets/Image/1679471874262.jpg";
import news5 from "../../../../../Assets/Image/1679471874298.jpg";
import news6 from "../../../../../Assets/Image/1679471874336.jpg";
import news7 from "../../../../../Assets/Image/1679471874375.jpg";
import news8 from "../../../../../Assets/Image/1679471874410.jpg";
import news9 from "../../../../../Assets/Image/1679471874438.jpg";
import news10 from "../../../../../Assets/Image/1679471874464.jpg";


function News() {

    const newsDetail = [
        {
            id: 1,
            img: news1,
        },
        {
            id: 2,
            img: news2,
        },
        {
            id: 3,
            img: news3,
        },
        {
            id: 4,
            img: news4,
        },
        {
            id: 5,
            img: news5,
        },
        {
            id: 6,
            img: news6,
        },
        {
            id: 7,
            img: news7,
        },
        {
            id: 8,
            img: news8,
        },
        {
            id: 9,
            img: news9,
        },
        {
            id: 10,
            img: news10,
        },
    ]

    return (
        <>
            <section class="featured-section-3 section-ptb-3 aos-init aos-animate" data-aos="fade-up">
                <div class="featured-area-wrapper show_navigation_2">
                    <div class="container-fluid">
                        <div class="row">
                            {
                                newsDetail.map((itm) => {
                                    return (
                                        <>
                                            <div class="col-md-3 mx-auto text-center" style={{margin:"10px"}} key={itm.id}>
                                                <img src={itm.img} style={{ width: "100%",aspectRatio:'2/2.5' }} alt="imgg"/>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { News }