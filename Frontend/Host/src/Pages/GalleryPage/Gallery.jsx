

import React from "react";
import style from"./Gallery.module.css";
import { useState,useRef } from "react";
import PhotoCard from "../../Components/PhotoCard";
const Gallery =()=>{
    return(
        <div className={style.Gallery_container}>
            <div>

            </div>
            <div className={style.Gallery_Text}>
                <h1>We hope to make this <span style={{color:'#00bbff'}}> World Happier</span></h1>
            </div>
            <div className={style.Photo_area}>
    
            </div>
        </div>
    )
}
export default Gallery