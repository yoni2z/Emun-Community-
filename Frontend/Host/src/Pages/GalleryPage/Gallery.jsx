import React, { useEffect, useState } from "react";
import style from "./Gallery.module.css";
import PhotoCard from "../../Components/Gallery/PhotoCard";
import LightboxModal from "../../Components/Gallery/LightboxModal";
import TitleBanner from "../../components/blogs/TitleBanner";

const Gallery = () => {

    const [photos, setPhotos]= useState( [
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-01.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-02.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-03.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-04.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-05.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-06.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-07.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-08.jpg",
          alt:"Photo alt",
        },
        { photo_src:"https://demo.joomshaper.com/2017/hope/images/2017/09/14/gallery-09.jpg",
          alt:"Photo alt",
        },
      
  ]);
    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [nextPhoto, setNextPhoto]= useState(null);
    const [prevPhoto, setPrevPhoto]= useState(null);

    const openModal = (photo) => {
        setCurrentPhoto(photo.photo_src);
        const index= photos.indexOf(photo);
        setNextPhoto(index< photos.length -1? photos[index + 1]: null);
        setPrevPhoto(index>0 ? photos[index-1]: null);
    };
    const closeModal = () => {
        setCurrentPhoto(null);
        setNextPhoto(null);
        setPrevPhoto(null);
    };
    // fetching more photos is done here
    const fetchMore = async () => {
        const newPhotos = await fetch("/api/photos").then((res) => res.json());
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    };
    
    useEffect(()=>{
        console.log(nextPhoto);
    },[nextPhoto])

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
                {photos.map((photo, index, arr) => {
                    const next=arr[index+1];
                    return (
                    <PhotoCard key={index} photo_src={photo.photo_src} onClick={() =>openModal(photo)}/>
                )})}
            </div>
            {currentPhoto && <LightboxModal photo={currentPhoto} onClose={closeModal} openModal={openModal} 
                                nextPhoto={nextPhoto} prevPhoto={prevPhoto} />}
            <button className={style.view_more} onClick={fetchMore}>
                View More
            </button>
        </div>
    );
};

export default Gallery;
