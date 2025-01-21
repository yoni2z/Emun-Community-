import React, { useEffect, useState } from "react";
import style from "./Gallery.module.css";
import PhotoCard from "../../Components/Gallery/PhotoCard";
import LightboxModal from "../../Components/Gallery/LightboxModal";
import TitleBanner from "../../components/blog/TitleBanner";
import VolenteerCard from "../../Components/volenteer-with-us/VolenteerCard";
import GalleryBg from "../../assets/gallery-title-bg.jpg";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState([]); // Photos currently visible
  const [startIndex, setStartIndex] = useState(0); // Track the current index
  const limit = 5; // Number of photos to show at a time

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/gallery/")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setVisiblePhotos(data.slice(0, limit)); // Show the first 6 photos initially
      })
      .catch((error) => console.log("error fetching photos ", error));
  }, []);

  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [nextPhoto, setNextPhoto] = useState(null);
  const [prevPhoto, setPrevPhoto] = useState(null);

  const openModal = (photo) => {
    setCurrentPhoto(photo.image);
    const index = photos.indexOf(photo);
    setNextPhoto(index < photos.length - 1 ? photos[index + 1] : null);
    setPrevPhoto(index > 0 ? photos[index - 1] : null);
  };
  const closeModal = () => {
    setCurrentPhoto(null);
    setNextPhoto(null);
    setPrevPhoto(null);
  };
  // fetching more photos is done here
  const fetchMore = () => {
    const newStartIndex = startIndex + limit;
    const newVisiblePhotos = photos.slice(0, newStartIndex + limit);
    setVisiblePhotos(newVisiblePhotos); // Update the visible photos
    setStartIndex(newStartIndex); // Update the index
  };

  return (
    <>
      <div className={style.Gallery_container}>
        <div className={style.Gallery_topContainer}>
          <TitleBanner title={"Gallery"} backgroundImage={GalleryBg} />
        </div>
        <div className={style.Gallery_Text}>
          <h1>
            We hope to make this{" "}
            <span style={{ color: "#00bbff" }}>World Happier</span>
          </h1>
          <p>
            International giving can be complex. We've donated $321,000 to 20
            countries charities in just the past five years.
          </p>
        </div>
        <div className={style.Photo_area}>
          {visiblePhotos.map((photo, index, arr) => {
            const next = arr[index + 1];
            return (
              <PhotoCard
                key={index}
                photo_src={photo.image}
                onClick={() => openModal(photo)}
              />
            );
          })}
        </div>
        {currentPhoto && (
          <LightboxModal
            photo={currentPhoto}
            onClose={closeModal}
            openModal={openModal}
            nextPhoto={nextPhoto}
            prevPhoto={prevPhoto}
          />
        )}
        <button className={style.view_more} onClick={fetchMore}>
          View More
        </button>
      </div>
      <VolenteerCard />
    </>
  );
};

export default Gallery;
