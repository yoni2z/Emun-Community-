

import React from "react";
import style from './LightboxModal.module.css';

const LightboxModal=({photo, onClose})=>{

    return (
        <div className={style.modal_overlay} onClick={onClose}>
            <div className={style.modal_content} onClick={(e)=>e.stopPropagation()}>
                <img src={photo} alt="Enlarged View" className={style.modal_image}/>
                <button className={style.close_button} onClick={onClose}><i className="fas fa-close"/></button>
            </div>

        </div>
    )
}
export default LightboxModal