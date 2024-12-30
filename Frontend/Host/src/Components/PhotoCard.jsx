import React from "react";
import style from './Photocard.module.css';
const PhotoCard = ({photo_src})=>{

    return(
        <div className={style.photo_container}>
            <img src={photo_src} className={style.Curr_photo} />
        </div>
    )
}
export default PhotoCard