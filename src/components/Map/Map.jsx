import React from 'react'
import "./Map.css"
import map from "../../assets/Map.png"
import { useContext} from "react"
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 


const getStyles = (mode) =>({
  background: {
      backgroundColor: Theme[mode].backgroundColor,
     
  },
  text:{
      color:Theme[mode].color
  },
  theme: {
      color:Theme[mode].highlight

  }
});
const Map = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='MapContainer' style={styles.background}>
      <div className="MapContainer-holder">
        <img src={map} alt="map" />
      </div>
    </div>
  )
}

export default Map
