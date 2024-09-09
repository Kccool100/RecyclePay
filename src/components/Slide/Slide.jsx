import { useState, useEffect } from "react"
import React from 'react'
import "./Slide.css"
const Slide = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(()=> {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId)
    },[images.length]);
  
    return(
        <div className="SlideCon">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
      )
}

export default Slide
