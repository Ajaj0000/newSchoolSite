import React, { useState } from "react";
import { Link } from "react-router-dom";
import { galleryData } from "../../../../../Utilities/GalleryData";

function GalleryPhoto() {

    const [galleryPic, setGalleryPic] = useState(galleryData)
    const [galleryPicFilter, setGalleryPicFilter] = useState([...galleryPic])

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

    const filterData =(e)=>{
        const getFilter = galleryPic.filter((itm)=> itm.category === e)
        // setGalleryPic(getFilter)
        setGalleryPicFilter(getFilter)
    };
    const all =()=>{
        setGalleryPicFilter(galleryPic)
    };

    const [activity, setActivity] = useState(false)
    const [alll, setalll] =useState(true)
    const [sports, setSports] = useState(false)
    const [videos, setVideos] = useState(false)
    const [cultural, setCultural] = useState(false)

    const alllStatus =()=>{
        setalll(true)
        setSports(false)
        setVideos(false)
        setCultural(false)
        setActivity(false)
    };
    const activetyStatus =()=>{
        setActivity(true)
        setalll(false)
        setSports(false)
        setVideos(false)
        setCultural(false)
    };
    const sportsStatus=()=>{
        setSports(true)
        setActivity(false)
        setalll(false)
        setVideos(false)
        setCultural(false)
    };
    const culturalStatus=()=>{
        setCultural(true)
        setalll(false)
        setSports(false)
        setVideos(false)
        setActivity(false)
    };
    const videoStatus=()=>{
        setActivity(false)
        setCultural(false)
        setalll(false)
        setSports(false)
        setVideos(true)
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
                                        <li className={`${alll ? 'active' : ''} button_four filter-button`} onClick={()=>{all(); alllStatus()}} >All</li>
                                        <li className={`${sports ? 'active' : ''} button_four filter-button`} onClick={(e)=>{filterData("SPORTS"); sportsStatus() }} >Sports</li>
                                        <li className={`${activity ? 'active' : ''} button_four filter-button`} onClick={(e)=>{filterData("ACTIVITIES") ; activetyStatus()}} >Activities</li>
                                        <li className={`${cultural ? 'active' : ''} button_four filter-button`} onClick={(e)=>{filterData("CULTURAL ACTIVITIES") ; culturalStatus()}} >Cultural Activities</li>
                                        <li className={`${videos ? 'active' : ''} button_four filter-button`} onClick={(e)=>{filterData("VIDEOS"); videoStatus()}} >Videos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                galleryPicFilter.map((itm) => {
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
export { GalleryPhoto }