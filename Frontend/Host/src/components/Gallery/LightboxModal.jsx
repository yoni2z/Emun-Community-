

import React from "react";
import style from './LightboxModal.module.css';

const LightboxModal=({photo, onClose,openModal, nextPhoto, prevPhoto})=>{

    return (
        <div className={style.modal_overlay} onClick={onClose}>
            <div className={style.modal_content} onClick={(e)=>e.stopPropagation()}>
                <img src={photo} alt="Enlarged View" className={style.modal_image}/>
                <button className={style.close_button} onClick={onClose}><i className="fas fa-close"/></button>
            </div>
            <h6></h6>
            <button className={style.previous_button} onClick={(e)=>{
                e.stopPropagation();
                if (prevPhoto) openModal(prevPhoto);
                }}><i className="fas fa-play fa-rotate-180">  </i></button>
            <button className={style.next_button} onClick={(e)=>{
                 e.stopPropagation();
                 if (nextPhoto) openModal(nextPhoto);
                 }}><i className="fas fa-play"> </i></button>
        </div>
    )
}
export default LightboxModal
