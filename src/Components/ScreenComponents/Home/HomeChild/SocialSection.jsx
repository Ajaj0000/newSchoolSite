import React from "react";

function SocialSection() {
    return (
        <>
            <section className="blog-section section-ptb aos-init" data-aos="fade-up">
                <div className="blog-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center mb-4">
                                    <h4>AJ@Live</h4>
                                    <h2>Social Live</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h4 style={{ fontSize: "18px", background: "#800182", color: "#FFF", fontWeight: "bold !important", padding: "15px 0px", marginBottom: "0px !important" }}
                                    className="text-center mb-4"><b>Facebook</b></h4>
                                {/* <iframe src="https://www.facebook.com/reel/1522784588323434"
                                    height="400" style={{ border: "none", overflow: "hidden", width: "100%" }} scrolling="no" frameborder="0"
                                    allowtransparency="true" allow="encrypted-media">
                                </iframe> */}
                                <div id="instafeed-container">
                                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDemonSlayer.anime%2Fvideos%2F6058160380929599%2F&show_text=false&width=560&t=0"
                                      height="400" style={{ border: "none", overflow: "hidden", width: "100%", height:"100%" }} title="facbook" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true">
                                      </iframe>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <h4 style={{ fontSize: "18px", background: "#800182", color: "#FFF", fontWeight: "bold !important", padding: "15px 0px", marginBottom: "0px !important" }}
                                    className="text-center mb-4"><b>Instagram</b></h4>

                                <div id="instafeed-container">
                                    <iframe src="https://www.instagram.com/reel/C56X11-SzRQ/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                                        height="400" title="insta" style={{ border: "none", overflow: "hidden", width: "100%" }} scrolling="no" frameborder="0"
                                        allowtransparency="true" allow="encrypted-media">
                                    </iframe>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <h4 style={{ fontSize: "18px", background: "#800182", color: "#FFF", fontWeight: "bold !important", padding: "15px 0px", marginBottom: "0px !important" }}
                                    className="text-center mb-4"><b>Youtube</b></h4>
                                <div className="youtube_list_vi">

                                    {/* <iframe style={{width:"100%"}}
                                    height="400"
                                        src="https://youtube.com/shorts/X4YmBqaPj_Q?si=Y11i94RHxpqnmyiw"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen="">
                                    </iframe> */}
                                    <iframe height="400" style={{width:"100%"}} src="https://www.youtube.com/embed/X4YmBqaPj_Q" title="iit bombay lecture hall #iitbombay #exams #motivation 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { SocialSection }