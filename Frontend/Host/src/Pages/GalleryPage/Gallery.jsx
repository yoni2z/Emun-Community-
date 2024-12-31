import React, { useState } from "react";
import style from "./Gallery.module.css";
import PhotoCard from "../../Components/Gallery/PhotoCard";
import LightboxModal from "../../Components/Gallery/LightboxModal";
import TitleBanner from "../../components/blogs/TitleBanner";

const Gallery = () => {
    const photos = [
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-01.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-02.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-03.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-04.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-05.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-06.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-07.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-08.jpg",
        "https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-09.jpg",
        // Add more URLs...
    ];

    const [currentPhoto, setCurrentPhoto] = useState(null);

    const openModal = (photo) => setCurrentPhoto(photo);
    const closeModal = () => setCurrentPhoto(null);

    return (
        <div className={style.Gallery_container}>
            <div className={style.Gallery_topContainer}>
                <TitleBanner title={"Gallery"} backgroundImage={"https://demo.joomshaper.com/2017/hope/images/demo/page-title-bg.jpg"} />
            </div>
            <div className={style.Gallery_Text}>
                <h1>
                    We hope to make this <span style={{ color: "#00bbff" }}>World Happier</span>
                </h1>
                <p>International giving can be complex. We've donated $321,000 to 20 countries charities in just the past five years.</p>
            </div>
            <div className={style.Photo_area}>
                {photos.map((photo, index) => (
                    <PhotoCard key={index} photo_src={photo} onClick={() => openModal(photo)} />
                ))}
            </div>
            {currentPhoto && <LightboxModal photo={currentPhoto} onClose={closeModal} />}
        </div>
    );
};

export default Gallery;
