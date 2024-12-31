import React, { useRef, useState } from "react";
import style from './Photocard.module.css';

const PhotoCard = ({ photo_src, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={style.photo_container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <img src={photo_src} className={style.Curr_photo} />
            <div
                className={`${style.blue_shadow} ${isHovered ? style.visible  : ""}`}
            ></div>
            <i
                className={`fas fa-expand ${style.expand_icon} ${isHovered ? style.visible : ""}`}
            ></i>
        </div>
    );
};

export default PhotoCard;
