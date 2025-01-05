import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import "./styles.css"
export const FeaturesCard = ({image,title,description}) => {
  return (
    <div className='card-container'>
        <img src={image} alt="" />
        <div className="card-container-texts">
            <h3 href="">{title}</h3>
            <p>{description}</p>
            <a href="" >Read More<FaLongArrowAltRight/></a>
        </div>
    </div>
  )
}
