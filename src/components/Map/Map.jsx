import React from 'react'
import "./Map.css"
import map from "../../assets/Map.png"
const Map = () => {
  return (
    <div className='MapContainer'>
      <div className="MapContainer-holder">
        <img src={map} alt="map" />
      </div>
    </div>
  )
}

export default Map
